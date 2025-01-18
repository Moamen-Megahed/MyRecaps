/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.
  =>   لو عايز تعمل نفس تغيير فكل الايلمنتس الي ف اراي استخدم الماب وهيعمل التغيير دا وينفذه فلاراي الجديد
  => يعني اكانك جايب لوب بيمشي على الارراي

  Syntax map(Function(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/


// let myNum = [1, 2, 3, 4, 5];


//Regular
// let newNum = [];
// for(let i = 0; i<myNum.length; i++){
//   newNum.push(myNum[i] * 2);
// }
// console.log(newNum);

//Anon
// let newNum = myNum.map(function(element, index, array){
//     return element *2;
// });
// console.log(newNum);

//Arrow
// let newNum = myNum.map((element, index, array) => element *2);
// console.log(newNum);


/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/


// let swapingCases = "elZERo";

// let sw = swapingCases.split("").map(function (el){
//   return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase(); 
// }).join("")
// console.log(sw);

// let invertedNumbers = [1, -10, -20, 15, 100, -30]

// let inN = invertedNumbers.map(function(el){
//   return -el  
// });
// console.log(inN)

// let ignoreNumbers = "Elz123e5ro9";

// let res = ignoreNumbers.split("").map(function(el){
//   return isNaN(+el) ? el : ""
// }).join("");
// console.log(res)


/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
  => نفس فكره الماب بلظبط اكانك بتعمل لوب يمشي على الاراي كلها بس الفرق
  =>  الفلتر بيفلتر الاراي بمعنى انك بتديله شرط يمشيه ع اليلمينتس كلها لو ترو رجعهالي فالاراي الجديد
*/

// let ignoreNumbers = "Elz123e5ro9";

// let res = ignoreNumbers.split("").filter(function(el){
//   return isNaN(+el);
// }).join("");

// console.log(res)

// let friends = ["Moamen", "Eslam", "Ayman", "Aokl", "Sahwky", "Ahmed"]

// let filteredFriends = friends.filter((el)=> el.startsWith("A"))
// console.log(filteredFriends)

// let numbers = [10, 30 ,15,25,17,18]

// let newNumbers = numbers.filter((el) => el % 2 === 0)
// console.log(newNumbers)


/*
  Filter
  - Filter Longest Word By Number
*/

// let sentence = "I love foood code too playing much"

// let w = sentence.split(" ").filter((el)=> el.length <= 4).join(" ")
// console.log(w)

// let mix = "A13BS2ZX";
// let w = mix.split("").filter((el) => !isNaN(el)).map((el) => el * el)
// console.log(w)


/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.
  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array

=> زي الماب والفلتر بس فيه كذا فرق بص يامعلم
=> اول حاجه دي الفانكشن بتاعتها لتاخد 4 بارميترز وهم
=> acc => اول عنصر , current => تاني عنصر, current index, arr
=>currentواول عنصر هيعتربه الaccاللي بتتكتب تحت دي ساعتها هيعتبرها ال initialize valueلو اديتله
=> الريديوس بقا بتعمل عمليه على العناصر كلها على بعض وترجع قيمه واحده بس

*/

// let myNum = [10,20,30,40]
// let add = myNum.reduce((acc, cur)=> acc + cur ,5)
// console.log(add)

// let myNum = [10,20,30,40]
// let results = 0;

// for(let i = 0; i<myNum.length;i++){
//  results += myNum[i];
// }
// console.log(results);


/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

// let theBiggest = ["Bla","other","AAA","Battery","Propaganda","Test"]
// let w = theBiggest.reduce((acc,cur) => acc.length > cur.length ? acc : cur)
// console.log(w)

// let check = ["E","@","@","@","L","Z","E","@","@","R","O"]
// let w = check.filter((el) => el !== "@").reduce((acc,cur) => acc + cur)
// console.log(w)

/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
  => بص هي دي الكول فنكشن بتعاتها زي الي فلماب والفلتر
  => بس هي مختلفه عنهم خالص
  => هي مش بتريترن حاجه هي بتعمل لوب زيهم بس مش بتغير حاجه
  => بص انا هعرف عنها كتير قدام بس دي عمل بيها الحركه الي كنت هموت واعملها علينك
*/

// let allLis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div");


// allLis.forEach(function(el){
//   el.onclick = function(){
//     // Remove Active Class From All Elements
//     allLis.forEach(function (ele) {
//       ele.classList.remove("active");
//     });
//     // Add Active Class To This Element
//     this.classList.add("active");
//     // Hide All Divs
//     allDivs.forEach(function (ele) {
//       ele.style.display = "none";
//     });
//   }
// })



/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

