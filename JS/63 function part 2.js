/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
  -> الدرس دا عايزك تعرف بس امتى بعمل فنكشن من غير اسم او انونيموس 
  -> حاسسها ملهاش لازمه عادي
*/



// let calculator =function (num1, num2){
//   console.log(num1+num2)
// }
// calculator(10, 20);



/*
  Function
  - Function Inside Function -> Nested Function -> لما ابقا مبرمج كبير واعمل فنكشنز معقده هستخدمها
  - Return Function
*/

// function sayMessage(fName, lName){

//   let message = (`Hello`);
//   function concatNames(){
//     message = `${message} ${fName} ${lName}`
//     return message;
//   }
//   return concatNames();
// }
// console.log(sayMessage("Moamen", "Megahed"));


/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
  =>   بص هي زي الانون بلظبط بس الفرق انك بتشيل كلمه فنكشن وبتحط مكانها السهم
  => {} ولو الفنكشن عباره عن سطر واحد تقدر تشيل الريتيرن والاقواس دي 
*/


// let print = function(name1){
//   return name1;
// }
// console.log(print());


// let print =(name1)=>name1;
// console.log(print("Moamen"));


/*
  Scope
  - Global And Local Scope
  =>الفنكشن سكوبها لوكال مقدرش اوصله فلجلوبال
  => لو فيه فاريبل فلجلوبال وعملت فنكشن فيها فاريبل بنفس الاسم ساعتها هيستخدم اللي فلسكوب بتاع الفنكشن
*/

// var a = 10;
// let b = 20;

// function funcName(){
//   var a =50;
//   let b = 70;
//   console.log (`${a} , ${b} From Function`);
// }

// console.log(`${a} , ${b} From Global`);
// funcName();


/*
  Scope
  - Block Scope [If, Switch, For]
  => نفس الفكره معرفش عمل الدرس دا ليه
  => مش بلوك سكوب var المعلومه الحلوة ان
  => يعني لو عمل اوفر رايت عليه جوا اي سكوب هيشتغل عادي 

*/

// var a = 10;

// if(true){
//   var a = 50;
// }

// console.log(a);

//ورجع 50 varعمل اوفر رايت ع ال

// let a = 10;

// if(true){
//   let a = 50;
// }

// console.log(a);

// معملش اوفر رايت ورجع 10 عادي



/*
  Scope
  - Lexical Scope
=>مش هتصدق نفس الفكره برضو بس عالفنكشن بس يعني =
=> لو فيه فاريبل فالتشايلد فنكشن مقدرش اوصله فلنكشن الاب ,بس الفاريبل الي فلاب اوصله فلابن عادي

  Search
  - Execution Context
  - Lexical Environment
  => الحجات دي لما ابقا حوت هبقا اعرفها
*/

// msh hakteb 7aga


/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

