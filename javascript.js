function milkfunction() {
  shed1 =(document.getElementById("firstshed").value);
  shed2 =(document.getElementById("secondshed").value);
  shed3 =(document.getElementById("thirdshed").value);
  shed4 =(document.getElementById("forthshed").value);

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