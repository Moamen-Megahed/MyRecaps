/*
  - Set Data Type
  Syntax: new Set(Iterable) => let mySet = new Set(arr)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index
  => هو انا مفهمتش الهدف منها اوي بس انا ببعتلهاارراي وهي بتاخد اليونيك بس وتخزنه
  => مبقدرش اوصل للعناصر اللي فيها عن طريق الانديكس

  Properties:
  - size => زي lenght

  Methods:
  - add => .add(عنصر) => وممكن اعمله اكتر من ادد فنفس السطر لكن الديليت لا
  - delete => .delete(العنصر حرفيا مش الاندكس) => ولو طبعت العمليه ف الكونسول هلاقي ترو او فالس ومعناها العنصر موجود ولا لا
  - clear =>.clear()
  - has => .has(العنصر) => زي الانكلودس
*/

// let arr = [1,1,1,2,3,"A"];

// let myUniqueSet = new Set(arr).add(4).add(5)

// myUniqueSet.add(7).add(8); 

// console.log(myUniqueSet.delete(1)); // true ومسح

// console.log(myUniqueSet.has("1")); // false

// console.log(arr);
// console.log(myUniqueSet);
// console.log(myUniqueSet.size);

// myUniqueSet.clear()

// console.log(myUniqueSet);


/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  => مفهمتش حاجه
  --
  Set     => Can Store Any Data Values 
  WeakSet => Collection Of Objects Only 
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries 
  WeakSet => Does Not Have clear, Keys, Values And Entries
  => مفهمتهاش وقال ليها قاعده لوحدها
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/


/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
  ==> مفهمتش هستخمها ف ايه برضو وقال قدام هنعرف وهنعمل + انا بدات ازهق من الراجل دا
*/
// let myObject = {};
// let myEmptyObject = Object.create(null); // no prop
// let myMap = new Map(); // no prop

// console.log(myObject);
// console.log(myEmptyObject);
// console.log(myMap);
// // key can be anything in map, object no

// let myNewObject = {
//   10: "Number", // ملهاش لازمه كدا
//   "10": "String", // = 10:"String"
// };

// console.log(myNewObject[10]); // String because overriding

// let myNewMap = new Map();
// myNewMap.set(10, "Number");
// myNewMap.set("10", "String");
// myNewMap.set(true, "Boolean");                   //شوف اني فاليو ازاي
// myNewMap.set({a: 1, b: 2}, "Object");
// myNewMap.set(function doSomething() {}, "Function");

// console.log(myNewMap.get(10)); // Number
// console.log(myNewMap.get("10")); // String

// console.log("####");

// console.log(myNewObject);
// console.log(myNewMap);

/*
  - Map Data Type
  Methods
  --- set => .set(key,value)
  --- get => .get(key)
  --- delete => .delete(key) => console.log(.delete(key)) => true or false => زي السيت كدا بيتشيك لو موجود ترو يعني
  --- clear => .clear()
  --- has => .has(key)

  Properties
  --- size => .size
*/
// let myMap = new Map([
//     [10,"Number"],["Ahmed","String"],[false,"Boolean"]
// ]);

// // myMap.set(10,"Number")
// // myMap.set("Ahmed","String")

// // myMap.delete("Ahmed")

// // console.log(myMap.has(10));

// // myMap.clear();

// console.log(myMap);
// console.log(myMap.get(10));
// console.log(myMap.get("Ahmed"));
// console.log(myMap.get(false));
// console.log(myMap.size);
/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --==> برضو مفهمتش حاجه
*/

/*
  Array Methods
  - Array.from(Iterable, MapFunc, This) => iterable maybe string,string numbs, set,arguments
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments => arguments كلمه معروفه
*/
// let arr1 = Array.from("OSAMA"); // O S A M A
// let arr2 = Array.from(12345); // no, must be string
// let arr3 = Array.from("12345", (e) => +e + +e) // 2 4 6 8 10 

// console.log(arr3);


// let myArr = [1,2,3,4,5,5,5,6,6] // we need unique 

// console.log(Array.from(new Set(myArr))); // 1 2 3 4 5 6

// //we need arguments of func in array

// function af(){
//     return Array.from(arguments)
// }

// console.log(af("Moamen",12,"kk",false));


/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional) 
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
  => بص انت هتعمل كوبي لبعض من العناصر عندك فالاراي هتعملهم بيست فحته 
  => الحته دي هي التارجيت 
  => بس خد بالك انت بتنقلهم فمكان التارجيت => يعني مش بتزود عدد عناصر الاراي 

  => .copyWithin(target,start[opt],end[opt]) => start,end => يبدا يقص منين => target يبيستهم فين
  =>لو مكتبتش ستارت ولا ايند يبقا معناها من الاول للاخر
*/
// let myArr = [1,2,3,4,5,"A","B","C"]

// //  ["A","B",3,4,5,"A","B","C"]
// // myArr.copyWithin(0,5,7);

// // ["A",2,"C",4,5,"A","B","C"]
// // myArr.copyWithin(0,5,6) 
// // myArr.copyWithin(2,7)

// // [1,2,3,1,2,3,4,5]
// //myArr.copyWithin(3)

// // [1,2,3,4,"A","B","C","C"]
// //myArr.copyWithin(4,5)

// [1,2,3,4,"A","B","C","C"]
// myArr.copyWithin(-4,-3)

// console.log(myArr);

/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  => ذيس بتكون هي القيمه الي بعد الفاصله بس مش هتعرف تستخدمها ف الارو فانكشن لازم فانكشن عاديه
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range

  => let arr = [] => arr.some(function بتريترن شرط,this argu) => الشرط بيتنفذ على كل عناصر الاراي ولو لقى عنصر واحد صح بيرجع ترو
*/


// let nums = [1,2,3,4,5,6,7]

// let num = 4;

// let check = nums.some(function(e){
//     return e > this;
// },num)

// console.log(check);

// function checkValues(arr,val) {
//     return arr.some((e) => e === val)
// }

// console.log(checkValues(nums,4));

// let range = {
//     min:10,
//     max:15,
// }

// let trueOrFalse = nums.some((e) => e > range.min && e < range.max)
// console.log(trueOrFalse); 

/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  => هي زي الي فوقها بلظبط بس دي لازم كل العناصر تحقق الشرط اللي فلفنكشن 
  => الthis ملهاش لازمه بالنسبالي
  => المثال الي تحت عرفني بس ازاي اجيب الكايز من الاوبجكت
*/

// let locations = {
//     20: "place 1",
//     30: "place 2",
//     10: "place 3",
//     40: "place 4",
// }

// mainLocation = 15;


// let arrOfKeys = Object.keys(locations).every(function(e){
//     console.log(e);
//     return e > mainLocation
// })

// console.log(arrOfKeys);

/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// //string

// let myName = "Osama";

// console.log(myName);//osama
// console.log(...myName);//o s a m a
// console.log([...myName]);// arr [o, s, a, m, a]

// //concatenate arrs

// let arr1 = [1,2,3,4]
// let arr2 = ["A","B","C","D"]

// let allArrays = [...arr1,...arr2]

// console.log(allArrays);

// // push array => بنفس الفكره

// let arr1 = [1,2,3,4]
// let arr2 = ["A","B","C"]

// arr1.push(...arr2)

// console.log(arr1);

// // Math.

// let nums = [100,200,500,-150,-200,900]

// console.log(Math.max(nums)); // => Nan
// console.log(Math.max(...nums)); // => 900

// // merge objects

// let obj1 ={
//     A : "A",
//     B : "B",
// }
// let obj2 ={
//     C : "C",
//     D : "D",
// }

// let obj3 = {...obj1,...obj2}

// console.log(obj3);

/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/