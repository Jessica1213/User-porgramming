var language_status;
$(function () {
    localStorage.removeItem("lang");
    $("#languageflag").show();
    language_status = "EN";
    localStorage.setItem("lang", language_status);
    $(change_lang());

});


function change_lang()
{
    var myLangArray;
    localStorage.setItem("lang",language_status);
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
    $('#LoginButton').val(myLangArray[2]);
    $('#themebutton').val(myLangArray[3]);
}


//English
Lang_en = new Array();
Lang_en[0] = "Welcome to The Flying Dutchman";
Lang_en[1] = "Please login";
Lang_en[2] = "Log in";
Lang_en[3] = "Change Theme";


//Swedish
Lang_se = new Array();
Lang_se[0] = "Välkommen till The Flying Dutchman";
Lang_se[1] = "Logga in";
Lang_se[2] = "Logga in";
Lang_se[3] = "förändring tema";

