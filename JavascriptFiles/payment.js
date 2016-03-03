/**
 * Created by MA on 3/2/2016.
 */

$(function(){
    document.getElementById("usernameLogin2").innerHTML = localStorage.getItem("user") ;
    document.getElementById("totalAmount").innerHTML = sessionStorage.getItem("total");
});

function paymentFunc(){
    window.location.href = "AfterPayment.html";
}


function backFunc(){
    window.history.back();
}