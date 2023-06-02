const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write soomething");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    savData();
}

// function sort(){
//     listContainer.innerHTML = addTask.sort();
// }

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        savData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savData();
    }
}, false);

function savData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function shwTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
shwTask();