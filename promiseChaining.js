const cart=["kurtha","jeans","shirt"];

//Without promises
createOrder(cart,function(orderId){
  proceedToPayment(orderId,function(paymentInfo){
    showOrderSummary(paymentInfo,function(){
      updateWalletBalance();
    });
  });
});

//Using promise chaining
createOrder(cart)
  .then(function(orderId){
    return proceedToPayment(orderId)
  })
  .then(function(paymentInfo){
    return showOrderSummary(paymentInfo)

  })
  .then(function(paymentInfo){
    return updateWalletBalance(paymentInfo)
  });
