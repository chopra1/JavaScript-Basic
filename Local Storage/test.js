const ul = document.querySelector('ul');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
//JSON.parse() will convert JSON obj to JS obj

itemsArray.pop()
console.log(itemsArray)
//items in local storage remains there till didn't deleted manually. console.log() shows differentresults.
itemsArray.forEach(addTask);
function addTask(text){
  const li = document.createElement('li')
  li.textContent = text;
  ul.appendChild(li);
}

function add(){
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  //JSON.stringify() will convert JS value to JSON string
  addTask(input.value);
  input.value = '';
}

function clear(){
  localStorage.clear();
  ul.innerHTML = '';
  itemsArray = [];
}