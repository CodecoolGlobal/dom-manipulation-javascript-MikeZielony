var counter = 1;

function addInput(divName, template) {
    if (counter == 10) {
        document.getElementById("add_more_text").remove();
    } else {
        var newdiv = document.createElement('div');
        newdiv.innerHTML = document.getElementById(divName).innerHTML;
        newdiv.className = 'added';
        document.getElementById(template).appendChild(newdiv);
        counter++;
    }

    var selectElements = document.querySelectorAll('select');
    for (var i = 0; i < selectElements.length; i++) {
        selectElements[i].id = 'id-' + i;
        selectElements[i].name = 'category' + i;
    }
}

function removeInput(obj) {
    if (obj.parentNode.className == 'added') {
        obj.parentNode.parentNode.removeChild(obj.parentNode);
        counter--;
    }
}