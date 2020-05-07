var counter = 1;

function addInput(divName, template) {
    if (counter == 3) {
        alert("Too much elements :  " + counter);
        document.getElementById("add_more_text").remove();
    } else {
        counter++;
        document.getElementById("add_more_text");
        alert("Numbers of elements :  " + counter);
        var newdiv = document.createElement('div');
        newdiv.innerHTML = document.getElementById(divName).innerHTML;
        newdiv.className = 'added';
        document.getElementById(template).appendChild(newdiv);
        }
    }

function removeInput(obj) {
    counter--;
    if (obj.parentNode.className == 'added') {
        alert("Numbers of elements :  " + counter);
        obj.parentNode.parentNode.removeChild(obj.parentNode);
        }
}