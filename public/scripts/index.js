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
      body: JSON.stringify(partida),
    })
}

const fetchPartidas = async () => {
  const resposta = await fetch('http://localhost:3000/partidas');
  const partidas = await resposta.json();
  return partidas;
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

function criarLinha(partida) {
  const { title, local , data} = partida; 
  const tr = createElement('tr');
  const tdTitle = createElement('td' , title);
  const tdLocal = createElement('td' , local);  
  const tdData = createElement('td' , data);
  const tdAções = createElement('td');

  const editButton = createElement('button' , '', '<span class="material-symbols-outlined">edit_calendar</span>');
  const deleteButton = createElement('button' , '', '<span class="material-symbols-outlined">delete</span>');
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
    const partidas = await fetchPartidas();
    partidas.forEach(partida => {
        const tr = criarLinha(partida);
        tbody.appendChild(tr);
    });
}


addForm.addEventListener('submit', () => {
  addPartida();
  loadTasks();
});

