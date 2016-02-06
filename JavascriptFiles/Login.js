function f1(){

    //validation

    //event.preventDefault();
    var userElem = document.getElementById("username");
    //  console.log(userElem);
    var passElem = document.getElementById("password");
    var defUser = userElem.defaultValue;
    var defPass = passElem.defaultValue;

    if(userElem.value == "" || passElem.value == "" || userElem.value == defUser || passElem.value == defPass){
        alert("username and password must be filled out");
        return;
    }





    var xmlhttp = new XMLHttpRequest();


    var linku =  "http://pub.jamaica-inn.net/fpdb/api.php?";
    linku += "username=" + userElem.value + "&password=" + passElem.value;
    linku += "&action=iou_get";
    var url = linku;

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myFunction(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
function myFunction(response) {
    var arr = JSON.parse(response);
    var i;
    var out = "";
alert(arr.payload[0].first_name);

        out += arr.type;

    document.getElementById("id01").innerHTML = out;
}
