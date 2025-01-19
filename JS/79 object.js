/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
  => prop,methods هو عباره عن حاجتين 
  => method => function 
*/

// let person = {
//   //properties
//   theName: "Moamen",
//   theAge: 21,
//   //method
//   sayHello:function(){
//     return `Hello`
//   }
// }


/*
  Object
  - Dot Notation vs Bracket Notation => . vs []
  => اسم البروبيرتي اي  سترينج فلدنيا
  => لو عايز تاكسس بلدوت يبقا لازم اسم البروبيرتي يخضع لشروط تسميه الفايربل
  => ""لو اسم البروبيرتي كان مش خاضع للشروط تقدر توصله عن طريق البراكيت => ولازم جوا البراكيت تحط 

  - Dynamic Property Name
  => لو اسم البروبيرتي كان قيمة فاريبل خارج الاوبجكت متقدرش توصله بلدوت بس تقدر بلبراكيت
  => ""وساعتها مش هتحط 
*/


// let myVar = "age";
// let person ={
//   theName:"Moamen",
//   age : 21,
//   gender: "male",
//   "the country": "egypt"
// }

// person["the country"]






// console.log(person["1the Country"])
// console.log(person["age"])
// console.log(person[myVar])


/*
  Object
  - Nested Object And Trainings

  - Object.keys(obj-name) => get the keys in array
*/

// let person = {
//   theName:"Moamen",
//   theAge:21,
//   skills:["HTML","CSS","JS"],
//   available:false,
//   adresses:{
//     ksa:"Riadh", 
//     egypt:{
//       one:"Tanta",
//       two:"Arish"
//     }
//   },
//   checkAv:function(){
//     if(person.available===true){
//       return `Free`
//     }else{
//       return `Not Free`
//     }
//   }
// }

// person.theName = "yousef"
// console.log(person.adresses.egypt.one)
// console.log(person.checkAv())


/*
  Object
  - Create With New Keyword => new Object();
  => انت عندك اوبشن فلطريقتين انك تابديت او تنشا بروبيرترز وميثودز ,بص تحت كدا
*/

// let person = new Object({
//   theName:"Moamen",
//   theAge:21,
//   theCountry:"Egypt"
// });
// console.log(person)


//  let user = {};
//  user.theName = "Moamen";
//  user.sayHello = function(){
//   return`Hello`;
//  }
//  console.log(user)
//  console.log(user.sayHello())


// let user = new Object({
//   theName:"Moamen"
// });
// console.log(user)
// user.theName = "Ahmed";
// console.log(user)


/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context
=>في الميثود الي فلاوبجيكت عايده ع ال اوبجكتthisهو عايز يقولك ان 
  Search
  - Strict Mode
*/


let user = {
  theName : "Moamen",
  age:21,
  calcAge:function(){
    return user.age * 365;
  }
}
console.log(user.calcAge())




/*
  Object
  - Create Object With Create Method => object.create(النموذج)
  => thisدرس بيعرفك استخدام ل 
  => الطريقه دي لو عندك اوبجكت كبير وعايز تعمل نسخه منه وتغير فيه حاجه 
*/


// let user = {
//   age:21,
//   dobleAge:function(){
//     return this.age * 2;
//   }
// }
// console.log(user.dobleAge());


// let newObj = Object.create(user);
// newObj.age = 30;
// console.log(newObj.dobleAge())
// console.log(newObj)


/*
  Object
  - Create Object With Assign Method => object.assign(target, obj1,2,...)
  => وبتضيف عليه باقي البروبيرتز والميثود الي فلاوبجكتات التانيهtargetدي بتكريت نسخه من ال
  => ولو لقى اسم البروبيرتي متكرر بياخد قيمه اول واحده تقابله فلكود
*/

// let nameObj = {
//   theName:"Moamen",
//   sayHello:function(){
//     return`Hello`;
//   }
// }
// let ageObj = {
//   theAge:21,
//   sayOk:function(){
//     return`ok`;
//   }
// }
// let targetObj = {
//   theCountry:"Egypt",
//   theAdress:"El-msaid",
// }

// let finalObj = Object.assign(targetObj, nameObj, ageObj)
// console.log(finalObj)