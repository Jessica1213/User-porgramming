
$(function() {

    $("#accountmanage").hide();
    $("#account").click(function () {
        $("#accountmanage").toggle("slow");
    });
});

function logout() {
    localStorage.removeItem("user");
    sessionStorage.removeItem("bask");
    window.location.href = "Loginpage.html";
    localStorage.removeItem("lang");


}

function GoToPayment(){
    window.location.href = "Payment.html";
}