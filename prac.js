var itemList=document.querySelector("#items");

itemList.parentNode.style.backgroundColor="green";
itemList.lastElementChild.style.backgroundColor="red";
itemList.lastChild.style.textContent="dinesh";

itemList.createChild
itemList.firstElementChild.style.color="blue";
itemList.firstChild.style.backgroundColor="green";
itemList.nextSibling.style.color="red";
itemList.previousSibling.style.backgroundColor="red";
itemList.previousElementSibling.innerHTML="heyy";
var newDiv=document.createElement('Div');
newDiv.className='dinesh';
newDiv.id='dinesh2';
newDiv.setAttribute('title' , "hello dinesh"); 
var newdivText=document.createTextNode('Hello World');
newDiv.appendChild(newdivText);
var container=document.querySelector("header . container");
var h1=document.querySelector("header h1");
container.insertBefore(newDiv , h1);

