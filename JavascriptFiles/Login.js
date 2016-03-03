var valid = false;
var usernameAndPasswordArray = new Array;
var firstNameArray = new Array;
var lastNameArray = new Array;
var assetsArray = new Array;

function isValid() {

    //validation

    //event.preventDefault();
    var userElem = document.getElementById("username");
    //  console.log(userElem);
    var passElem = document.getElementById("password");
    var defUser = userElem.defaultValue;
    var defPass = passElem.defaultValue;

    if(userElem.value == "" || passElem.value == "" || userElem.value == defUser || passElem.value == defPass){
        alert("username and password must be filled out");
        valid = false;
    }




    $.getJSON("Database/Database_User.json", function (json) {

        var count = json.length;
        var i;
        for (i = 0; i < count; i++) {
            var usernameAndPassword = json[i].username;
            var firstName = json[i].first_name;
            var lastName = json[i].last_name;
            var assets = json[i].assets;

            if(userElem.value == usernameAndPassword && passElem.value == usernameAndPassword){
                valid = true;
                break;
            }


        }//end for


        if(i==count){
            alert("username or password is not correct...");
            valid = false;
            }

        console.log(valid);
        if(valid==true){
            document.getElementById("LoginPart").action = "BeerPage.html";
            //alert(document.getElementById("LoginPart").action);
        }

    });

    document.getElementById("LoginPart").action = "BeerPage.html";



    /*var xmlhttp = new XMLHttpRequest();


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
     xmlhttp.send();*/







    /* var arr = JSON.parse(response);
     var i;
     var out = "";
     alert(arr.payload[0].first_name);

     out += arr.type;

     document.getElementById("id01").innerHTML = out;*/
}






function validation(username, password){

    //var userElem = document.getElementById("username");
    //var passElem = document.getElementById("password");
    console.log(username+" "+password);
    if(username===password) {


    }
    else alert("Username and password doesn't match.");

    //localStorage.setItem("user", userElem.value);



}

$(document).ready(function(){
    $('#LoginPart').on('submit', function(e){
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();

        console.log(username+" "+password);

        if(username===password) {
            $.getJSON("Database/Database_User.json", function (json) {
                var count = json.length;

                var i;
                for (i = 0; i < count; i++) {
                    if(json[i].username==username){
                        window.location.href = "BeerPage.html";
                        console.log("go");
                        break;
                    }

                }//end for

                if(i===count) alert("Username or password is wrong.");

            });
        }
        //else alert("Username and password doesn't match.");
    });
});