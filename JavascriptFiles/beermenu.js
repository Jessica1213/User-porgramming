
$(function getAllMenu() {

    $("#beerTable").show();
    
    $.getJSON("Database/Database_Beer.json", function(json) {

        var count = json.length;
        for(var i = 0; i<count; i++) {
            var temp = "";
            var beer_id = json[i].beer_id;
            var name = json[i].namn;
            var name2 = json[i].namn2;
            var price = json[i].pub_price;

            if(i%2==0) {

                temp += '<tr class="menuRowEven" id="' + beer_id + '" onmouseover="mouseOverForDrag()" draggable="true" ondragstart="drag(event)">' +
                    '<td class="beerName"><img src="CSSFiles/images/beer.png" width="10%"><span title="' + name2 + '">' + name + '</span>' + '</td>'
                    + '<td class="beerPrice">' + price + " SEK" + '</td></tr>';
            }
            else {
                temp += '<tr class="menuRow" id="' + beer_id + '" onmouseover="mouseOverForDrag()" draggable="true" ondragstart="drag(event)">' +
                    '<td class="beerName"><img src="CSSFiles/images/beer.png" width="10%"><span title="' + name2 + '">' + name + '</span>' + '</td>'
                    + '<td class="beerPrice">' + price + " SEK" + '</td></tr>';
            }
            $(temp).appendTo("#beerTable");
        }

    });

});

