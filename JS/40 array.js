/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  -> let arr = []

  - Access Arrays Elements
  -> stringزي ال -> arr[]

  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/

// let players = ["vini", "benzo", "hazard", ["cris", "isco", "marcelo"]];

// console.log(players[0]); //vini
// console.log(players[2][5]); // d
// console.log(players[3][1]); //isco

// players[3][2] = "james"; // marcelo -> james

// console.log(players);

// console.log(typeof players);
// console.log(Array.isArray(players));


/*
  Array Methods
  - Length
  1 Add 2 Update 3 Control 
*/

// Index Start From 0 [ 0, 1, 2, 3, 4 ]

// let players = ["Cris", "Isco", "Dybala", "Danilo"]

// // players[players.length] = "Mohamed"; // add
// // players[players.length - 1] = "Moamen"; // update
// // players.length = 3; // control

// console.log(players);


/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array -> Remove first element ONLY
  - pop() Remove Last Element From Array -> Remove last element ONLY
  -> shift(), pop() => بيخزنوا اللي شالوة فتقدر توصلهم بعد كدا عادي
*/

// let names = ["Moamen", "Ahmed", "Mohamed", "Adel"]

// names.unshift("Sameh", "Haytham", "Foaad");
// names.push("Kamel");
// names.shift();
// names.pop()

// console.log(names);


/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
  -> بلظبط stringال3 زي ال
  -> -1 لو ملاقوش بيرجعوا  indexof, lastIndexOf  افتكر ان ال
*/

// let arr = ["Ahmed", "Moamen", "Mohamed", "Eslam", "Ahmed"]

// console.log(arr.indexOf("Ahmed")); //0
// console.log(arr.indexOf("Ahmed", 2)); //4
// console.log(arr.lastIndexOf("Ahmed")); //4
// console.log(arr.includes("Ahmed", 3)); //true

/*
  Arrays Methods [Sort]
  - sort()
  -> abc بشكل ابجدي 123  arrayبترتب ال
  -> change the array

  - reverse()
  -> change the array
*/

// let arr = ["Ahmed", "Moamen",200 ,89, "Soliman", 10, "Eslam", -95,  "Osama"]

// // console.log(arr.sort());
// console.log(arr.reverse());
// console.log(arr)



/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Don't Change The Array And Return New Array
  -> زي السترينج بلحرف

  - splice(Start index[Mand], Delete Count [Opttion] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
  --- Change The Array Like sort() and reversr()
  -> يعني دا بيحذف من اي حته وبيضيف من اي حته
*/

// let myFriends = ["Mohamed", "Ali", "Ahmed", "Adel", "Osama", "Shawky"]

// myFriends.splice(4 , 1, "Zenhom");
// console.log(myFriends);

// myFriends.splice(-1, 1, "Mostafa");
// console.log(myFriends);





/*
  Arrays Methods [Joining]
  - array.concat(array, array, elements) => Return A New Array 
  - join(Separator)
  -> الي هتحدده serpratorوبيفصل بين عناصره بال stringل arrayبيحول ال
*/

// let myFriends = ["Mohamed", "Ali", "Ahmed", "Adel", "Osama", "Shawky"]
// let newFriends = ["Mostafa", "Zenhom"]
// let schoolFriends = ["Kamael", "Sameh", "Karem"]

// let allFriends = myFriends.concat(newFriends, schoolFriends, "Hossam");
// console.log(allFriends);

// console.log(allFriends.join("-"));

/*
  Array Challenge
*/

// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// // Write Code Here

// console.log(my.slice(0, 4).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

// // console.log(my.slice(1, 3).reverse()); // ["Elham", "Mazero"]

// // console.log(); // "Elzero"

// // console.log(); // "rO"