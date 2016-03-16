/**
 * Created by MA on 2/10/2016.
 */
var items = new Array();
//var orderObj = orderObj || {};
var draggedCount;

var orderStack = [];
var stackTop = 0;
orderStackLength = 6;


/*orderObj = {
    execute:function(items){

    },
    unExecute:function(items){

    },
    reExecute:function(items){

    }

}*/


$(function(){
    document.getElementById("usernameLogin").innerHTML = localStorage.getItem("user");




    var basket = sessionStorage.getItem("bask");
    var basketObj = JSON.parse(basket);

    //alert("fd");
    //alert(basketObj[0].price);

    if(basketObj === null){
        draggedCount = 0;
    }else{
        items = basketObj;
        draggedCount = items.length;
        var completeTable;

        for(var index=0;index<items.length;index++){
            var s = '<tr id="' + id + '" height="30px"><td class="removeCross" width="15px"><button class="crossButton" onclick="removeItem(this)">X</button></td>';
            s = s + '<td style="display:none;">' + 1 + '</td>';
            s = s + '<td class= "chosenBeerName" width="120px">' + items[index].name + '</td>';
            s = s + '<td class= "chosenBeerPrice" width="120px">' + items[index].price + '</td>';
            /*  $(document.getElementById(data)).find('td').each(function(){
             if(i == 1) {
             s = s + '<td class= "chosenBeerName" width="120px">' + $(this).text() + '</td>';
             i++;
             }else if(i==2){
             s = s + '<td class= "chosenBeerPrice" width="120px">' + $(this).text()+ '</td>';
             }
             });*/
            s = s + '<td><input type="text" class="countField" onchange="changeCount(this)" value="' + items[index].count + '"></td>';
            s = s + '</tr>';
            completeTable += s;
        }
        $("#basketList").append(completeTable);
        //$("#basketList").append(basket);

    }
});



var id = 1;

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
    addBeer(data);



}//end drop function


function addBeer(data){
    var singleItem = {name:"", price:"", count:"1"};
    i = 1;
    $(document.getElementById(data)).find('td').each(function(){
        if(i == 1) {
            singleItem.name = $(this).text();
            i++;
        }else if(i==2){
            singleItem.price = $(this).text();
        }
    });




    var basketTable = document.getElementById("basketList");
    var ind = 0;

    for(ind=0; ind<items.length; ind++){
        var rows = basketTable.getElementsByTagName("tr")[ind];

        var rowName = rows.getElementsByTagName("td")[2];
        //alert(rowName.textContent);
        if(rowName.textContent == singleItem.name){
            var countField = parseInt(rows.getElementsByClassName('countField')[0].value);
            rows.getElementsByClassName('countField')[0].value = countField + 1;
            items[items.length].count = countField + 1;
            changeSum();
            break;
        }//end if
    }

    if(ind == items.length){
        var s = '<tr id="' + id + '" height="30px"><td class="removeCross" width="15px"><button class="crossButton" onclick="removeItem(this)">X</button></td>';
        s = s + '<td style="display:none;">' + document.getElementById(data).rowIndex + '</td>';
        i = 1;
        s = s + '<td class= "chosenBeerName" width="120px">' + singleItem.name + '</td>';
        s = s + '<td class= "chosenBeerPrice" width="120px">' + singleItem.price + '</td>';
        /*  $(document.getElementById(data)).find('td').each(function(){
         if(i == 1) {
         s = s + '<td class= "chosenBeerName" width="120px">' + $(this).text() + '</td>';
         i++;
         }else if(i==2){
         s = s + '<td class= "chosenBeerPrice" width="120px">' + $(this).text()+ '</td>';
         }
         });*/
        s = s + '<td><input type="text" class="countField" onchange="changeCount(this)" value="1"></td>';
        s = s + '</tr>';
        $("#basketList").append(s);
        items[items.length] = singleItem;


        id=id+1;
        // var cross = document.createTextNode("X");
        // li.appendChild(cross);
        //li.appendChild(document.getElementById(data));
        //document.getElementById("basket").appendChild(li);
        // ev.target.appendChild(s);
        draggedCount = draggedCount + 1;
        changeSum();
    }//end if


    pushToStack();

    //basketTextForPush += s;
    //sessionStorage.setItem("bask",basketTextForPush);
    var itemStr = JSON.stringify(items);
    sessionStorage.setItem("bask", itemStr);
}//end addBeer

function pushToStack(){

     /*for(var i=0;i<stackTop;i++){
        k = orderStack[i];
        for(var t=0;t<k.length;t++)
            alert(k[t].name);
    }*/
    //alert("stack "+stackTop);
    if(stackTop<orderStackLength){
        var tempItems = items.slice(0);
        //stackTop = orderStack.push(tempItems);
        orderStack[stackTop]=tempItems;
        stackTop++;

    }else{
        orderStack.shift();
        stackTop--;
        var tempItems = items.slice(0);
        //stackTop = orderStack.push(tempItems);
        orderStack[stackTop]=tempItems;
        stackTop++;
    }

    /*for(var i=0;i<stackTop;i++){
        k = orderStack[i];
        for(var t=0;t<k.length;t++)
            alert(k[t].name);
    }*/
}

function changeCount(c){
    var name= c.parentElement.parentNode.childNodes[2].textContent;
    var temp = c.parentElement.parentNode.childNodes[4];
    var newCount = temp.getElementsByClassName("countField")[0].value;

    for(var i=0; i<items.length; i++){
        if(items[i].name == name){
            items[i].count = newCount;
        }
    }

    //pushToStack();

    var itemStr = JSON.stringify(items);
    sessionStorage.setItem("bask", itemStr);

    changeSum();
}


function changeSum(){

    var sum = 0;

    for(ind=0; ind<items.length; ind++){
        p = items[ind].price;
        cInt = items[ind].count;
        var pInt = parseInt(p);
        //alert(pInt+ " "+cInt);
        var mul = pInt * cInt;
        sum += mul;
    }

    /*var sum = 0;

    var basketTable = document.getElementById("basketList");

    for(ind=0; ind<items.length; ind++){
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
    */
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


function removeItem(x){

    var name= x.parentElement.parentNode.childNodes[2].textContent;

    for(var i=0; i<items.length; i++){
        if(items[i].name == name){
            items.splice(i,1);
        }
    }

    pushToStack();

    $(x).parent().parent().remove();

    var itemStr = JSON.stringify(items);
    sessionStorage.setItem("bask", itemStr);

    draggedCount = draggedCount - 1;
    changeSum();
}


function GoToPayment(){
    window.location.href = "Payment.html";
}


function buildBasketAndShow(){
    document.getElementById("basketList").innerHTML = "";
    for(var i= 0;i<items.length;i++){
        var s = '<tr id="' + id + '" height="30px"><td class="removeCross" width="15px"><button class="crossButton" onclick="removeItem(this)">X</button></td>';
        s = s + '<td style="display:none;">' + 1 + '</td>';
        s = s + '<td class= "chosenBeerName" width="120px">' + items[i].name + '</td>';
        s = s + '<td class= "chosenBeerPrice" width="120px">' + items[i].price + '</td>';
        s = s + '<td><input type="text" class="countField" onchange="changeCount(this)" value="' + items[i].count + '"></td>';
        s = s + '</tr>';
        $("#basketList").append(s);
    }

}



function undoFunction(){
   /* alert("stack1: " + stackTop);
    alert("len1: " + items.length);*/
    if(stackTop > 0){
        stackTop--;
        if(stackTop==0)
           items = [];
        else
           items = orderStack[stackTop-1];
        buildBasketAndShow();
    }

    /*alert("stack2: " + stackTop);
    alert("len2: " + items.length);*/

}

function redoFunction(){
    if(stackTop < orderStackLength){
        items = orderStack[stackTop];
        stackTop++;
        buildBasketAndShow();
    }
}