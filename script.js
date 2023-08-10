let button = document.getElementById('sortear')

button.addEventListener('click', function(){
    
    let min = parseInt(document.getElementById('min').value)
    let max = parseInt(document.getElementById('max').value)


    let resultado = Math.floor(Math.random()* (max - min + 1)+ min)

    if(isNaN(resultado)){
        resultado = "informe um numero"
    }

    document.querySelector('#resultado').textContent = resultado
})


function mostrarMenu() {
    var menu = document.getElementById("nav-header")
    var icone = document.getElementById("icone")

    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = "flex";
        icone.classList.remove("fa-bars")
        icone.classList.add("fa-times")
    } else {
        menu.style.display = "none";
        icone.classList.remove("fa-times");
        icone.classList.add("fa-bars");
    }
}