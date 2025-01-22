/*
  DOM [Events Simulation] => ايفنتس مش انت الي بتعملها الفانكشن بايدك
  - click
  - focus
  - blur
*/

// كود بيقولك لما اعمل فوكس على الانبوت المعين يكليكي ع اللينك
// let w = document.querySelector("#two")
// w.onfocus = function(){
//    document.links[0].click();
// }

/*
  DOM [Class List]
  - classList => ele.classlist => بيرجع اسماء الكلاسيس بتوعك
  --- length => ele.classlist.lenght
  --- contains => ele.classlist.contains("class-name") => بيرجع ترو وفالس
  --- item(index) => ele.classlist.item(index) =>  بيرجع الكلاس الي ف الاندكس الفلاني

  --- add => ele.classlist.add("class","class2",...) => بيضيف الكلاسات
  --- remove => ele.classlist.remove("class","class2",...) => بيمسح
  --- toggle => ele.classlist.toggle("class") => بيضيف لو مش موجود وبيمسح لو موجود
*/

// let element = document.getElementById("my-div");

// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("osama"));
// console.log(element.classList.contains("show"));
// console.log(element.classList.item("3"));
// element.classList.add("moamen");
// console.log(element);

/*
  DOM [CSS]
  - style => ele.style.prop = "value" => لو الخاصيه مكونه من كلمتين استخدم الكامل كيز [inline]

  - cssText => ele.style.cssText = "cssاكنك بتكتب فل" => wوممكن تكتب اكتر من خاصيه كمان [inline]

  - removeProperty(property) [inline, stylesheet]
  - setProperty(property, value, priority)
  => [inline] => ele.style.removeProperty("prob"), ele.style.setProperty("prob","value",important)

  =>[stylesheet] => document.styleSheets[0].rules[0].style.set,rem
  => مشتغلتش عندي تقؤيبا كروم الي عندي مش بيدعمها
*/




// let myDiv = document.getElementById("div");

// // myDiv.style.color = "blue"
// myDiv.style.fontSize = "30px";

// // myDiv.style.cssText = "color:green; font-size:40px"

// myDiv.style.removeProperty("font-size");
// myDiv.style.setProperty("font-size", "35px","important");
// document.styleSheets[0].cssRules[0].style.removeProperty("color");


/*
  DOM [Deal With Elements]
  - before [Element || String] => ele.before("string"), ele.before(ele)
  - after [Element || String] => ~

  - append [Element || String]
  => ele.append("string") => هيضفيه جوا العنصر من الاخر appendChild زي ال 

  - prepend [Element || String] => ~

  - remove => ele.remove() => بيمسح اعنصر تماما
*/

// let myDiv = document.getElementById("div")
// let newP = document.createElement("p")

// myDiv.prepend(newP)


/*
  DOM [Traversing]
  - nextSibling => ele.nextSibling => الشق الي بعده علطول
  - previousSibling => ele.previousSibling => الشق اللي قبله علطول
  => خد بالك المسطره فالاتنين دول بتفرق
  - nextElementSibling => ele.nextElementSibling => الايليمنت الي بعده
  - previousElementSibling => ~
  - parentElement => ele.parentElement => بمسك بيها اب الايلمينت
*/

// let myDiv = document.getElementById("div")
// let mySpan = document.getElementById("one")

// console.log(one.nextSibling);
// console.log(one.previousSibling);
// console.log(one.previousElementSibling);
// console.log(one.nextElementSibling);
// one.onclick = function(){
//   one.parentElement.remove();
// }


/*
  DOM [Cloning]
  - cloneNode(Deep) => ele.cloneNode() => هينسخ منه نسخه بالاتربيوتز بس من غير العناصر
  => ele.cloneNode(true) => هينسخ منه بالاتربيوتز والعناصر كمان
*/

// let myDiv = document.querySelector("div")
// let myP = document.querySelector("p").cloneNode(true)
// myP.id = "cloned-p"
// myDiv.after(myP)
// console.log(myP)

/*
  DOM [Add Event Listener]
  - addEventListener => ele.addEventListener("event", finction(){})
  - Use Without On
  - Attach Multiple Events
  - Error Test
  => طريقه تانيه عشان نعمل بيها ايفنت على العناصر 
  => دي بقا تبقدر تعمل نفس الايفنت اكتر من مره على العنصر ,الطريقه العاديه متقدرش

  => ولو فيه عنصر مش موجود فلصفحه بس هيظهر لما اعمل ايفنت معين اقدر اعمل ايفنت ع العنصر دا بلطريقه دي
  => document.addEventListener("click", function(ev){
        if(ev.target.className === "aaa"){
            the event
        }
  })
  => انا عملت الحركه بلطريقه العاديه عن طريق اني عملت ايفنت جواه ايفنت بس اشطا 

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

// let myP = document.querySelector("p")


// // function one(){
// // console.log("this frome func one  ")
// // }

// // myP.addEventListener("click", function (){
// //   console.log("this is from add");
// // })
// // myP.addEventListener("click", one)

// myP.onclick = function(){
//   let newP = myP.cloneNode(true)
//   newP.className = "clone"
//   document.body.append(newP)
//   // newP.onclick = function(){
//   //   console.log("I'm cloned");
//   // }
// }
// let cloned = 
// document.addEventListener("click", function(ev){
//   if(ev.target.className === "clone"){
//     console.log("clond")
//   }
// })