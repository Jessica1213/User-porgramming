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

    document.getElementById('glutenAllergi').innerHTML = myLangArray[0];
    document.getElementById('lactoseAllergi').innerHTML = myLangArray[1];
    document.getElementById('nutAllergi').innerHTML = myLangArray[2];
    $('#filterButton').val(myLangArray[3]);
    document.getElementById('blinkDragText').innerHTML = myLangArray[4];

}


//English
Lang_en = new Array();
Lang_en[0] = "gluten intolerance";
Lang_en[1] = "lactose intolerance";
Lang_en[2] = "nut allergi";
Lang_en[3] = "filter";
Lang_en[4] = "Drag your items below";

//Swedish
Lang_se = new Array();
Lang_se[0] = "Glutenintolerans";
Lang_se[1] = "laktosintolerant";
Lang_se[2] = "mutter allergi";
Lang_se[3] = "filtrera";
Lang_se[4] = "Dra din saker nedanför";
