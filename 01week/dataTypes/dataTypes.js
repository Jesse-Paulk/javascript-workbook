"use strict"



//1
function getDate() {
  return new Date();
}
 getDate();


//2
function convertToString(num) {
  return num.toString();
}
 convertToString(1234567);

//3
function convertToNum(string) {
  return Number(string);
}
convertToNum('200');

//4
function whatIs(type) {
  return typeof (type);
}
whatIs(true);
whatIs(12);
whatIs('word');

//5
function Add(first, second) {
  return first + second;
}
Add(33,77);

//6
function bothTrue (one, two) {
  if (one && two) {
    return('Both of these are true.')
  }
}
bothTrue(true,true);


//7
function oneTrue (one, two) {
  if (one || two) {
    return('One of these are true.')
  }
}
oneTrue(true, false);

//8
function bothFalse(one, two) {
  if (!one && !two) {
    return('Both of these are false.');
  }
}
bothFalse(false, false);
