function tarkasta(form)
{
  var kokonimi = document.getElementById("name").value;
  var sahkoposti = document.getElementById("email").value;
  var ikä = document.getElementById("age").value;
  var työ = document.getElementById("work").value;
  var check1 = document.getElementById("email").value;
  var check2 = document.getElementById("email").value;
  var info = document.getElementById("email").value;

//kokonimi
if (kokonimi == undefined || kokonimi) {
    alert('name required');
    document.insc.name.focus();
    return false;
}
//sähköposti
if (sahkoposti == undefined || sahkoposti == '') {
    alert('email is required');
    document.insc.email.focus();
    return false;
}
//ikä
if (ikä == undefined && ikä < 18 && ikä > 95) {
    alert('define your age');
    document.insc.age.focus();
    return false;
}
//työ tilanne
var e = työ;
var strUser = e.options[e.selectedIndex].value;
if (strUser == 0){
    alert("Et kertonut kuinka kauan olet koodannut");
    document.insc.work.focus();
    return false;
}
//työ ajat
var checkvastaus = false;
for(var j = 0; j < check.length; j++)
  {
    if(check[j].checked == true)
  {
    checkvastaus = true;
  }
  }
  if(checkvastaus == false){
    alert("Et valinnut, mitä kieliä osaat");
    return false;
  }

//Koodi kielet
var checkvastaus = false;
for(var j = 0; j < check.length; j++)
  {
    if(check[j].checked == true)
  {
    checkvastaus = true;
  }
  }
  if(checkvastaus == false)
    {
      alert("Et valinnut, mitä kieliä osaat");
      return false;
    }


//Oma lisäys
if(info.length < 20){
  alert("Palautteessa pitää olla vähintään 20 merkkiä");
  form.info.focus();
  return false;
  }

//Valmis
else {
  alert("Kiitos lomakkeen täytöstä");
  }
}
