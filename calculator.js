

function addition() {
  var value1 = document.getElementById('firstnum').value;
  var value2 = document.getElementById('secnum').value;

   var x = +value1 + +value2;
    document.getElementById("result").innerHTML = x;
    console.log(x);
}
function subs() {
  var value1 = document.getElementById('firstnum').value;
  var value2 = document.getElementById('secnum').value;

   var x = +value1 - +value2;
    document.getElementById("result").innerHTML = x;
    console.log(x);
}
function multi() {
  var value1 = document.getElementById('firstnum').value;
  var value2 = document.getElementById('secnum').value;

   var x = value1 * value2;
    document.getElementById("result").innerHTML = x;
    console.log(x);
}
function divide() {
  var value1 = document.getElementById('firstnum').value;
  var value2 = document.getElementById('secnum').value;

   var x = value1 / value2;
    document.getElementById("result").innerHTML = x;
    console.log(x);
}

function BMI() {
  var Height = document.getElementById('bmi1').value;
  var Weight = document.getElementById('bmi2').value;

  var x = Weight / (Height*Height);
   document.getElementById("resultbmi").innerHTML = x;
   console.log(x);
}

function changeUnit(y) {
  console.log(y.value);
  var unit = y.value;
  if (unit == "Imperial"){
    document.getElementById('imp1').innerHTML = "Height (in)"
    document.getElementById('imp2').innerHTML = "Weight (lb)"
  }
  else {
    document.getElementById('imp1').innerHTML = "Height (m)"
    document.getElementById('imp2').innerHTML = "Weight (kg)"
  }
}
