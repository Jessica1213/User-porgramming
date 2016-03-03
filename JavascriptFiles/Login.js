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
                        localStorage.setItem("user", username);
                        console.log("go");
                        break;
                    }

                }//end for

                if(i===count) alert("Username or password is wrong.");

            });
        }
        else alert("Username and password doesn't match.");
    });
});