
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
    document.getElementById('glutenAllergi').innerHTML = myLangArray[0];
    document.getElementById('lactoseAllergi').innerHTML = myLangArray[1];
    document.getElementById('nutAllergi').innerHTML = myLangArray[2];
    $('#filterButton').val(myLangArray[3]);

}


//English
Lang_en = new Array();
Lang_en[0] = "gluten intolerance";
Lang_en[1] = "lactose intolerance";
Lang_en[2] = "nut allergi";
Lang_en[3] = "filter";

//Swedish
Lang_se = new Array();
Lang_se[0] = "Glutenintolerans";
Lang_se[1] = "laktosintolerant";
Lang_se[2] = "mutter allergi";
Lang_se[3] = "filtrera";
