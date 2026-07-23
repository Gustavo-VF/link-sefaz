const estadoNomes = {
    "11": "Rondônia",
    "12": "Acre",
    "13": "Amazonas",
    "14": "Roraima",
    "15": "Pará",
    "16": "Amapá",
    "17": "Tocantins",
    "21": "Maranhão",
    "22": "Piauí",
    "23": "Ceará",
    "24": "Rio Grande do Norte",
    "25": "Paraíba",
    "26": "Pernambuco",
    "27": "Alagoas",
    "28": "Sergipe",
    "29": "Bahia",
    "31": "Minas Gerais",
    "32": "Espírito Santo",
    "33": "Rio de Janeiro",
    "35": "São Paulo",
    "41": "Paraná",
    "42": "Santa Catarina",
    "43": "Rio Grande do Sul",
    "50": "Mato Grosso do Sul",
    "51": "Mato Grosso",
    "52": "Goiás",
    "53": "Distrito Federal"
};

const mesNome = {
    "01": "Janeiro",
    "02": "Fevereiro",
    "03": "Março",
    "04": "Abril",
    "05": "Maio",
    "06": "Junho",
    "07": "Julho",
    "08": "Agosto",
    "09": "Setembro",
    "10": "Outubro",
    "11": "Novembro",
    "12": "Dezembro"
};

const emissaoNomes = {
    "1": "Emissão Normal",
    "2": "Contingência FS-IA (Formulário de Segurança - Impressor Autônomo)",
    "3": "Contingência SCAN (Sistema de Contingência do Ambiente Nacional)",
    "4": "Contingência DPEC (Declaração Prévia de Emissão em Contingência)",
    "5": "Contingência FS-DA (Formulário de Segurança - Documento Auxiliar)",
    "6": "Contingência SVC-AN (Sistema de Contingência do Ambiente Nacional)",
    "7": "Contingência SVC-RS (Sistema de Contingência do Rio Grande do Sul)",
    "8": "Contingência SVC-SP (Sistema de Contingência de São Paulo)",
    "9": "Contingência Offline (emissão sem conexão com a SEFAZ - NFC-e)"
};

const satLinks = {
    "11": "https://sistemas.sefaz.ro.gov.br/",
    "12": "https://www.sefaz.ac.gov.br/sat/",
    "13": "https://sistemas.sefaz.am.gov.br/nfceweb/formConsulta.do",
    "14": "https://www.sefaz.rr.gov.br/nfc-e",
    "15": "https://app.sefa.pa.gov.br/consulta-nfce/#/consulta",
    "16": "https://www.sefaz.ap.gov.br/sate/seg/SEGf_AcessarFuncao.jsp?cdFuncao=FIS_1261",
    "17": "http://www.sefaz.to.gov.br/nfce/consulta.jsf",
    "21": "http://www.nfce.sefaz.ma.gov.br/portal/consultarnfce.jsp",
    "22": "https://www.sefaz.pi.gov.br/nfce/qrcode",
    "23": "https://cfe.sefaz.ce.gov.br/mfe/servicos#/cupom-fiscal",
    "24": "http://nfce.set.rn.gov.br/consultarNFCe.aspx",
    "25": "https://www.sefaz.pb.gov.br/servirtual/documentos-fiscais/nfc-e/consultar-nfc-e",
    "26": "http://nfe.sefaz.pe.gov.br/nfe-web/consNfe",
    "27": "https://dfe-portal.svrs.rs.gov.br/NFCe/Consulta", //"https://nfce.sefaz.al.gov.br/consultaNFCe.htm",
    "28": "https://nfce.sefaz.se.gov.br/portal/portalNoticias.jsp?jsp=barra-menu/servicos/consultaDANFENFCe.htm",
    "29": "http://nfe.sefaz.ba.gov.br/servicos/nfce/Modulos/Geral/NFCEC_consulta_chave_acesso.aspx",
    "31": "http://nfce.fazenda.mg.gov.br/portalnfce/sistema/consultaarg.xhtml",
    "32": "http://app.sefaz.es.gov.br/ConsultaNFCe/Default.aspx",
    "33": "https://consultadfe.fazenda.rj.gov.br/consultaDFe/paginas/consultaChaveAcesso.faces",
    "35": "https://satsp.fazenda.sp.gov.br/COMSAT/Public/ConsultaPublica/ConsultaPublicaCfe.aspx",
    "41": "https://sped.fazenda.pr.gov.br/NFCe/webservices/sped/nfce/completa",
    "42": "https://sat.sef.sc.gov.br/tax.net/Sat.Dfe.NFCe.Web/Consultas/ConsultaPublicaNFCe.aspx",
    "43": "https://www.sefaz.rs.gov.br/NFE/NFE-NFC.aspx",
    "50": "http://www.dfe.ms.gov.br/nfce/consulta/",
    "51": "https://www.sefaz.mt.gov.br/nfce/consultanfce",
    "52": "https://www.go.gov.br/servicos/servico/consultar-nota-fiscal-eletronica-pela-chave-de-acesso",
    "53": "https://ww1.receita.fazenda.df.gov.br/servicos"
};

const nfceLinks = {
    "11": "https://www.nfce.sefin.ro.gov.br/",
    "12": "https://www.sefaznet.ac.gov.br/nfce/consulta",
    "13": "https://sistemas.sefaz.am.gov.br/nfceweb/formConsulta.do",
    "14": "https://www.sefaz.rr.gov.br/nfce/servlet/wp_consulta_nfce",
    "15": "https://app.sefa.pa.gov.br/consulta-nfce/#/consulta",
    "16": "https://www.sefaz.ap.gov.br/sate/seg/SEGf_AcessarFuncao.jsp?cdFuncao=FIS_1261",
    "17": "http://www.sefaz.to.gov.br/nfce/consulta.jsf",
    "21": "http://www.nfce.sefaz.ma.gov.br/portal/consultarnfce.jsp",
    "22": "https://www.sefaz.pi.gov.br/nfce/qrcode",
    "23": "http://nfce.sefaz.ce.gov.br/pages/consultaNota.jsf",
    "24": "http://nfce.set.rn.gov.br/consultarNFCe.aspx",
    "25": "https://www.sefaz.pb.gov.br/servirtual/documentos-fiscais/nfc-e/consultar-nfc-e",
    "26": "https://nfce.sefaz.pe.gov.br:444/nfce-web/consNfce",
    "27": "https://dfe-portal.svrs.rs.gov.br/NFCe/Consulta", // "https://nfce.sefaz.al.gov.br/consultaNFCe.htm",
    "28": "https://nfce.sefaz.se.gov.br/portal/portalNoticias.jsp?jsp=barra-menu/servicos/consultaDANFENFCe.htm",
    "29": "http://nfe.sefaz.ba.gov.br/servicos/nfce/default.aspx",
    "31": "http://nfce.fazenda.mg.gov.br/portalnfce/sistema/consultaarg.xhtml",
    "32": "http://app.sefaz.es.gov.br/ConsultaNFCe/Default.aspx",
    "33": "https://consultadfe.fazenda.rj.gov.br/consultaDFe/paginas/consultaChaveAcesso.faces",
    "35": "https://www.nfce.fazenda.sp.gov.br/NFCeConsultaPublica/Paginas/ConsultaPublica.aspx",
    "41": "https://sped.fazenda.pr.gov.br/NFCe/webservices/sped/nfce/completa",
    "42": "https://sat.sef.sc.gov.br/tax.net/Sat.Dfe.NFCe.Web/Consultas/ConsultaPublicaNFCe.aspx",
    "43": "https://www.sefaz.rs.gov.br/NFE/NFE-NFC.aspx",
    "50": "http://www.dfe.ms.gov.br/nfce/consulta/",
    "51": "http://www.sefaz.mt.gov.br/nfce/consultanfce",
    "52": "http://nfe.sefaz.go.gov.br/nfeweb/sites/nfe/consulta-completa",
    "53": "https://ww1.receita.fazenda.df.gov.br/servicos"
};

const universalLink = "https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=resumo&tipoConteudo=7PhJ%20gAVw2g=";
const universalLink2 = "https://meudanfe.com.br/#";



const estadoOut = document.getElementById("displayestado");
const mesOut = document.getElementById("displaymes");
const anoOut = document.getElementById("displayano");
const cnpjOut = document.getElementById("displaycnpj");
const satOut = document.getElementById("displaysat");
const numeroOut = document.getElementById("displaynumero");
const tipoOut = document.getElementById("displaytipo");
const emissaoOut = document.getElementById("displayemissao");
const validacaoOut = document.getElementById("displayvalidacao");

const chaveAcesso = document.getElementById("chave");
const btnColar = document.getElementById("bColar");

const divResultado = document.getElementById("resultado");

const link = document.getElementById("link");

btnColar.onclick = async () => {
    try {
        const texto = await navigator.clipboard.readText();
        chaveAcesso.value = texto;
    } catch (error) {
        alert("Não foi possível colar o conteúdo");
    }
    validar();
};


chaveAcesso.addEventListener("input", () => {
    validar();
});

function validar() {

    document.getElementById("resultado").style.display = "none";
    document.getElementById("link2").style.display = "none";
    document.getElementById("botoes2").style.display = "none";
    document.getElementById("link1").style.display = "none";
    document.getElementById("botoes1").style.display = "none";

    const valor = chaveAcesso.value;

    if (!validarDV(valor)) {
        escreverMensage("Dígito verificador da chave inválido.");
        validacaoOut.textContent = "CALCULO CHAVE INVALIDA";
        validacaoOut.style.color = "red";
    } else {
        validacaoOut.textContent = "CALCULO CHAVE VALIDA";
        validacaoOut.style.color = "green";
    }



    const estado = valor.slice(0, 2);
    const ano = valor.slice(2, 4);
    const mes = valor.slice(4, 6)
    const cnpj = valor.slice(6, 20).toUpperCase();

    const tipo = valor.slice(20, 22);
    const sat = valor.slice(22, 25);
    const numero = valor.slice(25, 34);
    const emissao = valor.slice(34, 35);
    const codnum = valor.slice(35, 43);
    const dv = valor.slice(43, 44);


    estadoOut.textContent = estadoNomes[estado] ?? "Invalido";
    if (estadoOut.textContent == "Invalido") {
        estadoOut.style.color = "red";
    } else { estadoOut.style.color = "black"; }

    mesOut.textContent = mesNome[mes] ?? "Invalido";
    if (mesOut.textContent == "Invalido") {
        mesOut.style.color = "red";
    } else { mesOut.style.color = "black"; }

    anoOut.textContent = "20" + ano;
    const anoAtual = new Date().getFullYear();


    if (ano.toString() > anoAtual.toString().slice(2, 4)) {
        anoOut.style.color = "red";
        anoOut.textContent = "Invalido"
    } else {
        anoOut.style.color = "black";
    }


    cnpjOut.textContent = cnpj;
    if (!verificaCNPJ(cnpj)) {
        cnpjOut.style.color = "red";
    } else {
        cnpjOut.style.color = "black";
    }


    tipoOut.textContent = tipo;


    emissaoOut.textContent = emissaoNomes[emissao] ?? "Invalido";
    if (emissaoOut == "Invalido") {
        emissaoOut.style.color = "red";

    } else {
        emissaoOut.style.color = "black";
    }


    satOut.textContent = sat;


    numeroOut.textContent = numero;


    if (tipo.toString() === "55") {
        exibirResultadoNfe(universalLink, universalLink2);
    } else if (tipo.toString() === "59") {
        exibirResultadoSimples(satLinks[estado]);
    } else if (tipo.toString() === "65") {
        exibirResultadoSimples(nfceLinks[estado]);
    } else {
        escreverMensage("Chave inválida. Tipo de documento desconhecido.");
        return;
    }




    divResultado.style.display = "grid";



};


function verificaCNPJ(cnpj) {
    cnpj = cnpj.toUpperCase();

    const digito1 = cnpj.slice(0, 1);
    const digito2 = cnpj.slice(1, 2);
    const digito3 = cnpj.slice(2, 3);
    const digito4 = cnpj.slice(3, 4);
    const digito5 = cnpj.slice(4, 5);
    const digito6 = cnpj.slice(5, 6);
    const digito7 = cnpj.slice(6, 7);
    const digito8 = cnpj.slice(7, 8);
    const digito9 = cnpj.slice(8, 9);
    const digito10 = cnpj.slice(9, 10);
    const digito11 = cnpj.slice(10, 11);
    const digito12 = cnpj.slice(11, 12);
    const digito13 = cnpj.slice(12, 13);
    const digito14 = cnpj.slice(13, 14);

    const DIGITOSVALORES = {
        "0": 0, "1": 1, "2": 2, "3": 3, "4": 4,
        "5": 5, "6": 6, "7": 7, "8": 8, "9": 9,
        "A": 17, "B": 18, "C": 19, "D": 20, "E": 21,
        "F": 22, "G": 23, "H": 24, "I": 25, "J": 26,
        "K": 27, "L": 28, "M": 29, "N": 30, "O": 31,
        "P": 32, "Q": 33, "R": 34, "S": 35, "T": 36,
        "U": 37, "V": 38, "W": 39, "X": 40, "Y": 41,
        "Z": 42
    };


    const pesosDV1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const pesosDV2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const somaDV1 =
        DIGITOSVALORES[digito1] * pesosDV1[0] + DIGITOSVALORES[digito2] * pesosDV1[1] + DIGITOSVALORES[digito3] * pesosDV1[2] +
        DIGITOSVALORES[digito4] * pesosDV1[3] + DIGITOSVALORES[digito5] * pesosDV1[4] + DIGITOSVALORES[digito6] * pesosDV1[5] +
        DIGITOSVALORES[digito7] * pesosDV1[6] + DIGITOSVALORES[digito8] * pesosDV1[7] + DIGITOSVALORES[digito9] * pesosDV1[8] +
        DIGITOSVALORES[digito10] * pesosDV1[9] + DIGITOSVALORES[digito11] * pesosDV1[10] + DIGITOSVALORES[digito12] * pesosDV1[11];

    const restoDV1 = somaDV1 % 11;
    const dv1 = restoDV1 < 2 ? 0 : 11 - restoDV1;

    const somaDV2 =
        DIGITOSVALORES[digito1] * pesosDV2[0] + DIGITOSVALORES[digito2] * pesosDV2[1] + DIGITOSVALORES[digito3] * pesosDV2[2] +
        DIGITOSVALORES[digito4] * pesosDV2[3] + DIGITOSVALORES[digito5] * pesosDV2[4] + DIGITOSVALORES[digito6] * pesosDV2[5] +
        DIGITOSVALORES[digito7] * pesosDV2[6] + DIGITOSVALORES[digito8] * pesosDV2[7] + DIGITOSVALORES[digito9] * pesosDV2[8] +
        DIGITOSVALORES[digito10] * pesosDV2[9] + DIGITOSVALORES[digito11] * pesosDV2[10] + DIGITOSVALORES[digito12] * pesosDV2[11] +
        dv1 * pesosDV2[12];

    const restoDV2 = somaDV2 % 11;
    const dv2 = restoDV2 < 2 ? 0 : 11 - restoDV2;

    return dv1 === Number(digito13) && dv2 === Number(digito14);

}

function exibirResultadoSimples(url) {
    document.getElementById("resultado").style.display = "grid";
    document.getElementById("link1").style.display = "flex";
    document.getElementById("botoes1").style.display = "flex";
    const linkEl = document.getElementById("link");
    linkEl.href = url;
    linkEl.textContent = url;
}

function exibirResultadoNfe(url1, url2) {
    document.getElementById("resultado").style.display = "grid";
    document.getElementById("link2").style.display = "flex";
    document.getElementById("botoes2").style.display = "flex";
    document.getElementById("link21").href = url1;
    document.getElementById("link21").textContent = url1;
    document.getElementById("link22").href = url2;
    document.getElementById("link22").textContent = url2;
}


document.getElementById("abrirLink").onclick = () => abrirEcopiar(document.getElementById("link").href);
document.getElementById("abrirLink1").onclick = () => abrirEcopiar(document.getElementById("link21").href);
document.getElementById("abrirLink2").onclick = () => abrirEcopiar(document.getElementById("link22").href);



function abrirEcopiar(url) {
    if (!url || url === "#") return;
    let chave = chaveAcesso.value;
    navigator.clipboard.writeText(chave);
    window.open(url, '_blank');
}

function escreverMensage(msg) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = msg;
    mensagem.style.display = "block";
    setTimeout(() => { mensagem.style.display = "none"; }, 4000);
}

async function copiarChave() {
    let chave = chaveAcesso.value;
    try {
        await navigator.clipboard.writeText(chave);
        escreverMensage("Chave copiada com sucesso!");
    } catch (e) {
        escreverMensage("Erro ao copiar.");
    }
}

document.getElementById("copiarChave").onclick = copiarChave;
document.getElementById("copiarChave1").onclick = copiarChave;

function validarDV(chave) {
    const pesos = [2, 3, 4, 5, 6, 7, 8, 9];
    let soma = 0;
    const digits = chave.slice(0, 43).toUpperCase();

    for (let i = 0; i < digits.length; i++) {
        const peso = pesos[(digits.length - 1 - i) % 8];
        const valor = digits.charCodeAt(i) - 48;
        soma += valor * peso;
    }

    const resto = soma % 11;
    const dvCalculado = resto < 2 ? 0 : 11 - resto;
    const dvInformado = parseInt(chave[43]);

    return dvCalculado == dvInformado;
}




















// ===== OCR / Leitura de imagem (novo) =====

const dropZone = document.getElementById("dropZone");
const inputImagem = document.getElementById("inputImagem");
const bColarImagem = document.getElementById("bColarImagem");
const statusOcr = document.getElementById("statusOcr");

function atualizarStatusOcr(msg) {
    statusOcr.textContent = msg;
}

async function lerCodigoDeBarras(imagemUrl) {
    try {
        const codeReader = new ZXing.BrowserMultiFormatReader();
        const img = new Image();
        img.src = imagemUrl;
        await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
        });
        const resultado = await codeReader.decodeFromImage(img);
        return resultado.getText();
    } catch (erro) {
        return null; // não achou código de barras, segue pro OCR
    }
}

async function lerTextoPorOcr(imagemUrl) {
    const { data } = await Tesseract.recognize(imagemUrl, 'por', {
        logger: () => { } // sem logs no console
    });
    return data.text;
}

function extrairChaveDoTexto(texto) {
    const limpo = texto.toUpperCase().replace(/[^0-9A-Z]/g, ''); // mantém números E letras A-Z
    const match = limpo.match(/[0-9A-Z]{44}/); // procura sequência de 44 caracteres alfanuméricos
    return match ? match[0] : limpo;
}

async function processarImagem(file) {
    atualizarStatusOcr("🔍 Lendo imagem...");

    const imagemUrl = URL.createObjectURL(file);

    try {
        // 1ª tentativa: código de barras (mais confiável)
        let textoLido = await lerCodigoDeBarras(imagemUrl);

        if (!textoLido) {
            // 2ª tentativa: OCR de texto
            atualizarStatusOcr("🔍 Código de barras não encontrado, tentando OCR...");
            textoLido = await lerTextoPorOcr(imagemUrl);
        }

        const chaveExtraida = extrairChaveDoTexto(textoLido);

        if (chaveExtraida.length === 44) {
            chaveAcesso.value = chaveExtraida;
            validar();
            atualizarStatusOcr("✅ Chave lida com sucesso!");
        } else {
            atualizarStatusOcr("⚠️ Não foi possível identificar uma chave válida na imagem.");
        }
    } catch (erro) {
        atualizarStatusOcr("❌ Erro ao processar imagem.");
    } finally {
        URL.revokeObjectURL(imagemUrl);
    }
}

// Clique pra selecionar arquivo
inputImagem.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) processarImagem(file);
});

// Arrastar e soltar
dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropZone.classList.add("drag-over");
});

dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("drag-over");
});

dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropZone.classList.remove("drag-over");
    const file = event.dataTransfer.files[0];
    if (file) processarImagem(file);
});

// Colar imagem (Ctrl+V da área de transferência)
bColarImagem.addEventListener("click", async () => {
    try {
        const items = await navigator.clipboard.read();
        for (const item of items) {
            const tipoImagem = item.types.find(t => t.startsWith("image/"));
            if (tipoImagem) {
                const blob = await item.getType(tipoImagem);
                processarImagem(blob);
                return;
            }
        }
        atualizarStatusOcr("⚠️ Nenhuma imagem encontrada na área de transferência.");
    } catch (erro) {
        atualizarStatusOcr("❌ Não foi possível acessar a área de transferência.");
    }
});










///\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

