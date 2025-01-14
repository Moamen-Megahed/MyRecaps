/*
  Function

  - Syntax + Basic 
  -> function funName(Parameter, parameter, ...){
        code;
  } 

  - Parameter + value
  -> parameter => فار التجاارب , value =>function القيمه الحقيقه الي هتنفذ عليها ال

*/

// function sayHello(userName){
//     console.log(`Hello Ya ${userName}`);
// }

// sayHello("Moamen");

/*
  Function Advanced Examples
*/



// function sayHello(userName, age){
//     if(age <= 20){
//         console.log(`akbar b2a`);
//     }else
//     console.log(`Hello Ya ${userName}, Your age is ${age}`)
// }

// sayHello("Moamen", 20);
// sayHello("Moamen", 22);

// function genYears(start, end, exclude){
//     for(let i = start; i<=end; i++){
//         if(i === exclude){
//             continue;
//         }
//         console.log(i);
//     }
// }

// genYears(2010, 2022, 2020);




/*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
  --------------------
  -> بتمسك الراجع كدا و مينعش تكتب تحتها حاجه فلفنكشن مش هيوصلها اصلا لانه لما بيشوف الريتيرن دي بيطلع خلاص
*/

// function sum(num1, num2){
//     return num1+num2;
// }
// console.log(sum(5, 10));


// function genYears(start, end){
//     for(let i = start; i<=end; i++){            
//         if(i === 2015){                         //=> القصد من المثال انه الريتيرن بتوقف الفانكشن اهو
//             return;
//         }
//         console.log(i);
//     }
// }

// genYears(2010, 2022);






/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]

  - Old Strategies [Condition + Logical Or]
  - ES6 Method
  -> فيه 3 طرق عشان تكتب بيهم الديفلت بارميتر
  -> انك تعمل اف لو الباراميتر = الانديفايند خلي الباراميتر بكذا
  -> زي ماعملنا قبل كدا orانك تستخدم ال 
  -> انك تقوله كدا => function funName(name = "Unknown") => وبكدا لو انت محطلوش الاسم هيعبره اننون
*/


// function sayHello(uName, uAge = "Unkown"){
//     console.log(`Your name is ${uName}, Your Age is ${uAge || "Unknown"}`);
// }

// sayHello("moamen");



/*
  Function
  - Rest Parameters -> function myFun(...restParameters) => array وبيبقا 
  => يعني باقي البراميترز الي هتدخل ايا كان عددها 

  - Only One Allowed ->  هو ريست باراميتر واحد بس 
  - Must Be Last Element -> ولازم يبقا فلاخر
*/

// function sum(...restNums){
//     let result = 0;
//     for(let i=0; i < restNums.length; i++){
//         result += restNums[i];
//     }
//     return `Sum = ${result}`
// }
// console.log(sum(10, 20, 40, 80));


/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/


// function shInfo(uN="UNK", uA="UNK", uRat=0, show="yes", ...skills ){
//     document.write(`<div>`);
//     document.write(`<h2>Hello ${uN}</h2>`);
//     document.write(`<p>Age: ${uA}</p>`);
//     document.write(`<p>Rate: $${uRat}</p>`);
//     if(show === "yes"){
//         if(skills.length > 0){
//             document.write(`Skills: ${skills.join(" | ")}`);
//         }else{
//             document.write(`No Skills To show`);
//         }
//     } else{
//         document.write(`Skills hidden`);
//     }
//     document.write(`<div>`);
// }

// shInfo("Moamen", 21, 20, "yes", "Html", "Js", "CSS");

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/  





// function checkStatus(a, b, c) {
//     let name;
//     let age;
//     let status;
//     if(typeof a === "string"){
//         name = a;
//     }else if(typeof a === "number"){
//         age = a;
//     }else{
//         status = a;
//     }
//     if(typeof b === "string"){
//         name = b;
//     }else if(typeof b === "number"){
//         age = b;
//     }else{
//         status = b;
//     }
//     if(typeof c === "string"){
//         name = c;
//     }else if(typeof c === "number"){
//         age = c;
//     }else{
//         status = c;
//     }
//     if (status === true){
//         status = (` You Are Available For Hire`)
//     }else{
//         status = (` You Are Not Available For Hire`)
//     }
//     console.log(`Hello ${name}, Your Age Is ${age},${status}`);
// }
  
//   // Needed Output
//   checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
//   checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"


