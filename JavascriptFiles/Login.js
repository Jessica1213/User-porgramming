/**
 * Created by MA on 2/2/2016.
 */
function OnSubmitForm()
{
    var userElem = document.getElementById("username");
    var passElem = document.getElementById("password");
    var defUser = userElem.defaultValue;
    var defPass = passElem.defaultValue;

    if(userElem.value == "" || passElem.value == "" || userElem.value == defUser || passElem.value == defPass){
        alert("username and password must be filled out");
        return false;
    }

    link =  "http://pub.jamaica-inn.net/fpdb/api.php?";
    link += "username=" + userElem.value + "&password=" + passElem.value;
    link += "&action=iou_get";

   // document.LoginForm.action = link;

  //  return document.LoginForm.runvalidation();


}