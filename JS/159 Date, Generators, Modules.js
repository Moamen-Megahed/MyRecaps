/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now() = new Date()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
=> بيقولك الوقت فلبرمجه بادي من 1/1/1970 
=> 1000 milli = 1 second
=> Date.now() => Show time in milli seconds from 1970 till now
=> عمل تجربه فضل يقسم لحد مايجيب السنين وانا مش هعملها
*/

  // let newDate = new Date();             // the date litterally and bel milliseconds 3la 7aseb
  // console.log(newDate);
  // console.log(Date.now());
  
  // let zero = newDate - Date.now(); 
  // console.log(zero);

/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

// // Knowing my Age :)
// let birthday = new Date("jul 8, 01")

// let myAge = (Date.now()-birthday)/1000/60/60/24/365
// let dateNow = new Date()
// console.log(myAge);
// // the lesson
// console.log(birthday.getTime()); // the time in milliseconds from 1970
// console.log(birthday.getDate()); // day of the month 7
// console.log(birthday.getFullYear()); // 2001
// console.log(birthday.getMonth()); // what month but from 0 index make it 6 not 7
// console.log(birthday.getDay());  // day of the week starting from sat 0 
// console.log(dateNow.getHours());
// console.log(dateNow.getMinutes());
// console.log(dateNow.getSeconds());
// console.log(dateNow.getMilliseconds());

/*
  Date And Time
  - setTime(Milliseconds) => الوقت من 1970 => setTime(0) => 1/1/1970
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
  
  => قيه قاعده ماشيه على كله ان لو حطيت موجب عن الشهر او اليوم او اي حاجه بيخش ع الشهر اللي بعده
  او اليوم الي بعده وهكذا بالسالب هيرجع ع الشهر اللي قبله او اليوم وهكذا على الساعات والدقايق والثواني
*/

  // let date = new Date();

  // date.setHours(24)
  // console.log(date);

  // // مش هضيع وقت فلحوار دا


/*
  Date And Time

//درس عبيط مش هطبق عليه برضو
  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0 => indexes in months
  - 1982, 9, 25           => ~
  - "1982-10-25T06:10:00Z" => T => space Z=> هيزود او هينقص على حسب مكانك من جرينتش => law 4elt Z hegeb elwa2t elly edrtholoh

  Date.parse("String") // Read Date From A String => بتحول الكلام للميلي سيكوند من 1970
*/


// let date = new Date("2001-7-8");
// console.log(date);


/*
  Date And Time
  - Track Operations Time => ازاي تتبع عمليه معينه وتعرف الوقت بتاعها


  Search
  - performance.now() => دول بيعملوا الحركه دي قال ابحث عنهم بس انا مكسل 
  - performance.mark()
*/

// // start time
//   let start = new Date()

// //operation
// for(let i = 0;i<1000;i++){
//   // document.write(`<div>${i}</div>`)  // opearation one
//   let div = document.createElement("div")
//   div.appendChild(document.createTextNode(i))
//   document.body.appendChild(div);        // operation 2     // better
// }

// // end time
// let end = new Date()

// //duration

// let duration = end - start;
// console.log(duration);

/*
  Generators
  => ضرب مثال لما يكون في الصفحه زرار بتتكت عليه يعرضلك بيانات اكتر فكدا الغنكشن بتشتغل لما تحتاجها
  - Generator Function* Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable

  => مفهمتش اوي
  => دلوقتي البتاع دا بتستخدمه لما بتكون فيه فنكشن معينه هتحصل لما تحتاجها
  => "yeilds"بيبقا جوا الفنكشن دي  
  => كل ييلد متوقف ع اللي بعده
  => مفهمتش اوي صراحة
  */

  // function* generateNumbers(){
  //   yield 1;
  //   console.log("Hello after yield 1");
  //   yield 2;
  //   yield 3;
  //   yield 4;
  // }

  // let generator = generateNumbers();

  // console.log(typeof generator); // object
  // console.log(generator); // generator with his prototype

  // // console.log(generator.next()); // value:1
  // // console.log(generator.next()); //مطبعش اللي فلكوسنول الا لما حطيت دي value:2
  // // console.log(generator.next()); //3 
  // // console.log(generator.next()); //4
  // // console.log(generator.next()); // value:undefined done:true

  // for(let value of generateNumbers()){ // اعلمل لوب على كل الفاليوس الي هنا 
  //   console.log(value);                // هيطبع الفاليوس عادي لانك بتطلع ع الفنكشن وتنفذها تاني
  // }

  // for(let value of generator){ // اعلمل لوب على كل الفاليوس الي هنا 
  //   console.log(value);                //مش هيطبع الفاليوس لانه تم جينيرات الفاليوس دي فوق قبل كدا فالكونسول
  // }


/*
  Generators
  - Delegate Generator => جينيتور فنكشن تنوب عن جينيتور فنكشن تانيه ف ان هي تعمل ييلد للبيانات
  => المكشله اني مش فاهم الدرس الاول
*/

// function* generateNums(){
//   yield 1;
//   yield 2;
//   yield 3;
// }

// function* generateLetters(){
//   yield "A";
//   yield "B";
//   yield "C";
// }

// function* generateAll(){
//   yield* generateNums();
//   yield* generateLetters();             // * => to make it yield and get data in them
//   yield* ["Mo","Ma","Me"];
// }

// let generator = generateAll();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.return("Stop Yeildin")); // make is stop yeildin
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());


/*
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators // والله ما فاهم ام الدرس
*/

// function* generateNums(){
//   // yield 1;
//   // yield 2;
//   // return "Stop yeldin"; // stop yeldin
//   // yield 3;
//   // yield 4;
//   for(let i = 0;true;){  // yeldin infinite 
//     yield i++
//   }
// }

// let generator = generateNums();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());


/*
  Modules
  - Import And Export
  => افتح الفيديو وافتح الاكواد من موقع الزيرو 
  => الموديول حاجه بتعمل فنكشنات كتير مثلا وانت فمشروعك عايز تستدعي فنكشن من الموديول
  فبتروح عاملها امبورت زي كدا


  module.js in vs code

  export function saySomething(){
    return `Something`
  };
  export a = 10;

  export {saySomething, a} => ممكن تعملهم فوق من غير اكسبورت وتجمعهم زي كدا

  ##############################################

  myApp.js in vs code

  import {saySomething as s, a} from "المسار";

  ########################################################
  
  =>خد بالك مش بنحط قوسين الفنكشن
  =>ف المبورت والكسبورتasممكن تحط 
  => named exportدول كلهم اسمهم 

*/

/*
  Modules
  - Export Alias
  - Named Export
  - Default Export
  - Import All

  =>default export لكل موديول فيه 
  مش شرط يكون ليه اسم وحتى لو ليه اسم ممكن لما تيجي تامبورته تسميه باي اسم 
  
  module.js in vs code

  export default fuction NotimpotantWithNameOrWithout(){} or ay 7aga 3ayzha tb2a default llmodule

##############################################################################################

  myApp.js in vs code

  impotrt theNameYouWant, {named export} from "elmsar"

  #####################################################################################
  
  => الديفولت مبتتحطش مع الناميد بتتحط زي فوق كدا
  
  => لو عايز تامبورت كل حاجه ف الموديول بتعمل كدا فصفحة الابلكيشن

  import * as nameYouChoose from "المسار"

  وبتستدعيهم زي كدا

  مثلا console.log(nameYouChoose.theFuction)
  
*/




