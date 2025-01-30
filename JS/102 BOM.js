/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
  => مقالش اي حاجه كله نظري
*/

/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response so need a var And Return A Boolean (Ok, Cancel)
  - prompt(Message, Default Message) => Collect Data
  => هو قال اني مش هستخدمهم
*/

// alert("Are You Ready?")
// console.log("Mo salah");

// let confirmMsg = confirm("Are You Ready Or Hatcancel??")
// if(confirmMsg === true){
//     console.log("Ready")
// }else
// console.log("canncelt leh");

// let promptMsg = prompt("Are You Ready Or not?", "Type Yes Or No")
// console.log(promptMsg);

/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params) => ان فنكشن معينه تحصل مره واحده بعد كذا ثانيه
  => let counter = setTimeout(func,time in ms, "params") =>clear الكاونت دا بنعمله عشان لو هنعمل 

  - clearTimeout(Identifier) => بتوقف الفنكشن دي
  => clearTimeout(counter)
*/

// let btn = document.querySelector("button")

// function sayMsg(user, age){
//     console.log(`Hello ya ${user} Your Age is ${age}`);
// }
// let counter = setTimeout(sayMsg,3000,"Momen","21");

// btn.onclick = function(){
//     clearTimeout(counter)
// }

/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  => هي زي اللي فوقها بلظبط بس دي بتفضل تنفذ الفانكشن لحد ما بتوقفها بلكلير
  - clearInterval(Identifier)
*/
// وهنا ضربلي مثال ان الوقوف مش دايما بزرار ممكن اوقف بكونديشن معين عادي

// let myDiv = document.querySelector("div")

// function countDown(){
//     myDiv.innerHTML -= 1;
//     if(myDiv.innerHTML == 0){
//        clearInterval(counter)
//     }
// }

// let counter = setInterval(countDown, 1000)

/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host => https://google.com => host, hostname is (google.com)
  --- hash => id يعني 
  --- protocol => http,https
  --- reload()
  --- replace("url") => بتبدل وتشيل من الhistory
  --- assign("url") => بتبدل بس مش بتشيل من الhiistory
*/

// console.log(location.hostname);
// console.log(location.host);
// location.href="https://google.com"
// console.log(location);

/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  => window.open("","","") - window.close()
  => عشان تعمل كلوز لازم تكون مستخدم الاوبن
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]
    => قال انها للعلم بلشلى
  Search
  - Window.Open Window Features
*/
// open("https://www.google.com","_blank","width=500px,height=500px")

/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  => متكلمش كتير مجرد معرفه بس
  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

// console.log(history);

/*
  BOM [Browser Object Model]
  - stop() => لما تكون الصفحه لسه بتحمل وتقوم موقفها
  - print() => لما تعمل برينت
  => مش هستخدمهم

  - focus() => window.focus =>  open() دي برضو زي الكلوز كدا معرفش اعملها غير للويندو الي مستخدم فيها 

  - scrollTo(x, y || Options) => تسكرول لحته معينه فلصفحه
   => 1- window.scrollTo(x, y)
   => 2- window.scrollTo({
    left:---
    ,top:---
    ,behavior:"smooth"
   })

  - scrollBy(x, y || Options) => في السينتاكس toتسكرول بمقدار كذا وهي زي ال
*/


/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset] => value
  - scrollY [Alias => PageYOffset] => value
  => window.onscroll خد بالك بنستخدم الايفنت 
*/

// let btn = document.querySelector("button")
// window.onscroll = function(){
//     if(window.scrollY >= 2000){
//       btn.style.display = "block"
//     }else{
//       btn.style.display = "none"
//     }
// }

// btn.onclick = function(){
//   window.scrollTo({
//     left:0,
//     top:20,
//     behavior:"smooth"
//   })
// }

/*
  BOM [Browser Object Model]
  Local Storage => اللي هو الموقع يتغير معايا
  => حاجه كدا زي السبوتيفاي مثلا لو انا دخلت عليه هيعرضلي اغاني معينه ولو اسلام فتحه بيعرضله حاجه تانيه 
  => هو قال انه مهم اوي وهفهم اكتر مع التطبيقات

  - setItem("key","value")
  - getItem("key")
  - removeItem("key")
  - clear()
  - key(index)

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// //setItem
// window.localStorage.setItem("color","red")
// window.localStorage.color = "red";
// window.localStorage["font color"] = "white";
// console.log(window.localStorage);

// //getItem
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["font color"]);

// // removeItem() => remove one item
// window.localStorage.removeItem("color")

// // key(index)
// console.log(window.localStorage.key(1));

// // clear() => remove All
// window.localStorage.clear()


/*
  BOM [Browser Object Model]
  Local Storage Practice
*/


// let myDiv = document.querySelector("div")
// let allLis = document.querySelectorAll("ul li")

// if (window.localStorage.getItem("color")) {
//   // If There Is Color In Local Storage
//   // [1] Add Color To Div
//   myDiv.style.backgroundColor = window.localStorage.getItem("color");
//   // [2] Remove Active Class From All Lis
//   allLis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   // [3] Add Active Class To Current Color
//   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }

// allLis.forEach((li)=>{
//   li.addEventListener("click", function(e){
//     allLis.forEach((li)=>{
//       li.classList.remove("active")
//     })
//     this.classList.add("active")
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     myDiv.style.background = e.currentTarget.dataset.color
//   })
// })


/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  => ه بينها وبين اللوكال ان دي لما بتعمل ريفريش الداتا الي مخزنها بتروح
  => هتعلم كل حاجه والله بس بلهداوة عشان عايز انام
  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

