
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
    document.getElementById('Title').innerHTML = myLangArray[0];

}


//English
Lang_en = new Array();
Lang_en[0] = "Please choose your favorite beers";


//Swedish
Lang_se = new Array();
Lang_se[0] = "Välj din favorit öl";
