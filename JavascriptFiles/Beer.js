
$(function() {

    $("#accountmanage").hide();
    $("#account").click(function () {
        $("#accountmanage").toggle("slow");
    });
});

function logout() {
    localStorage.removeItem("user");
    window.location.href = "Loginpage.html";


}

function GoToPayment(){
    window.location.href = "Payment.html";
}