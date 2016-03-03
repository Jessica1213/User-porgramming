function buildMenu(tmp, beer_id, name, name2, price, allergy, counter){
    if(counter%2==0) {
        tmp += '<tr class="menuRowEven" id="' + beer_id + '" onmouseover="mouseOverForDrag()" draggable="true" ondragstart="drag(event)">' +
            '<td class="beerName"><img src="CSSFiles/images/beer.png" width="10%"><span title="' + name2 + '">' + name + '</span>' + '</td>'
            + '<td class="beerPrice">' + price + " SEK" + '</td></tr>';
    }
    else {
        tmp += '<tr class="menuRow" id="' + beer_id + '" onmouseover="mouseOverForDrag()" draggable="true" ondragstart="drag(event)">' +
            '<td class="beerName"><img src="CSSFiles/images/beer.png" width="10%"><span title="' + name2 + '">' + name + '</span>' + '</td>'
            + '<td class="beerPrice">' + price + " SEK" + '</td></tr>';
    }
    $(tmp).appendTo("#beerTable");
}

$(function getAllMenu() {

    $("#beerTable").show();

    $.getJSON("Database/Database_Beer.json", function(json) {

        var count = json.length;
        for(var i = 0; i<count; i++) {
            var tmp = "";
            var beer_id = json[i].beer_id;
            var name = json[i].namn;
            var name2 = json[i].namn2;
            var price = json[i].pub_price;
            var allergy = json[i].allergy;
            buildMenu(tmp, beer_id, name, name2, price, allergy, i);
        }

    });

});

function filter() {
    var Gchecked = document.getElementById('gulten').checked;
    var Lchecked = document.getElementById('lactose').checked;
    var Nchecked = document.getElementById('nut').checked;
    document.getElementById('beerTable').innerHTML = "";

    $.getJSON("Database/Database_Beer.json", function(json) {

        var count = json.length;
        var counter = 0;
        for(var i = 0; i<count; i++) {
            var beer_id = json[i].beer_id;
            var name = json[i].namn;
            var name2 = json[i].namn2;
            var price = json[i].pub_price;
            var allergy = json[i].allergy;
            var tmp = "";
            if(Gchecked && Lchecked && Nchecked && allergy==="") {
               buildMenu(tmp, beer_id, name, name2, price, allergy,counter);
                counter++;
            }
            else if(Gchecked && Lchecked && !Nchecked && allergy==="nut") {
                buildMenu(tmp, beer_id, name, name2, price, allergy,counter);
                counter++;
            }
            else if(Gchecked && !Lchecked && Nchecked && allergy==="lactose") {
                buildMenu(tmp, beer_id, name, name2, price, allergy,counter);
                counter++;
            }
            else if(!Gchecked && Lchecked && Nchecked && allergy==="gluten"){
                buildMenu(tmp, beer_id, name, name2, price, allergy,counter);
                counter++;
            }
            else if(Gchecked && !Lchecked && !Nchecked && allergy!=="gluten") {
                buildMenu(tmp, beer_id, name, name2, price, allergy,counter);
                counter++;
            }
            else if(!Gchecked && Lchecked && !Nchecked && allergy!=="lactose") {
                buildMenu(tmp, beer_id, name, name2, price, allergy, counter);
                counter++;
            }
            else if(!Gchecked && !Lchecked && Nchecked && allergy!=='nut') {
                buildMenu(tmp, beer_id, name, name2, price, allergy,counter);
                counter++;
            }

        }

    });
}

function Namesearch(searchString) {
    searchString = searchString.toLowerCase();
    document.getElementById('beerTable').innerHTML = "";

    $.getJSON("Database/Database_Beer.json", function(json) {

        var results = $.map(json, function(entry) {
            var match = (entry.namn.toLowerCase().indexOf(searchString)!== -1) || (entry.namn2.toLowerCase().indexOf(searchString)!==-1);
            return match ? entry : null;
        });
        var count = results.length;
        for(var i = 0; i<count; i++) {
            var tmp = "";
            buildMenu(tmp, results[i].beer_id, results[i].namn, results[i].namn2, results[i].pub_price, results[i].allergy, i);
            $(tmp).appendTo("#beerTable");
        }

    });

}

function  Pricesearch(lowestPrice, highestPrice) {
    if(lowestPrice=="") lowestPrice=0;
    if(highestPrice=="") highestPrice=10000;
    document.getElementById('beerTable').innerHTML="";

    $.getJSON("Database/Database_Beer.json", function(json) {

        var results = $.map(json, function(entry) {
            var match = (entry.pub_price <= highestPrice && entry.pub_price >= lowestPrice)
            return match ? entry : null;
        });
        var count = results.length;
        for(var i = 0; i<count; i++) {
            var tmp = "";
            buildMenu(tmp, results[i].beer_id, results[i].namn, results[i].namn2, results[i].pub_price, results[i].allergy, i);
            console.log(tmp);
            $(tmp).appendTo("#beerTable");
        }

    });

}