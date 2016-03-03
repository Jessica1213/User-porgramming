/**
 * Created by MA on 2/10/2016.
 */
var basketTextForPush;

var id = 1;
var draggedCount = 0;
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


    var basketTable = document.getElementById("basketList");
    var ind = 0;
    for(ind=0; ind<draggedCount; ind++){
        var rows = basketTable.getElementsByTagName("tr")[ind];

        var rowIndex = rows.getElementsByTagName("td")[1];
        if(rowIndex.textContent == document.getElementById(data).rowIndex){
            var countField = parseInt(rows.getElementsByClassName('countField')[0].value);
            rows.getElementsByClassName('countField')[0].value = countField + 1;
            changeSum();
            break;
        }//end if
    }

    if(ind == draggedCount){
        var s = '<tr id="' + id + '" height="30px"><td class="removeCross" width="15px"><button class="crossButton" onclick="removeItem(this)">X</button></td>';
        s = s + '<td style="display:none;">' + document.getElementById(data).rowIndex + '</td>';
        i = 1;
        $(document.getElementById(data)).find('td').each(function(){
            if(i == 1) {
                s = s + '<td class= "chosenBeerName" width="120px">' + $(this).text() + '</td>';
                i++;
            }else if(i==2){
                s = s + '<td class= "chosenBeerPrice" width="120px">' + $(this).text()+ '</td>';
            }
        });
        s = s + '<td><input type="text" class="countField" onchange="changeSum()" value="1"></td>';
        s = s + '</tr>';
        $("#basketList").append(s);
        id=id+1;
        // var cross = document.createTextNode("X");
        // li.appendChild(cross);
        //li.appendChild(document.getElementById(data));
        //document.getElementById("basket").appendChild(li);
        // ev.target.appendChild(s);
        draggedCount = draggedCount + 1;
        changeSum();
    }//end if


    basketTextForPush += s;
    sessionStorage.setItem("bask",basketTextForPush);

}

function changeSum(){

    var sum = 0;

    var basketTable = document.getElementById("basketList");

    for(ind=0; ind<draggedCount; ind++){
        var rows = basketTable.getElementsByTagName("tr")[ind];

        var cellsPrice = rows.getElementsByTagName("td")[3];
        //alert(cellsPrice.textContent);
        var p = cellsPrice.textContent;
        var pInt = parseInt(p);
        //alert(pInt);
        //var cellsCount = rows.getElementsByTagName("td")[3];
        //alert(rows.getElementsByClassName('countField')[0].value);
        var c = rows.getElementsByClassName('countField')[0].value;
        var cInt = parseInt(c);
        //alert(cInt);
        var mul = pInt * cInt;
        sum += mul;
    }
    //$(sum).appendTo("#sum");
    document.getElementById('sum').value = sum;
    sessionStorage.setItem("total",sum);
    /*
        var p = $(this).find('.chosenBeerPrice').text();
        var pInt = parseInt(p);
        alert(p);
        var c = $(this).find('.countField').val();
        var cInt = parseInt(c);
        alert(cInt);
        var mul = pInt * cInt;

        sum += mul;*/
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
    draggedCount = draggedCount - 1;
    changeSum();
}


