
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
    document.getElementById('Flyingdutchman').innerHTML = myLangArray[1];
    document.getElementById('Login').innerHTML = myLangArray[2];
    //document.getElementById('Beerpagetitle').innerHTML = myLangArray[3];

}


//English
Lang_en = new Array();
Lang_en[0] = "WELCOME TO";
Lang_en[1] = "The Flying Dutchman";
Lang_en[2] = "Please login first";
//Lang_en[3] = "Please choose your favorite beers";


//Swedish
Lang_se = new Array();
Lang_se[0] = "Välkomna";
Lang_se[1] = "The Flying Dutchman";
Lang_se[2] = "Snälla logga in först";
//Lang_se[3] = "Välj din favorit öl";

