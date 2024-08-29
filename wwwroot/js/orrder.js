window.onload = function(){
  function amount (){
    
    return localStorage.getItem("amount");
  }
  const amountInput = document.getElementById("amount");
  amountInput.value = amount();
}