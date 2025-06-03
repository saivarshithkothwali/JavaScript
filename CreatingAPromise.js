const cart=["shirt","jeans","kurtha"];

const promise=createOrder(cart);
promise
.then(function(orderId){
  console.log(orderId);
  return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
  console.log(paymentInfo);
  return paymentInfo;
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(summary){
  console.log(summary);
  return summary;
})
.then(function(summary){
  return updateWalletBalance(summary);
})
.then(function(walletBalance){
  console.log(walletBalance);
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

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
      resolve("Payment Successful");
    });
}

function showOrderSummary(paymentInfo){
  return new Promise(function(resolve,reject){
    resolve("shirt,jeans,kurtha");
  });
}

function updateWalletBalance(summary){
  return new Promise(function(resolve,reject){
    resolve("Updated wallet balance is 1000");
  });
}

function validCart(cart){
  return true;
}