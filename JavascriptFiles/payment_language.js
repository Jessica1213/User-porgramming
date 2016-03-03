/**
 * Created by MA on 3/2/2016.
 */

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
    document.getElementById('totalText').innerHTML = myLangArray[0];

    document.getElementById('BackEditButton').innerHTML = myLangArray[1];

    document.getElementById('PayButton').innerHTML = myLangArray[2];

}


//English
Lang_en = new Array();
Lang_en[0] = "TOTAL:  ";
Lang_en[1] = "Back and Edit";
Lang_en[2] = "Pay";


//Swedish
Lang_se = new Array();
Lang_se[0] = "SUMMA:  ";
Lang_se[1] = "Tillbaka";
Lang_se[2] = "Betala";

