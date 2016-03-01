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
            if(i%2==0) {
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

    });

});
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
    console.log(name+" "+allergy);
    $(tmp).appendTo("#beerTable");
}
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
            if(Gchecked && Lchecked && Nchecked && allergy=="") {
               buildMenu(tmp, beer_id, name, name2, price, allergy,counter);
                counter++;
            }
            else if(Gchecked && Lchecked && !Nchecked && allergy=="nut") {
                buildMenu(tmp, beer_id, name, name2, price, allergy,counter);
                counter++;
            }
            else if(Gchecked && !Lchecked && Nchecked && allergy=="lactose") {
                buildMenu(tmp, beer_id, name, name2, price, allergy,counter);
                counter++;
            }
            else if(!Gchecked && Lchecked && Nchecked && allergy=="gluten"){
                buildMenu(tmp, beer_id, name, name2, price, allergy,counter);
                counter++;
            }
            else if(Gchecked && !Lchecked && !Nchecked && allergy!="gluten") {
                buildMenu(tmp, beer_id, name, name2, price, allergy,counter);
                counter++;
            }
            else if(!Gchecked && Lchecked && !Nchecked && allergy!="lactose") {
                buildMenu(tmp, beer_id, name, name2, price, allergy, counter);
                counter++;
            }
            else if(!Gchecked && !Lchecked && Nchecked && allergy!='nut') {
                buildMenu(tmp, beer_id, name, name2, price, allergy,counter);
                counter++;
            }

        }

    });
}
