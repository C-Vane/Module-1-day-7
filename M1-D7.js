/* Starting from D6's exercise, use your Smartphone Shop Website and implement the following exercises*/
/*EXERCISE 1 
     Create a new welcome alert message when the page successfully loads
    */
window.onload = () => {
  alert("Welcome to this web site");
  
};
/* EXERCISE 2
      Write a function to change the Title of the page in something else (execute the function in browser console)
  */
const changeTitle = function (newTitle) {
  let new_title = document.querySelector("title");
  new_title.innerText = newTitle;
};
/* EXERCISE 3a
      Write a function to add a class to the page's h1 title in "red-color" (execute the function when title is hovered by mouse).
  */

const addClassToTitle = () => {
    let a = document.querySelector(".h1element");
    a.classList.add("red-color");
};
//document.querySelector("body h1").addEventListener("mouseover", addClassToTitle());
/* EXERCISE 3b
      Write a function to remove "red-color" class from previous h1 (execute the function when the mouse leaves the title).
  */
 const removeClassFromTitle = () => {
    let a = document.querySelector(".h1element");
    a.classList.remove("red-color");
 };
 //document.getElementsByTagName("h1").addEventListener("mouseover", removeClassToTitle());
/* EXERCISE 4
  Write a function to change the text of only the p which are child of a div (execute the function by assigning it to a button's click event)
  */
const changeText=()=>{
    let old_text= document.querySelector("div p");
    NewText=document.querySelector("#textArea");
    old_text.innerText= NewText.value;

}
/* EXERCISE 5
      Write a function to change the list title (you can use previous day's textarea as input or create a new text input field to grab the content)
  */
const changeListTitle= ()=>{
    let old_title= document.getElementById("listTitle");
    NewTitle=document.querySelector("#textArea").value;
    old_title.innerText=NewTitle;
}
/* EXERCISE 6
       Write a function to add a new item ONLY to the second list (create an input field + add button)
  */
const addToTheSecond = () => {
    let item_destination= document.querySelector("#secondList");
    let new_item= document.createElement("li");
    let item=document.querySelector("#textArea").value;
    new_item.innerText=item;
    item_destination.appendChild(new_item);
};
/* EXERCISE 7
      Write a function to make the first UL disappear (button)
  */
const firstUlDisappear = () => {
    let UL= document.querySelector('ul');
    UL.innerHTML="";
};
/* EXERCISE 8
      Write a function to make the background of every UL green (button)
  */
const paintItGreen =() => {
    let UL= document.querySelectorAll('ul');
    
    UL.forEach(element=> element.style.backgroundColor= "green");
};

/* EXERCISE 9
      Add a "magnifier function" to the table.
      When the user mouse goes on a table cell (not the image one) the font size must increase.
      HINT use mouseenter / mouseleave events
  */

 function make(e) {
    console.log(e.target.tagName)
    
}

function makeThemMagnifiable() {
  
    let table = document.querySelector("#prod_table");
    let curren_element= table.querySelectorAll("tr td");
    for(i=1; i<=curren_element.length; i++){
        table.style.fontSize = "32px";
    }
}

function makeThemNormal() {

    let table = document.querySelector("#prod_table");
    let not_mag=document.querySelector("tr").firstChild;
    let curren_element= table.querySelector("tr td");
    if (curren_element !== not_mag) table.style.fontSize = "18px";
      
}



//document.querySelector("#prod_table").addEventListener("mouseenter", makeThemMagnifiable())

/* EXERCISE 10
      Add a button to toggle all the product images (toggle => if visible, hide, if not visible, show)
  */
const toggleShowImages = function () {
    let image= document.getElementsByTagName("img");
    for(let i = 0; i <= image.length; i++) 
    image[i].style.display= (image[i].style.display === "none")? "block" : "none";
};

//##### EXTRA

/* EXERCISE 11
      Make the heading of the page change color radomly every time the user clicks on it
      */
const makeItClickable = function (){
    let heading= document.getElementById("header");
    heading.style.backgroundColor= randomColor();
};
const randomColor=() => {
  let chars = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
} 

/*EXERCISE 12
    Refactor your HTML code with HTML5 semantic tags such as header, section, footer, etc
*/
