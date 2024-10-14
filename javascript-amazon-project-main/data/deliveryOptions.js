export  const deliveryOptions = [
{
    id:'1' ,
    deliveryDays: 7,
    priceCents:0
},{
    id:'2',
    deliveryDays:3,
    priceCents:499
},
{
    id:'3',
    deliveryDays:1,
    priceCents:999
}
];
export function getDeliveryOption (deliveryOptionId){
    let deliveryOption = deliveryOptions.find(option => option.id === deliveryOptionId);

    // If deliveryOption is not found, skip this item
    if (!deliveryOption) return deliveryOptions[0];
    else return deliveryOption;
}