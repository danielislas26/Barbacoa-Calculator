document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    
};

function crearMenu(){

}

class Platillo {
   constructor(nombre,precio) {
    this.nombre = nombre;
    this.precio = precio;
   }
}

let Kg = new Platillo('Kg',440);
let Taco = new Platillo('Taco',30);
let Dorado = new Platillo('Dorado',24);
let Lt = new Platillo('1LtCSM',50);
let Consome = new Platillo('1/2CSM',25);
let Boing = new Platillo('Boing',20);
let Cafe = new Platillo('Cafe',20);
let Refresco = new Platillo('Refresco',25);


//const container = document.querySelector('.icons-container');
//container.innerHTML = Dorado.precio;

const element = document.querySelector('.icons-container');

/*let p = document.createElement('p');
p.textContent = 'lo lograste estoy dentro de un elemento renderizado con js :D';
element.appendChild(p);
*/

nombres = ['Kg','Taco','Dorado','1LtCSM','1/2CSM','Boing','Cafe','Refresco'];
precios = [440,30,24,50,25,20,20,25];



for(i=0;i<=7;i++){
    let idiv = document.createElement('div');
    idiv.classList.add('cuadro')
    idiv.textContent = `${nombres[i]}`;
    element.appendChild(idiv);
};