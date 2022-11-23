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



/*let p = document.createElement('p');
p.textContent = 'lo lograste estoy dentro de un elemento renderizado con js :D';
element.appendChild(p);
*/

nombres = ['Kg','Taco','Dorado','1LtCSM','1/2CSM','Boing','Cafe','Refresco'];
precios = [440,30,24,50,25,20,20,25];

const menuData =[{
    name: 'Kg',
    price: 440,
},
{
    name: 'Taco',
    price: 30, 
},
{
    name: 'Dorado',
    price: 24,
},
{
    name: '1LtCSM',
    price: 50,
},
{
    name: '1/2CSM',
    price:25,
},
{
    name: 'Boing',
    price: 20,
},
{
    name: 'Cafe',
    price:20,
},
{
    name: 'Refresco',
    price:25,
},
];

generateGrid(menuData, document.querySelector('.icons-container'));

function generateGrid(menuData, parent) {
    let total =0;

    menuData.forEach((menuItem) => {
        const btn = document.createElement('button');
        const h3 = document.createElement('h3');

        btn.appendChild(h3);
        parent.appendChild(btn);

        h3.textContent = menuItem.name;

        btn.addEventListener('click',() => {
            const priceEl = document.getElementById('price');
            const totalEl = document.getElementById('total');

            total += menuItem.price;

            priceEl.textContent = menuItem.price;
            totalEl.textContent = total;
        });
    });
}

Total = [];


const element = document.querySelector('.icons-container');

for(i=0;i<=7;i++){
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    
    
    div.classList.add('cuadro');
    div.appendChild(h3);
    div.value = `valor${i}`;
    h3.textContent = `${nombres[i]}`;
    h3.classList.add('icon-text');
    element.appendChild(div);
    
};


