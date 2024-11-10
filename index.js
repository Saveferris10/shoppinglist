const list = document.querySelector('ul');
const info = document.querySelector('input');
const action = document.querySelector('button');

action.addEventListener('click', () => {
    const myItem = info.value;
    info.value ='';

const newList = document.createElement('li');
const newSpan = document.createElement('span');
const newBtn = document.createElement('button');

list.appendChild(newList);
newList.appendChild(newSpan);
newList.appendChild(newBtn);
newSpan.textContent = myItem;
newBtn.textContent = 'Delete';

newBtn.addEventListener('click', () => {
    list.removeChild(newList);
});

info.focus();
});