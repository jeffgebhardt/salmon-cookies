var storeList = [];
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function salmonStore(storeName, minCustomers, maxCustomers, avgItemBought) {
  'use strict';
  this.storeName = storeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgItemBought = avgItemBought;
  this.total = 0;
  this.hourlyCustomers = [];
  this.hourlySales = [];
  this.calcHourlySales();
  this.calcHourlyCustomers();
};

salmonStore.prototype.calcHourlyCustomers = function() {
  'use strict';
  salmonStore.call(this);
  for (var i = 0; i < this.hoursOpen.length; i++) {
    var currentHourCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    this.hourlyCustomers.push(currentHourCustomers);
  }
  return this.hourlySales;
};

salmonStore.prototype.calcHourlySales = function() {
  'use strict';
  salmonStore.call(this);
  for (var i = 0; i < this.hourlyCustomers.length; i++) {
    var currentHourSales = Math.floor(this.hourlyCustomers[i] * this.avgItemBought);
    this.hourlySales.push(currentHourSales);
    this.total += currentHourSales;
  }
  return this.hourlySales, this.total;
};

storeList.push(new salmonStore('Pike Place', 17, 88, 5.2));
storeList.push(new salmonStore('Seatac Airport', 6, 18, 1.2));
storeList.push(new salmonStore('South Center', 11, 38, 1.9));
storeList.push(new salmonStore('Belleuve Square', 20, 48, 3.3));
storeList.push(new salmonStore('Alki', 3, 24, 2.6));

var makeRow = function() {
  'use strict';
  salmonStore.call(this);
  var appendRows = document.getElementById('append-rows');
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = this.storeName;
  tr.appendChild(th);

  for (var i = 0; i < this.hourlySales.length; i++) {
    var td = document.createElement('td');
    td.textContent = this.hourlySales[i];
    tr.appendChild(td);
  }
  var newTd = document.createElement('td');
  newTd.value = this.total;
  newTd.textContent = this.total;
  tr.appendChild(newTd);

  appendRows.appendChild(tr);
};

for (var i = 0; i < storeList.length; i++) {
  storeList[i].makeRow();
}

// var newStoreForm = document.getElementById('newStoreInput');
// newStoreForm.addEventListener('submit', formInput);
//
// var formInput = function(event) {
//   'use strict';
//   event.preventDefault();
//
//   var storeNameBox = event.target.storeNameBox.value;
//   var minCustomersBox = parseInt(event.target.minCustomersBox.value);
//   var maxCustomersBox = parseInt(event.target.maxCustomersBox.value);
//   var avgItemBoughtBox = event.target.avgItemBoughtBox.value;
//
//   storeList.push(new salmonStore(storeNameBox, minCustomersBox, maxCustomersBox, avgItemBoughtBox));
//   for (var i = 0; i < storeList.length; i++) {
//     storeList[i].makeRow();
//   }
//
//   event.target.storeNameBox.value = null;
//   event.target.minCustomersBox.value = null;
//   event.target.maxCustomersBox.value = null;
//   event.target.avgItemBoughtBox.value = null;
// };
