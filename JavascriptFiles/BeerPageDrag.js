/**
 * Created by MA on 2/10/2016.
 */
var items = new Array();
//var orderObj = orderObj || {};
var draggedCount;

var orderStack = [];
var stackTop = 0;
var undobutton = false;
var noredo = false;


$(function(){
    document.getElementById("usernameLogin").innerHTML = localStorage.getItem("user");

    var basket = sessionStorage.getItem("bask");
    var basketObj = JSON.parse(basket);


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
            s = s + '<td><input type="text" class="countField" onchange="changeCount(this)" value="' + items[index].count + '"></td>';
            s = s + '</tr>';
            completeTable += s;
        }
        $("#basketList").append(completeTable);
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
    var data = ev.dataTransfer.getData("text");
    pushToStack(addBeer(data));
    buildBasketAndShow(orderStack[stackTop-1]);

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

    var oldItems = [];
    console.log("stackTop: "+ stackTop);
    if(stackTop!=0) {
        oldItems = orderStack[stackTop-1].slice(0);
    }
    if(undobutton==true){
        var popitem = orderStack.length-stackTop;
        while(popitem>0) {
            console.log("pop");
            orderStack.pop();
            popitem--;
        }
        undobutton=false;
        noredo = true;
    }
    var ind;
    var newItems = JSON.parse(JSON.stringify(oldItems));
    var len = newItems.length;

    var basketTable = document.getElementById("basketList");

    for(ind=0; ind<len; ind++){
        if(newItems[ind].name==singleItem.name) {
            newItems[ind].count++;
            console.log("same");
            break;
        }
    }

    if(ind == len){
        newItems = oldItems.concat(singleItem);
        //items[items.length] = singleItem;
        id=id+1;
        draggedCount = draggedCount + 1;
        console.log("push");
    }//end if
    var itemStr = JSON.stringify(items);
    sessionStorage.setItem("bask", itemStr);
    return newItems;
}//end addBeer

function pushToStack(items) {
        orderStack.push(items);
        stackTop++;
}

function changeCount(c){
    var name= c.parentElement.parentNode.childNodes[2].textContent;
    var temp = c.parentElement.parentNode.childNodes[4];
    var newCount = temp.getElementsByClassName("countField")[0].value;

    var oldItems = orderStack[stackTop-1].slice(0);
    var newItems = JSON.parse(JSON.stringify(oldItems));
    var len = newItems.length;

    for(var i=0; i<len; i++){
        if(newItems[i].name == name){
            newItems[i].count = newCount;
        }
    }
    pushToStack(newItems);
    buildBasketAndShow(newItems);


    var itemStr = JSON.stringify(items);
    sessionStorage.setItem("bask", itemStr);

}


function changeSum(tmpitems){

    var sum = 0;
    //console.log("StackTop: " + stackTop);
    for(var ind=0; ind<tmpitems.length; ind++){
        var p = tmpitems[ind].price;
        var cInt = tmpitems[ind].count;
        var pInt = parseInt(p);
        //alert(pInt+ " "+cInt);
        var mul = pInt * cInt;
        sum += mul;
    }
    document.getElementById('sum').value = sum;
    sessionStorage.setItem("total",sum);
}


function removeItem(x){

    var name= x.parentElement.parentNode.childNodes[2].textContent;

    var oldItems = orderStack[stackTop-1].slice(0);
    var newItems = JSON.parse(JSON.stringify(oldItems));
    var len = newItems.length;
    console.log(len);
    for(var i=0; i<len; i++){
        if(newItems[i].name == name){
            newItems.splice(i,1);
        }
    }

    $(x).parent().parent().remove();

    var itemStr = JSON.stringify(newItems);
    sessionStorage.setItem("bask", itemStr);

    draggedCount = draggedCount - 1;
    pushToStack(newItems);
    buildBasketAndShow(newItems);
}


function GoToPayment(){
    window.location.href = "Payment.html";
}


function buildBasketAndShow(tmpitems){
    document.getElementById("basketList").innerHTML = "";
    for(var i= 0;i<tmpitems.length;i++){
        var s = '<tr id="' + id + '" height="30px"><td class="removeCross" width="15px"><button class="crossButton" onclick="removeItem(this)">X</button></td>';
        s = s + '<td style="display:none;">' + 1 + '</td>';
        s = s + '<td class= "chosenBeerName" width="120px">' + tmpitems[i].name + '</td>';
        s = s + '<td class= "chosenBeerPrice" width="120px">' + tmpitems[i].price + '</td>';
        s = s + '<td><input type="text" class="countField" onchange="changeCount(this)" value="' + tmpitems[i].count + '"></td>';
        s = s + '</tr>';
        $("#basketList").append(s);
    }

    changeSum(tmpitems);
    for(var i=0; i<stackTop;i++) {
        console.log("Step: " + i);
        for(var j=0; j<orderStack[i].length; j++) {
            console.log(orderStack[i][j].name + " " +orderStack[i][j].count);
        }

    }
}



function undoFunction(){
    stackTop--;
    if(stackTop>0) {
        buildBasketAndShow(orderStack[stackTop-1]);
        lastundo = orderStack[stackTop-1];
    }
    else {
        step=0;
        buildBasketAndShow([]);
    }
    //console.log("-------step "+step +"--------");
    undobutton = true;
    undobeforeredo = true;

}

function redoFunction(){

    if(noredo) {
        noredo = false;
    }
    else {
        stackTop++;
        if(stackTop<=orderStack.length) {
            buildBasketAndShow(orderStack[stackTop-1]);
        }
        else {
            stackTop = orderStack.length;
        }
    }

}


Array.prototype.clone = function() {
    return this.slice(0);
}

function deepCopy(obj) {
    if (typeof obj == 'object') {
        if (isArray(obj)) {
            var l = obj.length;
            var r = new Array(l);
            for (var i = 0; i < l; i++) {
                r[i] = deepCopy(obj[i]);
            }
            return r;
        } else {
            var r = {};
            r.prototype = obj.prototype;
            for (var k in obj) {
                r[k] = deepCopy(obj[k]);
            }
            return r;
        }
    }
    return obj;
}

var ARRAY_PROPS = {
    length: 'number',
    sort: 'function',
    slice: 'function',
    splice: 'function'
};

/**
 * Determining if something is an array in JavaScript
 * is error-prone at best.
 */
function isArray(obj) {
    if (obj instanceof Array)
        return true;
    // Otherwise, guess:
    for (var k in ARRAY_PROPS) {
        if (!(k in obj && typeof obj[k] == ARRAY_PROPS[k]))
            return false;
    }
    return true;
}