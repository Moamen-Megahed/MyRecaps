/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

// let myFriends = ["Ahmed","Mohamed","Ali","Osama"]

// let [a, ,c,d,e] = myFriends

// console.log(c); // Ali
// console.log(e); // undefined


/*
  Destructuring
  - Destructuring Array Advanced Examples
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// let [, , , [a, , [, b]]] = myFriends

// console.log(a); // Shady
// console.log(b); // Gamal


/*
  Destructuring
  - Destructuring Array => Swapping Variables
  1- Stach => ولازم بلترتيب اللي تحت دا
  2- Destructure
*/

// let book = "video";
// let video = "book";

//1

// let stach = book 
// book = video;
// video = stach;

// console.log(book);
// console.log(video);
// console.log(stach);

//2

// [book,video] = [video,book]

// console.log(book);
// console.log(video);


/*
  Destructuring
  - Destructuring Object
  => لازم يبقا اسم الفاريبل هو اسم البروبيرتي
  => : او تيجي بعد في الديستركشرينج بعد اسم البوبيرتي تحط => let {theName:n,theAge:a} = user
  => وساعتها مش هحتاج اسيب خانات فاضيه زي الاراي
*/

// let user = {
//   theName:"Moamen",
//   theAge: 21,
//   theTitle:"Tez",
//   theCountry:"Egypt",
// };

// let {theName,theAge,theCountry} = user;
// console.log(theCountry);

/*
  Destructuring
  - Destructuring Object

  --- Naming The Variables => let {theName:n,theAge:a} = user;
    => : زي مقولت فوق لو عايز تغير اسم الفاريبل وميبقاش نفس اسم البروبيرتي حط

  --- Add New Property => let {theName,theAge,theColor = "red"}
    => لو البروبيرتي موجوده هيخزن فلفاريبل قيمتها الاصليه لو مش موجوده هيخزن القيمه الافتراضيه الي حاططها

  --- Nested Object => بص ازاي
  => let obj1={
    prob:aa
    prob:aa
    prob:aa
    obj2:{
      prob:aa
      prob:aa
    }
  }
  =>let {prob,prob,....,obj2:{prob,prob}}

  --- Destructuring The Nested Object Only
*/

// let user = {
//   theName:"Moamen",
//   theAge: 21,
//   theTitle:"Tez",
//   theCountry:"Egypt",
//   theColor:"blue",
//   skills:{
//     html : 80,
//     css: 90,
//   }
// };

// let {theName:n,theAge,theCountry,theColor: c = "Blue",skills:{html,css}}= user;
// console.log(n);
// console.log(c);
// console.log(html);
// let {html:skillOne,css:skillTwo} = user.skills;
// console.log(skillOne);

/*
  Destructuring
  - Destructuring Function Parameters
  => انك ممكن تعمل عملية الديستركشن جوا البراكيت بتاعتة البراميترز للفانكشن
  => سواء الديستركشنج ع الاراي او الاوبجكت
*/

// let user = {
//   theName:"Moamen",
//   theAge : 22,
//   theCountry : "Egypt",
//   address : {
//     cairo : "Giza",
//     tanta: "Sabbon"
//   }
// }

// // العاديه
// function showObj(obj){
//   console.log(`Your name is ${obj.theName}`); //Moamen
//   console.log(`Your address is ${obj.address.cairo}`); // Giza
// }

// //الديستركشن
// function showObj({theName:un,address:{cairo:c}} = user){
//   console.log(`You name is ${un}`); // Moamen
//   console.log(`You address is ${c}`); // Giza
// }

// showObj(user);




/*
  Destructuring
  - Destructuring Mixed Content
*/

