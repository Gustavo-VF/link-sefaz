// contador.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    getDatabase, ref, onValue, onDisconnect, set,
    serverTimestamp, push, update, increment
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDYT8qbUvSBKG8fw_anKtE5TyN3tnt4ypY",
    authDomain: "teste-promo-f5931.firebaseapp.com",
    databaseURL: "https://teste-promo-f5931-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "teste-promo-f5931",
    storageBucket: "teste-promo-f5931.firebasestorage.app",
    messagingSenderId: "661353183670",
    appId: "1:661353183670:web:77abf053a3dc69a62ca917"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const meuId = crypto.randomUUID();
const meuStatusRef = ref(db, "online/" + meuId);
const conexaoRef = ref(db, ".info/connected");
const onlineRef = ref(db, "online");

function dataHoje() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// Firebase não aceita ".", "#", "$", "[", "]" em chaves — trocamos "." por "_"
function sanitizarIp(ip) {
    return ip.replace(/\./g, "_");
}

function ultimos7Dias() {
    const dias = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        dias.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`);
    }
    return dias; // hoje primeiro, depois voltando no tempo
}

async function pegarIp() {
    try {
        const resp = await fetch("https://api.ipify.org?format=json");
        const dados = await resp.json();
        return dados.ip;
    } catch (erro) {
        return "desconhecido";
    }
}

async function registrarAcesso() {
    const ip = await pegarIp();
    const ipKey = sanitizarIp(ip);
    const hoje = dataHoje();

    // Presença em tempo real
    set(meuStatusRef, { entrou: serverTimestamp(), ip });
    onDisconnect(meuStatusRef).remove();

    // Log bruto (histórico detalhado)
    push(ref(db, "historico/" + hoje), { id: meuId, ip, hora: serverTimestamp() });

    // Contadores atômicos — soma direto no servidor, sem precisar ler antes
    update(ref(db), {
        "estatisticas/total": increment(1),
        [`estatisticas/porDia/${hoje}/total`]: increment(1),
        [`estatisticas/porIp/${ipKey}/total`]: increment(1),
        [`estatisticas/porIp/${ipKey}/porDia/${hoje}`]: increment(1),
        [`estatisticas/porIp/${ipKey}/ipOriginal`]: ip // guarda o IP legível, já que a chave está sanitizada
    });
}

onValue(conexaoRef, (snap) => {
    if (snap.val() === true) registrarAcesso();
});

// Online agora
onValue(onlineRef, (snap) => {
    const total = snap.exists() ? Object.keys(snap.val()).length : 0;
    document.getElementById("contadorOnline").textContent = total;
});

// Total geral
onValue(ref(db, "estatisticas/total"), (snap) => {
    document.getElementById("totalGeral").textContent = snap.exists() ? snap.val() : 0;
});

// Tabela: total por dia (todos os IPs), últimos 7 dias
onValue(ref(db, "estatisticas/porDia"), (snap) => {
    const dados = snap.exists() ? snap.val() : {};
    const corpo = document.querySelector("#tabelaDias tbody");
    corpo.innerHTML = "";
    ultimos7Dias().forEach(dia => {
        const total = dados[dia]?.total ?? 0;
        corpo.innerHTML += `<tr><td>${dia}</td><td>${total}</td></tr>`;
    });
});

// Tabela: por IP, com total geral e breakdown dos últimos 7 dias
onValue(ref(db, "estatisticas/porIp"), (snap) => {
    const dados = snap.exists() ? snap.val() : {};
    const corpo = document.querySelector("#tabelaIps tbody");
    corpo.innerHTML = "";
    const dias = ultimos7Dias();

    Object.values(dados).forEach(ipDados => {
        const ipLegivel = ipDados.ipOriginal ?? "desconhecido";
        const totalGeral = ipDados.total ?? 0;
        const porDiaTexto = dias
            .map(dia => `${dia}: ${ipDados.porDia?.[dia] ?? 0}`)
            .join(" | ");

        corpo.innerHTML += `<tr><td>${ipLegivel}</td><td>${totalGeral}</td><td>${porDiaTexto}</td></tr>`;
    });
});