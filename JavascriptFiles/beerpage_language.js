var language_status = localStorage.getItem("lang") ;
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
    document.getElementById('SearchbyName').innerHTML = myLangArray[5];
    document.getElementById('SearchbyPrice').innerHTML = myLangArray[6];
    document.getElementById('lowestPrice').innerHTML = myLangArray[7];
    document.getElementById('highestPrice').innerHTML = myLangArray[8];
    $('#namebutton').val(myLangArray[9]);
    $('#pricebutton').val(myLangArray[10]);
    document.getElementById('welcomeuser').innerHTML = myLangArray[11];
    document.getElementById('accountsetting').innerHTML = myLangArray[12];
    document.getElementById('logout').innerHTML = myLangArray[13];
    sessionStorage.setItem("lang",language_status);

}


//English
Lang_en = new Array();
Lang_en[0] = "Gluten Intolerance";
Lang_en[1] = "Lactose Intolerance";
Lang_en[2] = "Nut Allergi";
Lang_en[3] = "Filter";
Lang_en[4] = "Drag your items below";
Lang_en[5] = "Search by name";
Lang_en[6] = "Search by price";
Lang_en[7] = "Lowest Price";
Lang_en[8] = "Highest Price";
Lang_en[9] = "Search"
Lang_en[10] = "Search";
Lang_en[11] = "Welcome";
Lang_en[12] = "Setting";
Lang_en[13] = "Log out";

//Swedish
Lang_se = new Array();
Lang_se[0] = "Glutenintolerans";
Lang_se[1] = "Laktosintolerant";
Lang_se[2] = "Mutter Allergi";
Lang_se[3] = "Filtrera";
Lang_se[4] = "Dra din saker nedanför";
Lang_se[5] = "Sök efter namn";
Lang_se[6] = "Sök efter pris";
Lang_se[7] = "lägsta pris";
Lang_se[8] = "högsta pris";
Lang_se[9] = "Sök";
Lang_se[10] = "Sök";
Lang_se[11] = "Välkommen";
Lang_se[12] = "Inställning";
Lang_se[13] = "Logga ut";