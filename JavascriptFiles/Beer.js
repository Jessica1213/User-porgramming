/**
 * Created by MA on 3/2/2016.
 */

$(function(){
    document.getElementById("usernameLogin").innerHTML = localStorage.getItem("user");
    var basket = sessionStorage.getItem("bask");
    var basketObj = JSON.parse(basket);
    //alert("fd");
    //alert(basketObj[0].price);

    if(basketObj === null){
    }else{

        $("#basketList").append(basket);

    }
});



function GoToPayment(){
    window.location.href = "Payment.html";
}