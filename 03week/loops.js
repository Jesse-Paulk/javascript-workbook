'use strict'

//1
let carsInReverse = ['audi','chevy','dodge','ford'];
for (var i = 0; i < 4; i++) {
  console.log(carsInReverse[i]);
}
//2
let persons = {
firstName: "Jane",
lastName: "Doe",
birthDate: " Jan 5, 1925",
gender: " female"
};


for ( var x in persons){
console.log(persons[x]);
}
//2.2
for ( var x in persons){
  if (x === 'birthDate')
console.log(persons[x]);
}

}
//3
let i = 0;
while (i < 1000) {
      i++;
    console.log(i);
}

//4
let i = 0;
do {
 console.log(i++);

}while(i < 1000);

   console.log(i);
