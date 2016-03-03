/**
 * Created by MA on 3/1/2016.
 */
$(function getAllMenu() {


    $.getJSON("Database/Database_User.json", function (json) {

        var count = json.length;
        alert(count);
       /* for (var i = 0; i < count; i++) {

            var beer_id = json[i]
            var name = json[i].namn;
            var name2 = json[i].namn2;
            var price = json[i].pub_price;

        }*/
    });
});