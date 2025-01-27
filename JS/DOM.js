 // rule in all js => anyThing[index] => anyTing is arr or map or set and maybe have more than thing so using 
 // index to get the right thing
/*
Document

how to catch an element?

1-document.getElementById("id")

2-document.getElementsByClassName("class-name")[index] 

3-document.getElementsByTagName("tag-name")[index]

4-document.querySelector("css-selector")

5-document.querySelectorAll("css-selector")[index]

6-document.body

7-document.images[index]

8-document.links[index]

9-document.forms[index]

Create

1- document.createElement("ele")

2- document.createTextNode("the text")

3- document.createAttribute("attr") => this create an attribute without value

4- document.createComment("the comment")

-----------------------------------------------------------------------------------------------------
Element


1- element.innerHTML => HTML inside the element

2- element.textContent => only text inside the element


3- element.attr => the value of attribute (لازم يبقا اتربيوت حقيقي مش من عندي)

4- element.getAttribute("attr") => the value of attribute

5- element.setAttribute("attr","new-value") => set new value


6- element.attributes[index]

7- element.hasAttribute("attr") => true or false

8- element.hasAttributes() => true or false

9- element.removeAttribute("attr") 

11- element.children[index] => elements

12- element.childNodes[index] => elements,text,coment,anything(space is a text)

13- element.firstChild , element.lastChild

14- element.firstElementChild, element.lastElementChild => element not child


10- element.appendChild(ele), element.append(ele || "string") => append from the end

15- element.prepend(ele || "string") => from the top

16- element.before(ele || "string")

17- element.after(ele || "string")

18- element.remove() => remove the element


19- element.nextSibling

20- element.nextElementSibling => to get the next element not just the sibling

21- element.previousSibling, element.previousElementSibling

22- element.parentElement => get the parent of the element


23- element.cloneNode() => get a copy of the ele with attributes but without the elements

24- element.cloneNode(true) => get a copy with the elements that inside


25- element.addEventListner("the-event",func(){}) => somtimes it's necessary to use it rather the ordinary events


events

- element.event = func(){}

- window.event = func(){}

- form.event = func(){}

- event.preventDefault()

1-elements
  --- onclick => left click
  --- oncontextmenu => right click
  --- onmouseenter => hover
  --- onmouseleave => hoverandleave

2-window
  --- onload
  --- onscroll 
  --- onresize

3-form
  --- onfocus
  --- onblur => focus and leave
  --- onsubmit

4-events functions know what they doin
-ele.click()
-ele.focus()
-ele.blur()

classlist

1- ele.classList[index] = ele.classList.item(index) => get the value

2- ele.classList.length

3- ele.classList.contains("class-name") => true or false

4- ele.classList.add("class","class2",...)

5- ele.classList.remove("class","class2",...)

6- ele.classList.toggle("class") => it adds if its not there and removes if its there


style

=> all of those [inline change], there is a way to change in stylesheet but it did not work with me

1- ele.style.prop = "value" => if the prop is consists of two words type it in camelCase 

2- ele.style.cssText = "prop : value; ..." => 

3- ele.style.setProperty("prop","value","priority")

4- ele.style.removeProperty("prop")

*/

let myP = document.getElementsByTagName("p")[0]

function two(e){
  e.addEventListener("click",)
}

function one(){
  let clonedP = myP.cloneNode(true)
  document.body.append(clonedP)
  clonedP.addEventListener("click",function(){
    console.log("iam cloned");
  })
}

myP.addEventListener("click",one)

console.log(myP);