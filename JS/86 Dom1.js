/*
  DOM
  - What Is DOM => Document Object Model => document.
  - DOM Selectors

  --- Find Element By ID => document.getElementById("id")
  --- Find Element By Tag Name => document.getElementsByTagName("p,div..")[index]
  --- Find Element By Class Name => document.getElementsByClassName("header")[index]

  --- Find Element By CSS Selectors => document.querySelctor(".header h2") => selctor like css
    =>لو فيه اكتر من اتش تو فالهيدر فهيجيبلك اول واحد بس

  --- Find Element By CSS Selectors => document.querySelctorAll(".header p") => all selectors
    => هنا بقا بيجيبك كل ال ب الي فلهيدير
  --- Find Element By Collection
  ------ title => document.title
  ------ body => document.body
  ------ images => document.images[0, 1, ...]
  ------ forms  ~
  ------ links ~
*/ 



// let a = document.getElementsByTagName("p")[0]
// console.log(a)
// let b = document.querySelectorAll(".header p")[1]
// console.log(b)

// let c = document.getElementsByClassName("header")[0]
// console.log(c)


/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML =>على هيئة تيكست HTMLمحتوى ال
  - textContent => HTML بس بغض النظر عن ال Textال
  => بستخدمه لو عايز اضيف سبيشيال كاركتر ومكسل اجيب الانتيتيز

  - Change Attributes Directly => element.atr = "value"
    => document.images[0].src = "source" => الصوره الاولى السورس بتاعها كذا
    => myDiv.id = "divId"

  - Change Attributes With Methods
  --- getAttribute => element.getAttribute("attr") => بمسك بيها الفاليو بتاعت الاتربيويت
  --- setAttribute => element.setAttribute("attr","value")

  => يبقا عندك طريقتين تغير بيهم محتوى الاتربيوتس
  => واحد دايركت وواحده بلسيت
  Search
  - innerText
*/

// let myDiv = document.querySelector(".header")
// console.log(myDiv.innerHTML)
// console.log(myDiv.textContent)
// myDiv.id="divId"
// console.log(myDiv)
// let myH = document.querySelector(".theHinDiv")
// myH.setAttribute("class","theH")
// console.log(myH)


/*
  DOM [Check Attributes]
  - element.attributes 
  - element.hasAttribute("attr") => هل الايملينت بيحتوي على الاتربيوت  الفلاني
  - element.hasAttributes() => هل بيحتوي على اتربيوتس اصلا
  - element.removeAttribute("attr") => احذفلي الاتربيوت
*/


// let myP = document.getElementsByTagName("p")[0]
// if(myP.hasAttribute("class")){
//     if(myP.getAttribute("class") === ""){
//         myP.removeAttribute("class")
//     }else{
//         myP.setAttribute("class","p1")
//     }
    
// }else{
//     console.log(`Not Found`)
// }
// console.log(myP)


/*
  DOM [Create Elements]
  - createElement => document.createElement("ele")
  - createComment("comm") => ~
  - createTextNode("text")
  
  - createAttribute("attr")
  =>Node لما اجي اعمل سيت لازم زود كلمة => ele.setElementNode(myAtr)

  - appendChild(el) => ele.appendChild(el)
  => بتضيف من تحت 
*/


// let myDiv = document.createElement("div")
// let myAttr = document.createAttribute("mohamed-ali")
// let myCom = document.createComment("This is comment")
// let myText = document.createTextNode(`this is text`)
// let myP = document.createElement("p")
// let myTextP = document.createTextNode(`this is text in p`)

// myDiv.setAttributeNode(myAttr)
// myDiv.appendChild(myCom)
// myDiv.appendChild(myText)
// myDiv.appendChild(myP)
// myP.appendChild(myTextP)
// document.body.appendChild(myDiv)


/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

    // let myDiv = document.createElement("div")
    // let myH = document.createElement("h3")
    // let myP = document.createElement("p")
    // let myHtext = document.createTextNode("Moamen")
    // let myPtext = document.createTextNode("This is My Site")

    // myDiv.appendChild(myH)
    // myDiv.appendChild(myP)
    // myH.appendChild(myHtext)
    // myP.appendChild(myPtext)
    // myDiv.className = "product"
    // console.log(myDiv)
    // document.body.appendChild(myDiv)




/*
  DOM [Deal With Childrens]
  - children => elements
  - childNodes => element,text,comment,anything
  - firstChild => value of first child
  - lastChild
  - firstElementChild => first element not child
  - lastElementChild
*/

// let w = document.querySelector("div")
// console.log(w.children) 
// console.log(w.children[0]) 
// console.log(w.childNodes)
// console.log(w.childNodes[1])
// console.log(w.firstChild)
// console.log(w.lastChild)
// console.log(w.firstElementChild)


/*
  DOM [Events]
  =>طلعت اتربيوتز  events ال
  - Use Events On HTML => atrr(event) = ""
- Use Events On JS  =>element.event = func(){}
                    =>window.event ~
                    =>form.event ~
    // elements
  --- onclick => left click
  --- oncontextmenu => right click
  --- onmouseenter => hover
  --- onmouseleave => hoverandleave

    //window
  --- onload
  --- onscroll 
  --- onresize

    //form
  --- onfocus
  --- onblur => focus and leave
  --- onsubmit
*/

// myLink = document.getElementById("btn")
// myLink.onmouseenter = function(){
//     console.log(`ok`)
// }


/*
  DOM [Events]
  - Validate Form Practice
  - preventDefault() => بتمنع السلوك الي بيحصل
*/

// document.links[0].onclick = function(event){ // => لما اعمل كليك اللينك مش هيفتح
//     event.preventDefault();
// }

// let nameInput = document.querySelector("[name='un']")
// let ageInput = document.querySelector("[name='age']")

// document.forms[0].onsubmit = function(event){
//     let nameValid = false;
//     let ageValid = false;
    
//     if(nameInput.value.length <= 10 && nameInput.value !== ""){
//         nameValid = true;
//     }
//     if(ageInput.value !== ""){
//         ageValid = true;
//     }
//     if(nameValid === false || ageValid === false){
//         event.preventDefault();
//     }
// }