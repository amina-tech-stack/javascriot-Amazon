import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
// import '../data/cart-class.js';
//import '../data/backend-practice.js';
import { loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';

async function loadPage(){
    //asyn make a function a promise 
    try{
       // throw 'error1';

        await loadProductsFetch();

        await new Promise((resolve,reject)=>{
            // throw 'error2';
            loadCart(()=>{
               // reject('error3');
                resolve('value3');
            });
        })
    
    } catch (error){
        console.log("Unexcpted error. Please try again later ");
    }
    renderOrderSummary(); 
    renderPaymentSummary();
}
loadPage();
/*
Promise.all([
    loadProductsFetch(),
     new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    })

]).then ((values)=>{
    console.log(values);
    renderOrderSummary(); 
    renderPaymentSummary();
})*/
/*
new Promise((resolve)=>{
    loadProducts(()=>{
     resolve('value1');
    });  
 
 })
.then((value)=>{
    console.log(value);
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    }); 

}).then(()=>{
    renderOrderSummary(); 
    renderPaymentSummary();
});*/
/*
//multiple callbacks cause nesting this is why we use promises 
//2nd methode without promises (with callback) 
loadProducts(()=>{
    loadCart (()=>{
        renderOrderSummary();
        renderPaymentSummary();
    });
});

*/