function square(number)
{
   let squared = number * number;
   return squared;
}
let s = square(123);
console.log(s);

//function without name anonymous fucntion


var f1 = function square(number)
{
   let squared = number * number;
   return squared;
}
let s1 = f1(44);
console.log(s1)

//Arrow function
var fun2 = number => number * number;
(a, b) =>{
   let sum = a + b;
   return sum;
}

//closure- function inside funcation
//eg-1
function outside(x){
   function inside(y){
      return x + y;
   }
   return inside;
}

let inside_fn = outside(10); //give me a function that adds 10 to whatever result comes
let result = inside_fun(40);
console.log(result);

//eg2
function addSquares(a, b){

   function square(x) {
      return x * x;
   }

   let result = square(a) + square(b)
   return result;
}
let r = addSquares(12, 66);

//Eg3
let createPet = function(name){
   return {
      setName: function(newName){
         name = newName
      }
   },
      getName: function() {
      return name;
   }
}
let dog = create("diamond");
dog.setName()

//
let createPet = name =>{
   return{
      setName: newName => name + newName;
      getName: () => name
   }
}
let dog = createPet('diamond');

//Parameters
function formatName(salutation = "Ms", name, addresss){
   let completeName = salutation + "." + Name + addresss;
   return completeName;
}
let n = formatName("MR.", "Hasana", "Ktm");
let m = formatName("xyz", ktm );
console.log(n);

// Rest parameters
function add(a, b, ...moreArg){
   console.log(a);
   console.log(b);
   console.log(moreArg);
}
add(23,78);
add(6, 8, 9, 4, 12);















   



