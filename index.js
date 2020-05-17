const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce(function(total, batches){
  return batches + total}, 0)


// function getTotalAmountForProducts(products) {
//   let totalPrice = 0;
 
//   products.forEach(function(product) {
//     totalPrice += product.price;
//   });
 
//   return totalPrice;
// }