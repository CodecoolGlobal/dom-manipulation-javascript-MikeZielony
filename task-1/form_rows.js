var counter = 1;

function addInput(divName, template) {
    if (counter == 10) {
        alert("Too much elements :  " + counter);
        document.getElementById("add_more_text").remove();
    } else {
        counter++;
        alert("Numbers of elements :  " + counter);
        var newdiv = document.createElement('div');
        newdiv.innerHTML = document.getElementById(divName).innerHTML;
        newdiv.className = 'added';
        document.getElementById(template).appendChild(newdiv);
        
    }

    var selectElements = document.querySelectorAll('select');
    for (var i = 0; i < selectElements.length; i++) {
        selectElements[i].id = 'id-' + i;
        selectElements[i].name = 'category' + i;
    }
}

function removeInput(obj) {
    counter--;
    if (obj.parentNode.className == 'added') {
        alert("Numbers of elements :  " + counter);
        obj.parentNode.parentNode.removeChild(obj.parentNode);
        
    }
}