/*
  What Is JSON ?
  - JavaScript Object Notation
  - Format For Sharing Data Between Server And Client
  - JSON Derived From JavaScript
  - Alternative To XML
  - File Extension Is .json

  Why JSON ?
  - Easy To Use And Read
  - Used By Most Programming Languages And Its Frameworks
  - You Can Convert JSON Object To JS Object And Vice Versa

  JSON vs XML
  ===================================================
  = Text Based Format      = Markup Language        =
  = Lightweight            = Heavier                =
  = Does Not Use Tags      = Using Tags             =
  = Shorter                = Not Short              =
  = Can Use Arrays         = Cannot Use Arrays      =
  = Not Support Comments   = Support Comments       =
  ===================================================
=> درس نظري افهم بس الكلام الي فوق دا كويس
=>  اخيهxml الجيسون واو وال
*/

/*
  JSON Syntax
  - Data Added Inside Curly Braces {  }
  - Data Added With Key : Value
  - Key Should Be String Wrapped In Double Quotes
  - Data Separated By Comma
  - Square Brackets [] For Arrays
  - Curly Braces {} For Objects

  Available Data Types
  - String
  - Number
  - Object
  - Array
  - Boolean Values
  - null
  => اقرا اللي فوق كويس وافهمه وتطبيقه تحت اهو

  test.json in vs code

  {
    "string": "Moamen",
    "num":22,
    "obj" :{
      "EG" : "Tanta",
      "KSA" : "Gdda",
    },
    "arr" : ["Mo","Es","Ge"],
    "boolean": true,
    "null":null,
  }
*/

/*
  JSON
  - API Overview
  - Tools To Test API
  - Preview Github API
  => كله نظري شوف الفيديو
*/


/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

// let jsonCode = '{"user" : "Moamen", "age":22}';

// console.log(jsonCode); //string 

// let jscode = JSON.parse(jsonCode);

// console.log(jscode); //object

// jscode["user"] = "Memo";
// jscode["age"] = "18";

// let jsonCode2 = JSON.stringify(jscode);

// console.log(jsonCode2); // string

/*
  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages
  => نظري برضو
*/

// // Synchronous

// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

// // Asynchronous
// console.log("1");
// console.log("2");
// setTimeout(() => console.log("Operation"), 3000);
// console.log("3");

/*
  To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser
  => انا عمري ما هفهم الستاك
*/  
/*
  To Understand Ajax, Fetch, Promises

  Event Loop + Callback Queue

  Story
  - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
  - Call Stack Track All Calls
  - Every Function Is Done Its Poped Out
  - When You Call Asynchronous Function It Sent To Browser API
  - Asynchronous Function Like Settimeout Start Its Own Thread
  - Browser API Act As A Second Thread
  - API Finish Waiting And Send Back The Function For Processing
  - Browser API Add The Callback To Callback Queue
  - Event Loop Wait For Call Stack To Be Empty
  - Event Loop Get Callback From Callback Queue And Add It To Call Stack
  - Callback Queue Follow FIFO "First In First Out" Rule
  => Asynchronousمغهمتش غير ان السيت تايم اوت 
  =>Asynchronous مبيتنفئش الا لما السنكرونس يتنفذ
*/

// console.log("One");
// setTimeout(() => {
//   console.log("Three");
// }, 0);
// setTimeout(() => {
//   console.log("Four");
// }, 0);
// console.log("Two");

// setTimeout(() => {
//   console.log(myVar);
// }, 0);

// let myVar = 100;
// myVar += 100;

/*
  AJAX
  - Asynchronous JavaScript And XML
  - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
  - It Use "XMLHttpRequest" Object To Interact With The Server
  - You Can Fetch Data Or Send Data Without Page Refresh
  - Examples
  --- Youtube Studio
  --- Google Drive
  --- Upload Article Photo
  --- Form Check Name

  Test new XMLHttpRequest();
  Request And Response
  Status Code
  => الدروس دي كلها نظري ومش فاهم فيها حاجه بس مبسوط لاني بخلص الكورس
*/

// let req = new XMLHttpRequest();
// console.log(req);


/*
  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found

  => XMLHttpRequest() => بعمل ريكويست وصدقني مش فاهم يعني ايه
  => .open("GET"|"POST", "URL", boolean)
  => .send() => بيبعت
  => ready state=> اقرا الي فوق
  => status => 200 يعني تمام  
  404 يعني نوت فاوند
*/

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();
// console.log(myRequest);

// myRequest.onreadystatechange = function () {
//   // console.log(myRequest.readyState);
//   // console.log(myRequest.status);
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(this.responseText);
//   }
// };

/*
  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found
  
  => بصراحة انا كروته بس هو هنا بيشرح ازاي تقدر تتعامل مع الرسكويت وعمل لوب ع الريبوز الليي عنده
  => بص صباح الفل
// */

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();
// console.log(myRequest);

// myRequest.onreadystatechange = function () {
//   // console.log(myRequest.readyState);
//   // console.log(myRequest.status);
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(this.responseText);
//   }
// };
