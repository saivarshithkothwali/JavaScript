const cart=["shirt","jeans","kurtha"];

const promise=createOrder(cart);
promise.then(function(orderId){
  console.log(orderId);
})
.catch(function(err){
  console.log(err.message);
});

function createOrder(cart){
  const pr=new Promise(function(resolve,reject){
    
    //Logic for validation check of the cart
    if(!validCart(cart))
    {
      const err=new Error("cart is not valid");
      reject(err);
    }
    
    //Logic for create orderId
    const orderId="12345";
    if(orderId){
      setTimeout(function(){
        resolve(orderId);
      },5000);
    }
    
  });
  return pr;
  
}

function validCart(cart){
  return false;
}