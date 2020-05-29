const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Code your solution here

var totalBatteries = getTotalBatteries(batteryBatches);

function getTotalBatteries(batteries) {

  let total = 0;

  batteries.forEach(function (battery) {
    total += battery;
  });
  return total;
}
