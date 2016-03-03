
$(function(){
    document.getElementById("usernameLogin").innerHTML = localStorage.getItem("user");
    var basket = sessionStorage.getItem("bask");

    //alert(basket);
    if(basket === "NaN"){
    }else{
        $("#basketList").append(basket);
    }
});

$(function() {

    $("#accountmanage").hide();
    $("#account").click(function () {
        $("#accountmanage").toggle("slow");
    });
});

function mouseOverForDrag(){
    $('#logout').css('cursor', 'hand');
}

function logout() {
    localStorage.setItem("user", "");
    window.location.href = "Loginpage.html";


}

function GoToPayment(){
    window.location.href = "Payment.html";
}