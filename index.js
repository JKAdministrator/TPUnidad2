function ejecutar (e){
    let f = new Function(`return ${document.getElementById('valorA').value} ${e.target.getAttribute('data-operador')} ${document.getElementById('valorB').value}`);
    let valorResultado = f();
    document.getElementById('resultado').innerText = valorResultado;
}

window.addEventListener("load", (event) => {
    Array.from(document.querySelectorAll('button.btn-operador')).forEach((btn)=>{
        btn.addEventListener('click',ejecutar,{passive: true});
    });
});