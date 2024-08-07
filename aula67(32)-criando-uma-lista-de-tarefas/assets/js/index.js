const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function verficaInput() {
    if (!inputTarefa.value) return; //se não houver valor, da retorno vazio
    criaTarefa(inputTarefa.value);
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        verficaInput()
    }

})

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoAPagar = document.createElement('button');
    botaoAPagar.innerText = 'Apagar';
    botaoAPagar.setAttribute('class', 'apagar');
    botaoAPagar.setAttribute('title', 'Apagar este tarefa');
    li.appendChild(botaoAPagar);
}

function criaTarefa(textInput) {
    const li = criaLi();
    li.innerHTML = textInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener("click", function () {
   verficaInput();
})

document.addEventListener("click", function(e) {
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();

