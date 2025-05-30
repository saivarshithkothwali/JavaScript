const cart=["kurtha","jeans","shirt"];

//Without promises
createOrder(cart,function(orderId){
  proceedToPayment(orderId);
});

//With promises
const promise=createOrder(cart);
promise.then(function(orderId){
  proceedToPayment(orderId);
});