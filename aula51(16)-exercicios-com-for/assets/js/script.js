const elementos = [
    { tag: 'p', frase: 'Não Desista' },
    { tag: 'div', frase: 'Vamos conseguir!' },
    { tag: 'footer', frase: 'Faça o que der com o que possui agora' },
    { tag: 'section', frase: 'Comece e recomece quantas vezes precisar' }
];

function insereElementos() {
    const pai = document.querySelector('.form');
    let tempElement;

    for (let i = 0; i < elementos.length; i++) {
        const {tag, frase} = elementos[i];
        tempElement = document.createElement(tag);
        tempElement.innerHTML = frase;
        tempElement.style.fontSize = '2.2rem';
        pai.appendChild(tempElement);
    };
}

//segunda forma de fazer

// function insereElementos() {
//     const pai = document.querySelector('.form');
//     let objeto;
//     let tempElement;

//     for (let i = 0; i < elementos.length; i++) {
//         tag = elementos[i].tag;
//         frase = elementos[i].frase;
//         tempElement = document.createElement(tag);
//         tempElement.innerHTML = frase;
//         tempElement.style.fontSize = '2.2rem';
//         pai.appendChild(tempElement);
//     };
// }

insereElementos();