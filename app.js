
const toggleList = document.getElementById('togglelist');
const listDiv =document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');



listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') { //targets any buttons in the HTML
    let li = event.target.parentNode; //parent node of a parent node
    let ul = li.parentNode;
    ul.removeChild(li);
  }
});
// listDiv.addEventListener('mouseout', (event) => {
//   if (event.target.tagName == 'LI') {
//   event.target.textContent = event.target.textContent.toLowerCase();
//   }
// }); //code for capitalization behavior



toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none')  { //if display = none it will be set to block otherwise it will be set to none, then change buttons text to show if it's been clicked or not
    toggleList.textContent = 'Hide list'; //this
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';
  listDiv.style.display = 'none';
  }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0]; //returns a collection, because there is only 1 list we can access at 0
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = ''; //this sets the value in the text box to nothing after the li has been added
});



/*const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = 'purple';
}

const errorNotPurple = document.querySelectorAll('.error-not-purple');

for (let i = 0; i < errorNotPurple.length; i += 1) {
  errorNotPurple[i].style.color = 'red';
}

const evens = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < errorNotPurple.length; i += 1) {
  evens[i].style.backgroundColor = 'lightgray';
}



In the code above the js is running and turning everythign purple, then running and turning all classes that are not purple to red

const myHeading = document.getElementsByTagName('h1')[0];
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});


*/
