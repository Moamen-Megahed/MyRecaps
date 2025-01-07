/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
*/


// let theName = "Ahmed";
// console.log(theName[2]); // index 2 -> m 
// console.log(theName.charAt(2)); // ~ 
// console.log(theName.length); // 5 
// let nameTwo = "  Moamen  "
// console.log(nameTwo.trim()); // Moamen -> remove spaces at the beginning and the end
// console.log(theName.toUpperCase()); // simple 


/*
  String Methods
  - indexOf("الكلمه او الحرف الي عايز الانديكس بتاعه"[Mand],  الانديكس اللي هيبدا منه[Option] )
  - lastIndexOf(" نفس الكلام بس بيمشي من الاخر" [Mand], نفس الكلام [Option])
  - slice(Start index [Mand], End index [Option] Not Include End)
  - repeat(Times) [ES6]
  - split(الكلمه الي يقصقص منها [Option],  يطبع كام عنصراو يقصقص كام مره [Option]) output in array
*/

// let a = "Moamen Megahed Ahmed"

// console.log(a.indexOf("me")); // 3 (first me)
// console.log(a.indexOf("me", 20)); // -1 (لو ملقاش الكلمه او الحرف بيرجع -1)
// console.log(a.lastIndexOf("me")); // 17 (last me)
// console.log(a.lastIndexOf("me",10 )); // 3 (مشي من الاخر 10 انديكس فجاب اول واحده)
// console.log(a.slice(3, 6)); // men 
// console.log(a.slice(-5, -1)); // Ahme
// console.log(a.repeat(5)); // a 5 times 
// console.log(a.split(" ", 2)); // ["Moamen", "Megahed"]




/*
  String Methods
  - substring()
   -> بس مبتاخدش قيمه سالبه slice() زي ال 

  - substr(Start index [Mand], Num of Characters) 
  -> اقطع عدد حروف كذا من بعد الانديكس كذا

  - includes("Word or letter" [Mand], Start index [Option] Default 0)
  -> من عند الانديكس كذا هل بيجتوي على كذا

  - startsWith("Word or letter" [Mand], Start index [Option] Default 0) 
 -> من عند الانديكس كذا هل بيبدا بحرف او بجمله كذا

  - endsWith("Word or letter"[Mand], Length [Option] Default Full Length)
-> ابدا من عدد الحروف كذا هل بتنتهي بكذا

ال3 دول بيرجعوا true or false
*/

// let b = "Moamen Megahed Ahmed"

// console.log(b.substring(3, 5)); //me
// console.log(b.substr(0, 6)); //moamen
// console.log(b.includes("oamen", 1)); // true
// console.log(b.startsWith("Mega", 7)); // true
// console.log(b.endsWith("gahed", 14)); // true
