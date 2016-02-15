/**
 * Created by MA on 2/10/2016.
 */


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dropEffect = 'copy';
}

function drop(ev) {
    ev.preventDefault();
    //var li = document.createElement("li");
    var data = ev.dataTransfer.getData("text");
    var s = "<tr height='30px'><td class='removeCross' width='15px'><button class='crossButton' onclick='removeItem(this)'>X</button></td>";

    $(document.getElementById(data)).find('td').each(function(){
        s = s + "<td width='120px'>" + $(this).text() + "</td>";
    });
    s = s + "<td><input type='text' class='countField' value='1'></td>";
    s = s + "</tr>"
    $("#basketList").append(s);
   // var cross = document.createTextNode("X");
   // li.appendChild(cross);
    //li.appendChild(document.getElementById(data));
    //document.getElementById("basket").appendChild(li);
   // ev.target.appendChild(s);

}


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



function removeItem(x){
    $(x).parent().parent().remove();
}


