
function change_lang(lan_index)
{
    var myLangArray;
    switch(lan_index)
    {
        case 1:
            myLangArray = Lang_se;
            break;
        default:
            myLangArray = Lang_en;
            break;
    }
    document.getElementById('Welcome').innerHTML = myLangArray[0];

    document.getElementById('Login').innerHTML = myLangArray[1];

    document.getElementById('loginButton').innerHTML = myLangArray[2];

}


//English
Lang_en = new Array();
Lang_en[0] = "Welcome to The Flying Dutchman";
Lang_en[1] = "Please login first";
Lang_en[2] = "Log in";


//Swedish
Lang_se = new Array();
Lang_se[0] = "Välkomna till The Flying Dutchman";
Lang_se[1] = "Snälla logga in först";
Lang_se[2] = "Logga in";

