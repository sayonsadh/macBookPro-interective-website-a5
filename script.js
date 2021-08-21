//function for product cost...
function forProductCost(productid, price){
    const memoryCost = document.getElementById(productid);
    memoryCost.innerText = price;
    totalBudget();
}

//function for total price...
function totalBudget(){
    const bestPrice = document.getElementById('bestPrice').innerText;
    const memoryCost = document.getElementById('memoryCost').innerText;
    const storageCost = document.getElementById('storageCost').innerText;
    const deliveryCost = document.getElementById('deliveryCharge').innerText;
    const finalBalance = document.getElementById('totalBalance');
    const totalPrice = document.getElementById('totalPrice');
    totalPrice.innerText = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
    finalBalance.innerText = totalPrice.innerText;
}

//evenhandler memoryButton1..,
document.getElementById('memoryButton1').addEventListener('click', function(){
    forProductCost('memoryCost', 0);
})
//evenhandler memoryButton2...
document.getElementById('memoryButton2').addEventListener('click', function(){
    forProductCost('memoryCost', 180);
})

//storageButton1 evenHandler...
document.getElementById('storageButton1').addEventListener('click',function(){
    forProductCost('storageCost', 0);
})
//storageButton2 evenHandler...
document.getElementById('storageButton2').addEventListener('click',function(){
    forProductCost('storageCost', 100);
})
//storageButton3 evenHandler...
document.getElementById('storageButton3').addEventListener('click',function(){
    forProductCost('storageCost', 180);
})

//delivery button event handler...
document.getElementById('deliveryBtn1').addEventListener('click',function(){
    forProductCost('deliveryCharge', 0);
})

//delivery button event handler...
document.getElementById('deliveryBtn2').addEventListener('click',function(){
    forProductCost('deliveryCharge', 20);
})

//promo check...

    document.getElementById('applyButton').addEventListener('click', function(){
    const discountField = document.getElementById('discountField'); 
    const totalPrice = document.getElementById('totalPrice').innerText;
    const finalBalance = document.getElementById('totalBalance');
    const discount = parseInt(totalPrice) * 0.2;
    if(discountField.value == 'stevekaku'){      
    finalBalance.innerText = parseInt(totalPrice) - discount;
      
    } else{
    finalBalance.innerText = totalPrice;
    }
    discountField.value = '';
})