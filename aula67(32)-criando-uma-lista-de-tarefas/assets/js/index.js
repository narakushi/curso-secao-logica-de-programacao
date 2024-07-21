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



function criaTarefa(textInput) {
    const li = criaLi();
    li.innerHTML = textInput;
    tarefas.appendChild(li);
    limpaInput();
}

btnTarefa.addEventListener("click", function () {
   verficaInput();
})