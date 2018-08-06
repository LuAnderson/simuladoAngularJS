var i = 0;
function addZoom() {
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