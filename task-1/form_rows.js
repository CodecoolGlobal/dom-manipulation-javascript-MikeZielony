function removeRow() {
    let row = document.getElementsByClassName("row");
    row.remove();
}


var original = document.getElementById('duplicater');

function duplicate() {
    var clone = original.cloneNode(true); // 
    clone.id = "duplicater";
    original.parentNode.appendChild(clone);
}