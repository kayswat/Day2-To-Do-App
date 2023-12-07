const button = document.querySelector('#button');
const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');
const error = document.querySelector('.error');

function addTask(){
    if(inputBox.value === '' ){
error.style.display = 'block';
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML ="\u00d7";
        li.appendChild(span);
        error.style.display = 'none';
    }
    inputBox.value = ''; 
    saveData();
}

button.addEventListener('click', addTask);

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData(); 
    }
    else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();

