

/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/




var person = {
    firstName: "Ayham",
    lastName: "Zaid",
    age: 24,
    dob:"Monday",
    favorietFood:["GreenBurger","Kabbsa","Wafel"],
    favorietMovie:["marvel","needForSpeed","DC","Avenger","lost"],
    
  };
  console.log(person);


/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/




var person = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
     
  ];
  for (var i = 0; i < person.length; i++) {
    console.log(person [i].name.first);
  }
  
  
  
  
/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/
var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
     
  ];
  
  function myFun(obj){
   var sum = 0 ;
    for (var i = 0; i < obj.length; i++) {
      sum += obj[i].age;
  }
  return sum/obj.length;
  
  }
  console.log(myFun(persons));
  

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/

function bigPerson(obj){
    var older =  obj[0].age ;
     for (var i = 0; i < obj.length; i++) {
   if (obj[i].age>older){
     older = obj[i].age;
     var fullName = obj[i].name.first +" "+obj[i].name.last;
   }
     }
    return fullName;   
   }
   var persons = [
     { name: { first: 'John', last: 'Hob' }, age: 35 },
     { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
     { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
     { name: { first: 'Zues', last: 'Odin' }, age: 55 },
     { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
      
   ];
   
   console.log(bigPerson(persons));
   
   
   
/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

function longestName(obj){
    var longest=obj[0].name.first+obj[0].name.last ; 
    for (i=0 ; i<obj.length ; i++){ 
       if (longest.length < (obj[i].name.first+obj[i].name.last).length ){
         longest=obj[i].name.first+obj[i].name.last;
         var fullName=obj[i].name.first +" "+ obj[i].name.last; 
       }
    }
        return fullName;
 }
 var persons = [
   { name: { first: 'John', last: 'Hob' }, age: 35 },
   { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
   { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
   { name: { first: 'Zues', last: 'Odin' }, age: 55 },
   { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 },
   ];
 
 console.log(longestName(persons)); 
/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

function longestName(obj){
    var longest=obj[0].name.first+obj[0].name.last ; 
    for (i=0 ; i<obj.length ; i++){ 
       if (longest.length < (obj[i].name.first+obj[i].name.last).length ){
         longest=obj[i].name.first+obj[i].name.last;
         var fullName=obj[i].name.first +" "+ obj[i].name.last; 
       }
    }
        return fullName;
 }
 var persons = [
   { name: { first: 'John', last: 'Hob' }, age: 35 },
   { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
   { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
   { name: { first: 'Zues', last: 'Odin' }, age: 55 },
   { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 },
   ];
 
 console.log(longestName(persons)); 

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/

function repeatWord(str){
  var newString= str.toLowerCase();
  var splitedStr=newString.split(" ");
  var keys =[];
  var values =[];
  for (var i = 0; i < splitedStr.length; i++) {
    var count = 0;
    keys[i]=splitedStr[i];
    for (var j = 0; j < splitedStr.length; j++) {
      if (splitedStr[i]==splitedStr[j]) {
        count=count+1;
        
      }
    }
    values[i]=count;
  }
  var newObj ={};
  keys.forEach((key,i) => newObj[key] = values[i]);
  return newObj;
}
var strings = "My name is alex mercer class name B baba mama hello Hello HELLO";
console.log(repeatWord(strings));

/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/

function repeatChar(str){
  var newString= str.toLowerCase();
  var splitedStr=newString.split("");
  var keys =[];
  var values =[];
  for (var i = 0; i < splitedStr.length; i++) {
    var count = 0;
    keys[i]=splitedStr[i];
    for (var j = 0; j < splitedStr.length; j++) {
      if (splitedStr[i]==splitedStr[j]) {
        count=count+1;
        
      }
    }
    values[i]=count;
  }
  var newObj ={};
  keys.forEach((key,i) => newObj[key] = values[i]);
  return newObj;
}
var strings = "mamababatetacedo";
console.log(repeatChar(strings));

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/
function selectFromObject(object,arr){
  var obj={};
  for (key in object) {
    for (i in arr){
      if (key==arr[i]){
        obj[key]=object[key]
      }

    }

    }
    return obj ;
}
console.log(selectFromObject({a: 1, cat: 3,},['a', 'cat', 'd']));




/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/
function objectToArray(obj){
    return transform = Object.keys(obj).map(function(key){
    return [Number(key), obj[key]];})
    }
/*  n
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object
Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/
function arrayToObject(arr){
        return obj = arr.reduce(function(acc, cur, i) {
            acc[i] = cur;
            return acc;
          }, {});
        }

/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/


/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/

function onlyNumber(object) {
    newArray = {};
    for (var objects in object) {
        if (typeof object[i] === "number")
            newArray[objects] = object[objects];

    }
    return newArray;
}
/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/
function onlyString(object) {
    newArray = {};
    for (var objects in object) {
        if (typeof object[objects] === "string"){
            newArray[objects] = object[objects];
        }
    }
    return newArray;
}

/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/
function onlyArray(object) {
    newArray = {};
    for (var objects in object) {
        if (typeof object[objects] === "object")
            newArray[objects] = object[objects];

    }
    return newArray;
}

/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/
function keysArray(object) {
    newArray = [];
    for (var objects in object) {
        newArray.push(objects);
    }

    return newArray;
}

/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]

*/

function valuesArray(object) {
    newArray = [];
    for (var objects in object) {
        newArray.push(object[objects]);
    }
    return newArray;

}

/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object

Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/
function objectLength(object) {
    number = 0;
    for (objects in object) {
        number += 1;
    }

    return number;

}

/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even

Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/
function evenValue(object) {
    newArray = {};
    for (objects in object) {
        if (object[objects] % 2 === 0){
            newArray[objects] = object[objects];
        }
            
    }

    return newArray;

}

/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key

Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4
*/
function longestKey(object) {
    longk = "0";
    for (objects in object) {
        if (objects.length > longk.length)
            long = objects;
    }
    return object[longk];
}