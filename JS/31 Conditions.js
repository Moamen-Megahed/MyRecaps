/*
  Comparison Operators
  - == Equal -> compare value only
  - != Not Equal compare value only

  - === Identical -> compare value and type 
  - !== Not Identical compare value and type 

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/


// console.log(10 == "10"); // true
// console.log(10 === "10"); // false




/*
  Logical Operators
  - ! Not 
  - && And -> all conditions must be met
  - || Or -> at least one condition
*/

// console.log(!(10 == "10")); // false
// console.log(10 == "10" && 10 >= "10" && 10 === 15); // false
// console.log(10 == "10" || 10 >= "10" || 10 === 15); // true

/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // code;
  }

*/

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "KSA";

// if (discount === true) {
//     price -= discountAmount;
// } else if(country === "Egypt"){
//     price -= 40;
// } else {
//     price -= 10;
// }

// console.log(price);



/*
  Nested If
*/

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "Egypt";
// let student = false;

// if (discount === true){
//     price -= discountAmount;
// } else if(country === "Egypt"){
//     if(student===true){
//         price -= discountAmount + 30;
//     } else {
//         price -= discountAmount + 10;
//     }
// }

// console.log(price)


/*
  Conditional (Ternary) Operator -> المختصره if  
  
  if -> Condtion ? code
  else -> :

  if - else -> condition ? code : code;
  if - else if - else -> condition ? code : condition ? code : code;

    فلاخر else لازم فيه 
*/

// let name = "Mona";
// let age = 30;
// let gender = "female";

// if(gender ===  "male"){
//     console.log(`Mr ${name}`);
// }else{
//     console.log(`Mrs ${name}`);
// }

// gender === "male" ? console.log(`Mr ${name}`) : console.log(`Mrs ${name}`);

// age < 20 
// ? console.log("lower 20") 
// : age > 20 && age < 60 
// ? console.log("20 - 60") 
// : console.log("lareger 60");


/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value(0, "") 
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

// let price= 0; 

// console.log(`The Price is ${price || 200}`); // falsy value -> 200
// console.log(`The Price is ${price ?? 200}`); // falsy value -> 0 


/*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code;
      break;
    Case 2:
      // Code;
      break;
    Default:
      // Code;
  }
------> identical بتقارن  switchخد بالك ان ال

  - Default Ordering
  -> break; بتيجي ف الاول عادي بس لازم بعدها نعمل 

  - Multiple cases 
  -> code ويطلعوا نفس ال case ممكن نعمل اكتر من
  - ===
*/

// let kit = 4;

// switch(kit){
//     case 1:
//         console.log("courtios");
//         break;
//     case 2:
//         console.log("carvajal");
//         break;
//     case 3:
//     case 4 :
//         console.log("nacho");
//         break;
//     default :
//         console.log("Unknown player");
// }