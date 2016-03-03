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
    document.getElementById('infoAboutPayment').innerHTML = myLangArray[0];
    document.getElementById('g1').innerHTML = myLangArray[1];
   // $('#linkToPage').val(myLangArray[2]);
    //document.getElementById('linkToPage'). = myLangArray[2];
}


//English
Lang_en = new Array();
Lang_en[0] = "Your payment has been done successfully...";
Lang_en[1] = "To buy more, Click";
//Lang_en[2] = "here";

//Swedish
Lang_se = new Array();
Lang_se[0] = "F:";
Lang_se[1] = "klicka";
//Lang_se[2] = "här";


