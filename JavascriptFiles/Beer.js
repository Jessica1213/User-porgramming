/**
 * Created by MA on 3/2/2016.
 */

$(function(){
    document.getElementById("usernameLogin").innerHTML = localStorage.getItem("user");
    var basket = sessionStorage.getItem("bask");

    //alert(basket);
    if(basket === "NaN"){
    }else{
        $("#basketList").append(basket);
    }
});



function GoToPayment(){
    window.location.href = "Payment.html";
}