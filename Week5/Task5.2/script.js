var row = 5;
var buy = document.getElementById("buy");

function totalPrice(){
  var itemList = ["Apple","Banana","Blueberries"];
  var priceList = [5.48,0.2,2.5];
  var qtyList = [null,null,null];

  var qtyApple = document.getElementById('apple').value;

  var qtyBanana = document.getElementById('banana').value;

  var qtyB = document.getElementById('blueberries').value;

  var userEnter = [qtyApple,qtyBanana,qtyB];

  var finalPrice = [null,null,null];

  var finalTotalPrice = 0;

  var display = document.getElementById("display");

   for(var i = 0; i < 3; i++){
    if(userEnter[i] != 0){
      qtyList[i] = userEnter[i];
      finalPrice[i] = qtyList[i] * priceList[i];
    }
  }

  finalTotalPrice = finalPrice[0] + finalPrice[1] + finalPrice[2];



  for(var i =0 ; i <3; i++){

  var newrow = display.insertRow(row++);

  var cell1 = newrow.insertCell(0);
  var cell2 = newrow.insertCell(1);
  var cell3 = newrow.insertCell(2);
  var cell4 = newrow.insertCell(3);


   cell1.innerHTML = itemList[i];
   cell2.innerHTML = qtyList[i];
   cell3.innerHTML = priceList[i];
   cell4.innerHTML = finalPrice[i];

   }

   var cell5 = newrow.insertCell(4);
   cell5.innerHTML = finalTotalPrice;




}
