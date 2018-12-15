const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

//Selecting the all list of items
const listItems = document.getElementsByTagName('li')[0];

// Add eventlistner to lis items

// for (let i = 0; i<listItems.length; i += 1){ // -- [i] - lt
  
listItems.addEventListener('mouseover', () => {
  listItems.textContent = listItems.textContent.toUpperCase();
});

listItems.addEventListener('mouseout', () => {
  listItems.textContent = listItems.textContent.toLowerCase();
});
// }

const removeItemButton = document.querySelector('button.removeItemButton');



toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = ''; //empty strings 
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = ''; // to clear 
});
  

  // To remove the items in the list 
removeItemButton.addEventListener('click', () => { // click event 
  let ul = document.getElementsByTagName('ul')[0]; // index position
  let li = document.querySelector('li:last-child'); // remove child
  ul.removeChild(li);
});  




  
  
  
  
  
  