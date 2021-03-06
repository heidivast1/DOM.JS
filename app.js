
const toggleList = document.getElementById('togglelist');
const listDiv =document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUl.children;

function attachListItemButtons(li) {
  let up = document.createElement('button');
  up.classname = 'up';
  up.textContent = 'Up';
  li.appendChild(up);

  let down = document.createElement('button');
  down.classname = 'down';
  down.textContent = 'Down';
  li.appendChild(down);

  let remove = document.createElement('button');
  remove.classname = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

for (let i = 0; i < lis.length; i += 1) {
  attachListItemButtons(lis[i]);
}

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') { //targets any buttons in the HTML
    if (event.target.className == 'remove') {
      let li = event.target.parentNode; //parent node of a parent node
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode; //parent node of a parent node
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
    if (event.target.className == 'down') {
      let li = event.target.parentNode; //parent node of a parent node
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
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
  attachListItemButtons(li);
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
