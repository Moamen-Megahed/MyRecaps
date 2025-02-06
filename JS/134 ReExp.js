/*
  Regular Expression
  - Email
  - IP
  - Phone
  - URL
  => في بعض الحالات زي الي فوق دي بيقا فيه باتيرن معين متوقع منك ,هتستخدم فيه الريجولر ايسكبرشن
  => لان الموضوع هيبقا صعب جدا لو بالكونديشنز العاديه
*/

// let str1 = '10 20 100 1000 5000';
// let str2 = 'Os1 Os12 Os123 Os123Os Os12312Os123';

// let invalidEmail = 'Osama@@@gmail....com';
// let validEmail = 'o@nn.sa';

// let ip = '192.168.2.1'; // IPv4

// let url = 'elzero.org';
// let url = 'elzero.org/';
// let url = 'http://elzero.org/';
// let url = 'http://www.elzero.org/';
// let url = 'https://.elzero.org/';
// let url = 'https://www.elzero.org/';
// let url = 'https://www.elzero.org/?facebookid=asdasdasd';

/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")
  => السينتاكس دا مش هستخدمه ولكن من باب العلم بلشى

  Modifiers => Flags
  i => case-insensitive => مفيش فرق بين الكابيتال والسمول هيجيب الاقرب
  g => global => فيه فرق بين الكاب والسمول فهيرجعا بلظبط
  m => Multilines => هيشرحه ف الي جاي

  => /pat/ => هيرجع اقرب بات بلظبط, /pat/i => هيرجع البات بغض النظر عن الحروف, /pat/g =>  هيرجع كل الي زي البات بلظبط, /pat/ig =>  هيرجع كل النتايج

  Search Methods
  - match(Pattern) => string.match((pattern)اللي هيدور عليه ف السترينج) => /pattern/ 
  => بيرجع ارراي

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.

    => السينتاكس الي هنسخدمه
    =>هنعرف الريجلير ايكسبريشن ونحط الموديفاير جمبها=> let regEx = /pat/i OR g OR m OR mix
    => بعدين هنستخد الماتش 
*/

// let myStr = "Hello Ya a5oya Ana Ba7b A5oya"

// let regEx = /a5oya/g

// console.log(myStr.match(regEx));

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y 
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

// */

// let tld = "com info org io net code"
// let tldregEx = /(com|net)/ig
// console.log(tld.match(tldregEx)); // // [com,net]

// let specialCh = "1@2#3$4%5^6&7*8/]910"
// specialChRegEx = /[^0-9]/ig
// console.log(specialCh.match(specialChRegEx));

// let practice = "Me2 me3 Me4Me Me5m Me90Me"
// practiceRegEx = /Me[1-5]Me/g
// console.log(practice.match(practiceRegEx)); //Me4Me



/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]


  =>  لما تحب تقول "و" حطها جمبها زي كدا => [a-zA-Z0-9^%$] => رجعلي الحروف والارقام وال3سبسشيالات دول بس
*/

// let myString = "AaBbc2defG123!^234%&*";

// let capsAndSmall = /[a-zA-Z]/g; //[cap,small]
// let specialCh = /[^A-Za-z0-9]/g; //spwcial
// let z = /[a-z][0-9]/g; //c2
// let w = /[^abA123]/g; //ALL except those

// console.log(myString.match(specialCh));


/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators. => كله
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore] => كله معدا السبيشيال
  \W => matches Non word characters => السبيشيال بس
  \d => matches digits from 0 to 9. => ارقام بس
  \D => matches non-digit characters. => كله معدا الارقام
  \s => matches whitespace character. => المسافه بس
  \S => matches non whitespace character. => كله معدا المسافه
*/

// let emails = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
// let validEmail = /\w@\w.(com|net)/g
// console.log(email.match(validEmail));


/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
  => بترجع ترو او فالس 
  => بتشوف هل الباتيرن موجود ف الانبوت ولا لا 
*/

  // let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo"; // المفروض aspamo مش معانا

  // let regEx = /\bspam|spam\b/ig

  // console.log(names.match(regEx));

  // console.log(regEx.test(names));


/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one => يا موجوده مره يا مش موجوده
*/

// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru";
// let regEx = /\w+@\w+.\w+/g
// console.log(mails.match(regEx));

// let nums = "0110 10 050 05120 0560 350 00"; // 0...0
// let regEx = /0\d*0/ig;
// console.log(nums.match(regEx));

// let urls = "https://google.com http://www.website.net web.com"; // http + https
// let regEx = /(https?:\/\/(www.)?)?\w+.\w+/ig
// console.log(urls.match(regEx));

/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

// let serials = "S100S S3000S S50000S S950000S";

// console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
// console.log(serials.match(/s\d{4,5}s/ig));// S[Four Or Five Number]S
// console.log(serials.match(/s\d{4,}s/ig))// S[At Least Four]S
// console.log(serials.match(/s\d{3,5}s/ig))// S[3,4,5]S

/*
  Regular Expression

  Quantifiers
  $  => End With Something => /thing$/
  ^  => Start With Something => /^thing/
  ?= => Followed By Something => مش فاهم لازمتها منا ممكن ازود الحرف وخلاص
  ?! => Not Followed By Something => دي اللي ليها لازمه
*/

// let myString = "We Love Programming";
// let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// console.log((/ing$/ig).test(myString));
// console.log((/lz$/ig).test(names));

// console.log(names.match(/\d\w{5}z/ig)); // => (?=)
// console.log(names.match(/\d\w{8}(?!z)/ig)); // => (?!) => 3Mohammed

/*
  Regular Expression

  - replace
  - replaceAll

  => الاتنين دول بنسختخدمهم مع الاسترينج عادي 
  =>  بس خو بيقول ان الريجلور اكسبريشن عظيم هنا عشان لو فيه باترن معين عايز ابدله
// */

// let str = "We love programming and @ because @ is amazing"

// console.log(str.replace("@","JS")); // هيبدل اول واحده بس
// console.log(str.replaceAll("@","JS")); // هيبدل الاتنين
// console.log(str.replaceAll(/@/ig,"JS")); // هيبدل الاتنين


/*
  Regular Expression
  - Input Form Validation Practice
// */

// document.getElementById("register").onsubmit = function () {
//   let phoneInput = document.getElementById("phone").value;
//   let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
//   let validationResult = phoneRe.test(phoneInput);
//   if (validationResult === false) {
//     return false;
//   }
//   return true;
// }




