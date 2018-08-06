var i = 0;
function adicionaZoom() {
    var listSizeText = ["medium", "large", "x-large"]

    if (i < listSizeText.length) {
        document.getElementById("allBody").style.fontSize = listSizeText[i];
        i = i + 1;
    }

    if (document.getElementById("allBody").style.fontSize == "xx-small") {
        document.getElementById("allBody").style.fontSize = "medium";
        i = 0;
    }
}

function removeZoom() {
    var listSizeText = ["small", "x-small", "xx-small"]

    if (i < listSizeText.length) {
        document.getElementById("allBody").style.fontSize = listSizeText[i];
        i = i + 1;
    }

    if (document.getElementById("allBody").style.fontSize == "x-large") {
        document.getElementById("allBody").style.fontSize = "medium";
        i = 0;
    }
}

function imprimirTabela() {
    var conteudo = document.getElementById('documentI').innerHTML,
        tela_impressao = window.open('about:blank');

    tela_impressao.document.write(conteudo);
    tela_impressao.window.print();
    tela_impressao.window.close();
}