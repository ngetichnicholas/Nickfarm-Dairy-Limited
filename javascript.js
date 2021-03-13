function milkfunction() {
  var shed1 =(document.getElementById("firstshed").value);
  var shed2 =(document.getElementById("secondshed").value);
  var shed3 =(document.getElementById("thirdshed").value);
  var shed4 =(document.getElementById("forthshed").value);

  if(shed1.length === 0 || shed2.length === 0 || shed3.length === 0 || shed4.length === 0) {
    //check whether the user has typed something

      alert("Fill all the filds!");
    }
  
  else {
      //convert the strings to numbers
      shed1 = parseFloat(shed1);
      shed2 = parseFloat(shed2);
      shed3 = parseFloat(shed3);
      shed4 = parseFloat(shed4);
      var totalmilk=shed1+shed2+shed3+shed4;
      document.getElementById("hidden").style.display = 'block';
      document.getElementById("shed1").innerHTML=shed1;
      document.getElementById("shed2").innerHTML=shed2;
      document.getElementById("shed3").innerHTML=shed3;
      document.getElementById("shed4").innerHTML=shed4;
      document.getElementById("totalmilk").innerHTML = totalmilk;
  }
}
function reset() {
    location.reload();
  }
  function projection(selling_price,time){
   var production=(document.getElementById("total").value);
   if(production.length===0){
     alert("Empty fields not allowed");
   }else{
     production =parseFloat(production);
    var weekly=45*production*7;
    var monthly=45*production*30;
    var yearly=45*production*365;
    document.getElementById("hidden2").style.display = 'block';
    document.getElementById("weekly").innerHTML=weekly;
    document.getElementById("monthly").innerHTML=monthly;
    document.getElementById("yearly").innerHTML=yearly;
   }
  }
  