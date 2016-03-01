var language_status = "EN";
$(function () {
    $("#languageflag").show();
    $(change_lang());

});


function change_lang()
{
    var myLangArray;
    if(language_status=="EN") {
        document.getElementById('flagbutton').setAttribute('src', 'CSSFiles/images/Sweden_Flag.png');
        language_status="SE";
        myLangArray = Lang_en;
    }
    else {
        document.getElementById('flagbutton').setAttribute('src', 'CSSFiles/images/UK_flag.png');
        language_status="EN";
        myLangArray = Lang_se;
    }
    document.getElementById('Welcome').innerHTML = myLangArray[0];

    document.getElementById('Login').innerHTML = myLangArray[1];

    document.getElementById('loginButton').innerHTML = myLangArray[2];

}


//English
Lang_en = new Array();
Lang_en[0] = "Welcome to The Flying Dutchman";
Lang_en[1] = "Please login";
Lang_en[2] = "Log in";


//Swedish
Lang_se = new Array();
Lang_se[0] = "Välkommen till The Flying Dutchman";
Lang_se[1] = "Logga in";
Lang_se[2] = "Logga in";

