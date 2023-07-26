// const { deletarTask } = require("../../assets/src/models/tasksModels");

window.addEventListener('load' , loadTasks);

let tbody = document.querySelector('tbody');
let addForm = document.querySelector('.add-form');

let inputTask = document.querySelector('.input-task');
let inputLocal = document.querySelector('.input-local');
let inputData= document.querySelector('.input-data');

const addTask = async () => {

    const task = { title: inputTask.value, local: inputLocal.value, data: inputData.value};

    await fetch('http://localhost:3000/tasks' , {
      method:'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(task),
    })
}

async function excluirTask(id) {
  await fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'delete'
  });

  loadTasks();
}

const fetchTasks = async () => {
  const resposta = await fetch('http://localhost:3000/tasks');
  const tasks = await resposta.json();
  return tasks;
}

function createElement (tag, textContent = '', innerHTML = '') {
    const element = document.createElement(tag);

    if(textContent) {
      element.textContent = textContent;
    }
    if (innerHTML) {
      element.innerHTML = innerHTML;
    }
    return element;
}

function criarLinha(task) {
  const { id, title, local , data} = task; 
  const tr = createElement('tr');
  const tdTitle = createElement('td' , title);
  const tdLocal = createElement('td' , local);  
  const tdData = createElement('td' , data);
  const tdAções = createElement('td');

  const editButton = createElement('button' , '', '<span class="material-symbols-outlined">edit_calendar</span>');
  const deleteButton = createElement('button' , '', '<span class="material-symbols-outlined">delete</span>');
  
  deleteButton.addEventListener('click' , () => {
    excluirTask(id);
  });

  editButton.classList.add('btn-action');
  deleteButton.classList.add('btn-action');
  tdAções.appendChild(editButton);
  tdAções.appendChild(deleteButton);
  tr.appendChild(tdTitle);
  tr.appendChild(tdLocal);
  tr.appendChild(tdData);
  tr.appendChild(tdAções);
  
  return tr;
}

async function loadTasks  () {
    const task = await fetchTasks();
    tbody.replaceChildren(...[]);
    task.forEach(task => {
        const tr = criarLinha(task);
        tbody.appendChild(tr);
    });
}


addForm.addEventListener('submit', () => {
  addTask();
  loadTasks();
});

