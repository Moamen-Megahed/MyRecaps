/*
  What Is OOP ?

  OOP Stand For => Object Oriented Programming
  OOP Is A Paradigm or Style Of Code
  OOP Use The Concept Of Object To Design A Computer Program
  Its Not New => Simula Is The First OOP Programming Language At 1960
  Some Languages Support OOP and Some Not
  Object Is A Package Contains Properties and Functions That Work Together
  To Produce Something in Your Application. Functions Here Called Methods

  Why We Use OOP ?

  You Will be Able to Create a Large and Complex Software Architecture in Organized Ways.
  You Will be Able To Hide Certain Parts Of Code in Your Object With Encapsulation To Prevent Mess With The Code.
  You Will Be Able To Create Reusable Objects To Use in Your Application Easily With Inheritance.
*/

/*
  Constructor Function
  => اللي فاهمته الكونسركتر او الكلاس بيجمع اوبجتكات مع بعضها كدا عشان يبقو تبع بعض ولما يحصل تغيير عليهم يبقا سهل
  => قال النظري مهم اكتر من العملي وانا مفهتمش النظري اوي بس فهمت العملي بص
  => هو هنا بدل مايروح لكل واحد ويزوده 1000 عمل الكونستركتور الفنكشن
  => اللي هي فنكشكن عاديه اوي بس اول حرف من اسمها كابيتال وبتدخلها البروبريتيز بتاعت الاوبجكتس 
  => والاوبجكت الخاضع للكونستركتور دي بيتعل كدا .. بص تحت
  => بس غالبا انا هستخدم السينتاكس بتاع الكلاس
*/

// function User(id,username,salary){
//   this.i = id;
//   this.u = username;                        // ذيس هنا عايده ع الاوبجكت الي هيتكريت
//   this.s = salary+1000;
// }

// let userOne = new User(100,"Moamen",5000)
// let userTwo = new User(101,"Ahmed",6000)
// let userThree = new User(102,"Sayed",7000)

// console.log(userOne.s);
// console.log(userThree.s);
// console.log(userTwo.s);

/*
  Constructor Function
  - New Syntax
  => متكلمش كتير هو بس عرفني طريقه جديده لككونستركتور فانكشن وهي الكلاس
  => فاكر الكلاس بتاع الدسوقي هو دا\
  => عرفني كام حاجه بترجع ترو او فالس هكتلهم تحت
*/

// class User{
//   constructor(id,username,salary){
//   this.i = id;
//   this.u = username;                        // ذيس هنا عايده ع الاوبجكت الي هيتكريت
//   this.s = salary+2000;
//   }
// }
//   let userOne = new User(100,"Moamen",5000)
//   let userTwo = new User(101,"Ahmed",6000)
//   let userThree = new User(102,"Sayed",7000)
//   console.log(userOne.s);
//   console.log(userThree.s);
//   console.log(userTwo.s);

//   console.log(userOne instanceof User); // is userOne instance of class User => true
//   console.log(userOne.constructor === User); // true

/*
  Constructor Function
  - Deal With Properties And Methods  
  => بص الي بيتكتب ف الكونتسركتور دول بروبيرتز واللي برا الكونستكرتو دول الميثودز
*/

// class User{
//   constructor(id,username,salary){
//     //properties
//   this.i = id;
//   this.u = username || "UNKNOWN" ;                         
//   this.s = salary < 6000 ? salary += 500 : salary; // بتعامل عادي وكونديشنات ودنيا
//   this.msg = function(){
//     return `Hello ${this.u}, your salary is ${this.s}`
//   }
//   }
//   //methods
//   theMsg(){
//     return `Hello ${this.u}, your salary is ${this.s}`
//   }
// }
//   let userOne = new User(100,"Moamen",5000)
//   let userTwo = new User(101,"Ahmed",6000)
//   let userThree = new User(102,"",7000)

//   console.log(userOne.s);
//   console.log(userThree.u);
//   console.log(userOne.msg()); // نفس الرساله فدي واللي تحتها بس دي بروب ةالتانيه ميثود
//   console.log(userOne.theMsg()); 
  

/*
  Constructor Function
  - Update Properties =>   مش محتاجه فقاقه يعني
  - Built In Constructors => مفهمتش اوي برضو بص تحت
*/

// class User{
//   constructor(id,username,salary){
//     //properties
//   this.i = id;
//   this.u = username || "UNKNOWN" ;                         
//   this.s = salary; 
//   }
//   //methods
//   updateName(newName){
//     this.u = newName;
//   }
// }
//   let userOne = new User(100,"Moamen",5000)
//   let userTwo = new User(101,"Ahmed",6000)
//   let userThree = new User(102,"",7000)

//   console.log(userOne.u );
//   userOne.updateName("7amada");
//   console.log(userOne.u );

//   let strOne = "sssss"; // string
//   let strTwo = new String("sssss"); // bulit in constructor => object

//   console.log(strOne instanceof String); //false => not instanse of class string
//   console.log(strTwo instanceof String); //true
//   console.log(strOne.constructor === String); //true => bulit in constructor
//   console.log(strTwo.constructor === String); //true

/*
  Class
  - Static Properties And Methods => بروبز وميثودز خاصه بلكلاس نفسه وميقدرش يوصلها للاوبجكت 
*/

// class User{
//   static count = 0; // => static prop
//   constructor(username,salary){
//     this.us = username;
//     this.salary = salary;
//     User.count++; // => معناها كل ما تكريت اوبجكت عدد الكاونت يزيد 1
//   }
//   static counter(){
//     return `We have ${User.count} Members`          // => static method
//   }
// }

// let user1 = new User("Moamen",10000)
// let user2 = new User("Sayed",7000)
// let user3 = new User("Kamel",4000)

// console.log(User.count); //3
// console.log(User.counter());// 3 members


/*  
  Class
  - Inheritance => التوريث
*/

// class User{
//   constructor(username,salary){
//     this.us = username;
//     this.salary = salary;
//   }
//   sayHello(){
//     return `Hello ya ${this.us}`
//   }
// }
// //بص بقا بتورث كدا "extends parent","super" 
// //=> الميثودز كدا كدا بتتورث 
// //=> بتكتب البراميترز بتاعت الكونستركتر
// //=> اللي بتكتب ففنكشن السوبر دي البروبريتز اللي عايزها تتورث وبتكتبها زي مانت كاتبها ف الكونستركتور الاب
// //=> ووممكن تزود بقا عادي

// class Admin extends User{
//   constructor(username,salary,permission){
//     super(username,salary);
//     this.p = permission;
//   }
// }

// let admin1 = new Admin("Moamen",20000,1)
// console.log(admin1);

/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.

  => اللي فهمته ان العمليه دي بتحمي البيانات 
  => مثلا رقم الفيزا هاخده من اليوز بس مش هعرضه كله هعرض بس اخر 4 ارقام
  => فانا هقدر اوصل لرقم الفيزا كله جوا الكلاس 
  => وجوا الكلاس بقا هتحكم ف الرقم اخفي منه ايه واظهر ايه 
  => لكن الاوبجكت ميقدرش يوصل للرقم علطول
*/

// class User{
//   //private prop
//   #v;
//   constructor(username,salary,visaNumber){
//     this.us = username;
//     this.salary = salary;
//     this.#v = visaNumber;
//   }
//   encryptNum(){
//     let w = this.#v
//     return "####-####-"+w[10]+w[11]+w[12]+w[13]
//   }
// }

// let user1 = new User("Moamen",10000,"1235-7895-5214")
// let user2 = new User("Sayed",5000,"6584-3258-4841")

// console.log(user1.encryptNum()); //last 4 nums
// console.log(user2.encryptNum()); //last 4 nums


/*
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
    => هو كاتب ان ليها علاقة بلتوريث بس مشرحش حاجه
    => كل كلاس بتنشاه بيتكريتله بروتوتايب فيه الفيتشرز الخاصه بيه
    => البروتوتايب دي الفيتشرز او الميثودز بتاعت اي حاجه بص تحت كدا
    => obj.prototype
*/

// class User{
//   constructor(id,username,salary){
//   this.i = id;
//   this.u = username;                         
//   this.s = salary; 
//   }
//   updateName(newName){
//     this.u = newName;
//   }
// }

// console.log(User.prototype);
// console.log(String.prototype);


/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
  => بيتكلم ازاي اضيف ميثود او بروب لاي حاجه 
  => وبيتكلم عن التوريث عن طريق البروتوتايب بص تحت هتفهم

  => عجبتني فشخ يعني انا ممكن اضيف ميثود بفنكشن معينه خاصه بيا انا على كل السترنيجات اللي موجود مثلا
  او الارقام اي حاجه بقا
*/

// class User{
//   constructor(username,salary){
//   this.u = username;                         
//   this.s = salary; 
//   }
//   updateName(newName){
//     this.u = newName;
//   }
// }

//   let user1 = new User("Moamen",10000)

//   let normObj ={
//     i : 102,
//     us : "Moamen",
//   }

//   User.prototype.sayWelcome = function(){    // ضفت الميثود دي لكلاس يوزر بالتالي اي اوبجكت هعمله كلاسه يوزر هيورثها
//     return `Welcome`
//   }

//   Object.prototype.love = function(){       // هنا ضفت الميثود لكل الاوبجكتات فكل الاوبجكتات هتورثها بما فيهم اللي معمولين بكلاس يوزر
//     return `Love`       
//   }

// console.log(user1);
// console.log(normObj);

// console.log(user1.sayWelcome());
// // console.log(normObj.sayWelcome()); //error

// console.log(user1.love());
// console.log(normObj.love());

// String.prototype.addDots = function(val){
//   return `.${val}.`
// }

// console.log(String.prototype); // هتلاقي الفنكشن الي عملتها جوا


/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
  => Object.defineProperty(obj,"key",{

  })
  => التحكم الكامل ف البروبريتي للاوبجكت

  => لو مكتبتش الديسكريبتور هيعمل كله فالس
*/

// let obj1 = {
//   a:1,
//   b:2,
// }

// Object.defineProperty(obj1,"c",{
//   // writable: true, // قابليه التعديل عليه
//   enumerable:true, // قابليه عمل لووب عليه
//   configurable:false, // فابليه حذف او اعادة تعريفه 
//   value:3
// })


// obj1.c = 100;

// console.log(obj1);
// console.log(delete obj1.c); //false


/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
  => اكتر من واحده
*/

// let obj1 = {
//   a:1,
//   b:2,
// }

// Object.defineProperties(obj1,{
//   c:{
//     configurable:true,
//     value:3  
//   },
//   d:{
//     configurable:true,
//     value:3

//   },
//   f:{
//     configurable:true,
//     value:3
//   }
// })

// console.log(Object.getOwnPropertyDescriptor(obj1,"d"));
// console.log(Object.getOwnPropertyDescriptors(obj1));