function tarkasta(form)
{
  var etunimi = form.fname.value;
  var sukunimi = form.lname.value;
  var sahkoposti = form.email.value;
  var check = form.lang;
  var vuotta = form.years.value;
  var info = form.info.value;

//Etunimi
  if(etunimi.length < 5)
  {
    alert("Anna vähintään 5-merkkinen etunimi");
    form.fname.focus();
    return false;
  }

//Sukunimi
  if(sukunimi.length < 5)
  {
    alert("Anna vähintään 5-merkkinen sukunimi");
    form.lname.focus();
    return false;
  }

//sähköposti
  var ehdot = /\S+@\S+/;
  if(!ehdot.test(sahkoposti))
  {
    alert("Anna kunnon sähköposti");
    form.email.focus();
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
  if(checkvastaus == false){
    alert("Et valinnut, mitä kieliä osaat");
    return false;
  }

//Koodaus ikä
  {
    var e = document.getElementById("years");
    var strUser = e.options[e.selectedIndex].value;
        if(strUser==0)
        {
          alert("Et kertonut kuinka kauan olet koodannut");
          return false;
        }
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
