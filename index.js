const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries = batteryBatches.reduce(function(total, element){return element + total}, 0)
//     result        array/collection              callback              total starts being 0


// let doubledAndSummed = [1, 2, 3].reduce(function(total, element){ return element * 2 + total}, 0)
// => 12


// console.log(couponLocations.reduce(couponCounter, 0)); // also prints 15!

// const couponLocations = [
//     { room: 'Living room', amount: 5 },
//     { room: 'Kitchen', amount: 2 },
//     { room: 'Bathroom', amount: 1 },
//     { room: 'Master bedroom', amount: 7 }
//   ];
   
//   function ourReduce(arr, reducer, init) {
//       let accum = init;
//       arr.forEach(element => {
//           accum = reducer(accum, element);
//       });
//       return accum;
//   }
   
//   function couponCounter(totalAmount, location) {
//     return totalAmount + location.amount;
//   }
   
//   console.log(ourReduce(couponLocations, couponCounter, 0)); // prints 15

// The above could be rewritten as:

// function ourReduce(couponLocations, couponCounter, initialValue) {
//         let aggretate = initialValue
//     couponLocations.forEach(coupon => {
//         aggretate = couponCounter(aggretate, coupon);
//     });
//     return aggretate;
// }

// const couponLocations = [
//     { room: 'Living room', amount: 5 },
//     { room: 'Kitchen', amount: 2 },
//     { room: 'Bathroom', amount: 1 },
//     { room: 'Master bedroom', amount: 7 }
//   ];
   
//   function couponCounter(totalAmount, coupon) {
//     return totalAmount + coupon.amount;
//   }
// console.log(ourReduce(couponLocations, couponCounter, 0)); // prints 15
