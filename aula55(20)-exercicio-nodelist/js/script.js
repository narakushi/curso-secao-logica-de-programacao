const paragrafos = document.querySelector('.paragrafos');
const estilosBody = getComputedStyle(document.body);

console.log(estilosBody);
const backgroundColorBody = estilosBody.backgroundColor;

const ps = paragrafos.querySelectorAll('p');

for(let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.marginTop = '2rem';
    p.style.color = '#ff4345';
}