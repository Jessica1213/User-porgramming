var Theme_status = "First";
$(function () {
    $("#themeicon").show();
    $(change_theme());

});


function change_theme()
{
    if(Theme_status=="First") {
        document.getElementById('bodybackground').style.backgroundImage = 'url(CSSFiles/images/The_Flying_Dutchman_by_Charles_Temple_Dix.jpg)';
        Theme_status="Second";
    }
    else {
        document.getElementById('bodybackground').style.backgroundImage = 'url(CSSFiles/images/Ships.jpg)';
        Theme_status="First";
    }

}



