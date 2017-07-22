//1
cars = ['ford','bmw','civic','dodge,'];

//2
cars = ['ford','bmw','civic','dodge,'];
moreCars = ['mercedes','hybrid','toyota','honda'];

//3
cars = ['ford','bmw','civic','dodge'];
moreCars = ['mercedes','hybrid','toyota','honda'];
x = moreCars.indexOf('honda');
y = cars.lastIndexOf('ford');
console.log(x, y);

//4
cars = ['ford','bmw','civic','dodge'];
moreCars = ['mercedes','hybrid','toyota','honda'];
totalCars = cars.concat(moreCars);
stringOfCars = totalCars.join(',');

//5
cars = ['ford','bmw','civic','dodge'];
moreCars = ['mercedes','hybrid','toyota','honda'];
totalCars = cars.concat(moreCars);
stringOfCars = totalCars.join(',');
totalCars = stringOfCars.split(',');

//6
cars = ['ford','bmw','civic','dodge'];
moreCars = ['mercedes','hybrid','toyota','honda'];
totalCars = cars.concat(moreCars);
stringOfCars = totalCars.join(',');
totalCars = stringOfCars.split(',');
carsInReverse = totalCars.reverse();

//7
cars = ['ford','bmw','civic','dodge'];
moreCars = ['mercedes','hybrid','toyota','honda'];
totalCars = cars.concat(moreCars);
stringOfCars = totalCars.join(',');
totalCars = stringOfCars.split(',');
carsInReverse = totalCars.reverse();
carsInReverse.sort();
alert(carsInReverse.indexOf('bmw'));
console.log(carsInReverse);

//8
cars = ['ford','bmw','civic','dodge'];
moreCars = ['mercedes','hybrid','toyota','honda'];
totalCars = cars.concat(moreCars);
stringOfCars = totalCars.join(',');
totalCars = stringOfCars.split(',');
carsInReverse = totalCars.reverse();
carsInReverse.sort();
removeCars = carsInReverse.sort().slice(3,5);
console.log(removeCars);

//9

cars = ['ford','bmw','civic','dodge'];
moreCars = ['mercedes','hybrid','toyota','honda'];
totalCars = cars.concat(moreCars);
stringOfCars = totalCars.join(',');
totalCars = stringOfCars.split(',');
carsInReverse = totalCars.reverse();
carsInReverse.sort();
removeCars = carsInReverse.slice(3,5);
carsInReverse.splice( 2,3, removeCars);
console.log(carsInReverse);

//10
cars = ['ford','bmw','civic','dodge'];
moreCars = ['mercedes','hybrid','toyota','honda'];
totalCars = cars.concat(moreCars);
stringOfCars = totalCars.join(',');
totalCars = stringOfCars.split(',');
carsInReverse = totalCars.reverse();
carsInReverse.sort();
removeCars = carsInReverse.slice(3,5);
carsInReverse.splice( 2,3, removeCars);
carsInReverse.push('dodge');
console.log(carsInReverse);

//11
cars = ['ford','bmw','civic','dodge'];
moreCars = ['mercedes','hybrid','toyota','honda'];
totalCars = cars.concat(moreCars);
stringOfCars = totalCars.join(',');
totalCars = stringOfCars.split(',');
carsInReverse = totalCars.reverse();
carsInReverse.sort();
removeCars = carsInReverse.slice(3,5);
carsInReverse.splice( 2,3, removeCars);
carsInReverse.push('dodge');
console.log(carsInReverse.pop());

//12
cars = ['ford','bmw','civic','dodge'];
moreCars = ['mercedes','hybrid','toyota','honda'];
totalCars = cars.concat(moreCars);
stringOfCars = totalCars.join(',');
totalCars = stringOfCars.split(',');
carsInReverse = totalCars.reverse();
carsInReverse.sort();
removeCars = carsInReverse.slice(3,5);
carsInReverse.splice( 2,3, removeCars);
carsInReverse.push('dodge');
console.log(carsInReverse.pop());
console.log(carsInReverse.shift());

//13
cars = ['ford','bmw','civic','dodge'];
moreCars = ['mercedes','hybrid','toyota','honda'];
totalCars = cars.concat(moreCars);
stringOfCars = totalCars.join(',');
totalCars = stringOfCars.split(',');
carsInReverse = totalCars.reverse();
carsInReverse.sort();
removeCars = carsInReverse.slice(3,5);
carsInReverse.splice( 2,3, removeCars);
carsInReverse.push('dodge');
carsInReverse.unshift('tesla');
console.log(carsInReverse);

//14
var numbers = [23, 45, 0, 2];
numbers.forEach(function (element) {
console.log(element + 2);
});
