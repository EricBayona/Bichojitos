   // PRODUCTOS
const productos = [
    // Flores
    {
        id: "flor-01",
        titulo: "Flor de Algodon 01",
        imagen: "./img/flores/f1.jpg",
        categoria: {
            nombre: "Flores",
            id: "flores"
        },
        precio: 1000
    },
    {
        id: "flor-02",
        titulo: "Flor de Algodon 02",
        imagen: "./img/flores/f2.jpg",
        categoria: {
            nombre: "flores",
            id: "flores"
        },
        precio: 1000
    },
    {
        id: "flor-03",
        titulo: "Flor de Algodon 03",
        imagen: "./img/flores/f3.jpg",
        categoria: {
            nombre: "flores",
            id: "flores"
        },
        precio: 1000
    },
    // Productos Algodon
    {
        id: "peluches-01",
        titulo: "Peluche de Algodon 01",
        imagen: "./img/productosAlgodon/peluchesAlgodon/1.jpg",
        categoria: {
            nombre: "Peluches",
            id: "peluches"
        },
        precio: 1000
    },
    {
        id: "peluches-02",
        titulo: "Peluche de Algodon 02",
        imagen: "./img/productosAlgodon/peluchesAlgodon/2.jpg",
        categoria: {
            nombre: "peluches",
            id: "peluches"
        },
        precio: 1000
    },
    {
        id: "peluches-03",
        titulo: "Peluche de Algodon 03",
        imagen: "./img/productosAlgodon/peluchesAlgodon/3.jpg",
        categoria: {
            nombre: "peluches",
            id: "peluches"
        },
        precio: 1000
    },
    {
        id: "peluches-04",
        titulo: "Peluche de Algodon 04",
        imagen: "./img/productosAlgodon/peluchesAlgodon/4.jpg",
        categoria: {
            nombre: "peluches",
            id: "peluches"
        },
        precio: 1000
    },
    {
        id: "peluches-05",
        titulo: "Peluche de Algodon 05",
        imagen: "./img/productosAlgodon/peluchesAlgodon/5.jpg",
        categoria: {
            nombre: "peluches",
            id: "peluches"
        },
        precio: 1000
    },
    {
        id: "peluches-06",
        titulo: "Peluche de Algodon 06",
        imagen: "./img/productosAlgodon/peluchesAlgodon/6.jpg",
        categoria: {
            nombre: "peluches",
            id: "peluches"
        },
        precio: 1000
    },
    {
        id: "peluches-07",
        titulo: "Peluche de Algodon 07",
        imagen: "./img/productosAlgodon/peluchesAlgodon/7.jpg",
        categoria: {
            nombre: "peluches",
            id: "peluches"
        },
        precio: 1000
    },
    {
        id: "peluches-08",
        titulo: "Peluche de Algodon 08",
        imagen: "./img/productosAlgodon/peluchesAlgodon/8.jpg",
        categoria: {
            nombre: "peluches",
            id: "peluches"
        },
        precio: 1000
    },
    // Peluches de Chenille
    {
        id: "chenille-01",
        titulo: "Peluche Chenille 01",
        imagen: "img/productosChenille/peluchesChenille/1.jpg",
        categoria: {
            nombre: "Productos realizados en Chenille",
            id: "chenille"
        },
        precio: 1000
    },
    {
        id: "chenille-02",
        titulo: "Chenille 02",
        imagen: "img/productosChenille/peluchesChenille/2.jpg",
        categoria: {
            nombre: "chenille",
            id: "chenille"
        },
        precio: 1000
    },
    {
        id: "chenille-03",
        titulo: "Chenille 03",
        imagen: "img/productosChenille/peluchesChenille/3.jpg",
        categoria: {
            nombre: "chenille",
            id: "chenille"
        },
        precio: 1000
    },
    {
        id: "chenille-04",
        titulo: "Chenille 04",
        imagen: "img/productosChenille/peluchesChenille/4.jpg",
        categoria: {
            nombre: "chenille",
            id: "chenille"
        },
        precio: 1000
    },
    // Flores
    {
        id: "flor-01",
        titulo: "Flor 01",
        imagen: "./img/flores/f1.jpg",
        categoria: {
            nombre: "flores",
            id: "flores"
        },
        precio: 1000
    },
    {
        id: "flor-02",
        titulo: "Flor 02",
        imagen: "./img/flores/f2.jpg",
        categoria: {
            nombre: "flores",
            id: "flores"
        },
        precio: 1000
    },
    {
        id: "flor-03",
        titulo: "Flor 03",
        imagen: "./img/flores/f3.jpg",
        categoria: {
            nombre: "flores",
            id: "flores"
        },
        precio: 1000
    },
    // LLaveros
    {
        id: "llavero-01",
        titulo: "llavero de Algodon 01",
        imagen: "./img/productosAlgodon/llaveroAlgodon/1.jpg",
        categoria: {
            nombre: "Llaveros",
            id: "llavero"
        },
        precio: 1000
    },
    {
        id: "llavero-02",
        titulo: "llavero de Algodon 02",
        imagen: "./img/productosAlgodon/llaveroAlgodon/2.jpg",
        categoria: {
            nombre: "llavero",
            id: "llavero"
        },
        precio: 1000
    },
    {
        id: "llavero-03",
        titulo: "llavero de Algodon 03",
        imagen: "./img/productosAlgodon/llaveroAlgodon/3.jpg",
        categoria: {
            nombre: "llavero",
            id: "llavero"
        },
        precio: 1000
    },
    {
        id: "llavero-04",
        titulo: "Peluche de Algodon 04",
        imagen: "./img/productosAlgodon/llaveroAlgodon/4.jpg",
        categoria: {
            nombre: "llavero",
            id: "llavero"
        },
        precio: 1000
    },
    {
        id: "llavero-05",
        titulo: "llavero de Algodon 05",
        imagen: "./img/productosAlgodon/llaveroAlgodon/5.jpg",
        categoria: {
            nombre: "llavero",
            id: "llavero"
        },
        precio: 1000
    },
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categria");
const tituloPrincipal = document.querySelector(".titulo-pincipal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelectorAll("#numerito");

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

botonesCategorias.forEach(boton => boton.addEventListener("click", () =>{
    nav.classList.remove("visible");
}))
// botonesCategorias.addEventListener("click", () => {
//     nav.classList.remove("visible");
// })


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">    
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}"  >Comprar</button>
        </div>
        `;

        contenedorProductos.append(div);
    })
    actulizarBotonesAgregar();
    
}

 
cargarProductos(productos);

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click",(e)=>{

        if (e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre
            const productosBoton = productos.filter( producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
});


function actulizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
};

let productosEnCarrito;

let productosEnCarritoLS =localStorage.getItem("productos-en-carrito");

    if (productosEnCarritoLS){
        productosEnCarrito = JSON.parse(productosEnCarritoLS);
        actualizarNumerito()
    }else{
        productosEnCarrito =[];
    }

function agregarAlCarrito(e){

    const idBoton = e.currentTarget.id;
    const productoAgregado  = productos.find(producto => producto.id === idBoton);
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex (producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad ++;
        
    }else{
        productoAgregado.cantidad =1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
};

function actualizarNumerito(){
    botonesCategorias.forEach(boton => boton.addEventListener("click", () =>{
        nav.classList.remove("visible");
    }))
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad,0);
    numerito.forEach(numerito => numerito.innerHTML =nuevoNumerito)
    
}
const body = document.querySelector("#body")
const botonOscuro = document.querySelector("#modo-oscuro");
botonOscuro.addEventListener("click",() =>{
    body.classList.add("dark");;
} )
// var granimInstance = new Granim({
//     element: '#canvas-complex',
//     direction: 'left-right',
//     isPausedWhenNotInView: true,
//     states : {
//         "default-state": {
//             gradients: [
//                 [
//                     { color: '#833ab4', pos: .2 },
//                     { color: '#fd1d1d', pos: .8 },
//                     { color: '#38ef7d', pos: 1 }
//                 ], [
//                     { color: '#40e0d0', pos: 0 },
//                     { color: '#ff8c00', pos: .2 },
//                     { color: '#ff0080', pos: .75 }
//                 ],
//             ]
//         }
//     }
// });