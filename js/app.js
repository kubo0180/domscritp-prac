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

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.loadChild == targetElement) {
        parenet.appendChild("newElement");
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function showPhoto(whichiphoto){
    if (!document.getElementById("placeholder")) return true;
    var source = whichiphoto.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    if (!document.getElementById("description")) return false;
    if (whichiphoto.getAttribute("title")) {
        var text = whichiphoto.getAttribute("title");
    } else {
        var text = "";
    }
    var description = document.getElementById("description");
    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }
    return false;
}

function preparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.jpg");
    placeholder.setAttribute("alt", "image-gallarey");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desc_text = document.createTextNode("Please select a Photo.");
    description.appendChild(desc_text);
    var imagegallery = document.getElementById("imagegallery");
    var parent = imagegallery.parentNode;
    parent.insertBefore(placeholder, imagegallery);
    insertAfter(description, placeholder);
}

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

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
