/*
  Loop
  - For
  for ([1]; [2]; [3]) {
    // Block Of Code
  }
  -> [1] => initialize => ابدا منين (العداد)
  -> [2] => condition => طول ما
  -> [3] => action => اعمل ايه(في العداد)
*/

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }


/*
  Loop
  - Loop On Sequences
*/

// let arr = [1, 3,"Ahmed", "Moamen", 5, 7, "Osama", "Kamel"]
// let onlyName =[];

// for( i = 0; i < arr.length; i++){
//     if ( typeof arr[i] === typeof "str"){
//         onlyName.push(arr[i])
//     }
    
// }
// console.log(onlyName);


/*
  Loop
  - Nested Loops
*/

// let products = ["Keyboard", "Mouse", "Monitor", "Flower"];
// let colors = ["Red", "Blue", "Green"];
// let models = [2021, 2022];

// for( i=0; i < products.length; i++ ){
//     console.log(``);
//     console.log(products[i]);
//     console.log(``);
//     console.log(`Colors:`);
//     for( let j=0; j < colors.length; j++){
//         console.log(colors[j]);
//     }    
//     console.log(`Models:`);
//     for(k=0;k<models.length;k++){
//         console.log(models[k]);
//     }
// }



/*
  Loop Control
  - Break
  -> بتوقف اللوب

  - Continue
  -> بتستثني وبتكمل 

  - Label
  -> mainLoop:, nestedLoop: => nested loop لو فيه  break,continueدول عشان اتحكم فال
  -> هو قال مش هستخدمه واعرفه بس
*/

// let arr = ["Moamen", 5, 6, 7, "Ziad","Osama", "Kamel", "Sameh"]

// for( let i=0; i < arr.length; i++){

//   if(typeof arr[i] === "number"){
//      console.log(arr[i]);
//   }
  
// }



/*
  Loop For Advanced Example
  -> ممكن يتكتب فين forتوضيح محتوى ال 
  -> initialize ->  forفوق قبل ال 
  -> condition -> breakوالifتحت خالص بال
  -> action -> conditionفوق ال
*/

// let arr = ["Moamen", "Ziad","Osama", "Kamel", "Sameh"]
// let i =0

// for(; ; ){

//   console.log(arr[i]);
//   i +=2 ;
//   if(i >= arr.length){
//     break;
//   }
// }



/*
  Products Practice
  -> forمثال بيوضح ازاي تضيف حاجه جوا الصفحه واستخدام ال
*/


// let products = ["Keyboard", "Mouse", "Iphone", "Laptop", "Case", "Table"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 5;

// document.write(`<h1>Show ${showCount} Products </h1>`);
// for( i=0; i < showCount; i++){
//   document.write(`<div>`);
//   document.write(`<h2>${products[i]}</h2>`);
//   document.write(`<p> ${colors.join(" | ")} </p>`);
//   document.write(`</div>`);
// }


/*
  Loop
  - While
-> initialize
  while(conditon){
    code;
    action;
  }
*/

// let arr = ["Moamen", 5, 6, 7, "Ziad","Osama", "Kamel", "Sameh"]
// let i = 0;

// while(i < arr.length){
//   if(typeof arr[i] === "number"){
//     console.log(arr[i]);
//   }
//   i++;
// }



/*
  Loop
  - Do / While
  ->Do {
      code;
      action;
  } while(conditions)
  => الفرق انها لازم تنفذ اللوب مره ع الاقل=> يعني لو الشرط متنفذش اصلا هيعمل اللوب مره بر ضو
*/

// let i = 0;
// do{
//   console.log(i);
//   i++
// }while(false)

/*
  Loop Challenge
*/  

// let myAdmins = ["Ahmed", "Osama", "Sayed","Kamal", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany","Karem", "Samia", "Anwar"];

// myAdmins.pop();
// myAdmins.pop();
// console.log(myAdmins);

// document.write(`We Have ${myAdmins.length} Admins`);
// document.write(`<hr>`);

// let leader = 0;
// let teamN = 0;
// let workerN = 0;

// for(; leader<myAdmins.length; leader++){

//   document.write(`<div>The admin For Team ${++teamN} is ${myAdmins[leader]}</div>`);
//   document.write(`<h3>Team Members</h3>`);
//   let letter = myAdmins[leader][0];
//   for(let workers = 0; workers < myEmployees.length; workers++){
//     if(myEmployees[workers][0] === letter){
//       document.write(`<p>- ${++workerN} ${myEmployees[workers]}</p>`);
//     }
//   }
//   workerN = 0;
//   document.write(`<hr>`);



// }


