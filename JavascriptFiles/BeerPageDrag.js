/**
 * Created by MA on 2/10/2016.
 */


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

//??????i dont want to cut an item from the list
//???????????? I dont want that order list is draggable
function mouseOverForDrag(){//???????????????? How can I put this code by default, not whenever it goes over a row
    var menuRow = document.getElementsByClassName("menuRow");
    var menuRowLength = document.getElementsByClassName("menuRow").length;
    for (i=0; i<menuRowLength; i++){
        menuRow[i].style.cursor = "move";
    }

    var menuRowEven = document.getElementsByClassName("menuRowEven");
    var menuRowEvenLength = document.getElementsByClassName("menuRowEven").length;
    for (i=0; i<menuRowEvenLength; i++){
        menuRowEven[i].style.cursor = "move";
    }

}


