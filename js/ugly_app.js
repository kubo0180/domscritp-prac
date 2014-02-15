function prepareGallery() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var imagegallery = document.getElementById("imagegallery");
    var links = imagegallery.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            return showPhoto(this);
        }
    }
}

function showPhoto(whichiphoto){
    if (!document.getElementById("placeholder")) return true;
    var source = whichiphoto.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return true;
    placeholder.setAttribute("src", source);
    if (!document.getElementById("description")) return false;
    var description = document.getElementById("description");
    if (whichiphoto.getAttribute("title")) {
        var text = whichiphoto.getAttribute("title");
    } else {
        var text = "";
    }
    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }
    return false;
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}


addLoadEvent(prepareGallery);
