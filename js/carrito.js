let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito)

const contenedorTituloPrincipar = document.querySelector("#titulo-principal")
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones= document.querySelector("#carrito-acciones");
const contenedorcarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-vaciar");
const contenedorTotal= document.querySelector("#total");
const botonComprar =document.querySelector("#comprado")

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


function cargarProductosCarrito(){
    if (productosEnCarrito && productosEnCarrito.length > 0){
        

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorcarritoComprado.classList.add("disabled");

        contenedorCarritoProductos.innerHTML="";

        productosEnCarrito.forEach(producto => {

            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML= `
                <img src="${producto.imagen}" alt="${producto.titulo}">
                <div class="contenedor-detalles-carrito">
                    <div class="carrito-producto-titulo">
                    <small>Nombre</small>
                        <h3>${producto.titulo}</h3>
                    </div>
                    <div class="carrito-producto-cantidad">
                        <small>cantidad</small>
                        <p>${producto.cantidad}</p>
                    </div>
                    <div class="carrito-producto-precio">
                        <small>precio</small>
                        <p>${producto.precio}</p>
                    </div>
                    <div class="carrito-producto-subtotal">
                        <small>sub-total</small>
                        <p>${producto.precio * producto.cantidad}</p>
                    </div>
                    <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash3"></i></button>
                </div>
            `   
            contenedorCarritoProductos.append(div);
        });
    }else{
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorcarritoComprado.classList.add("disabled");
    }
    actulizarBotonesEliminar();
    
    actualizarTotal();
}

cargarProductosCarrito();

function actulizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar")

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
};
function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index,1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
    actualizarNumerito()
}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito(){
    Swal.fire({
        title: "Estas seguro?",
        text: "El carrito se vaciara",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "si!",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0 ;
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();
            actualizarNumerito()
          Swal.fire({
            title: "Carrito Vacio!",
            text: "",
            icon: "success"
          });
        }
      });

}

function actualizarTotal (){
    const totalCalculado = productosEnCarrito.reduce((acc, producto) =>
        acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", ComprarCarrito);
function ComprarCarrito(){

    productosEnCarrito.length = 0 ;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    actualizarNumerito()
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorTituloPrincipar.classList.add("disabled");
    contenedorcarritoComprado.classList.remove("disabled");
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Compra Realizada",
        showConfirmButton: false,
        timer: 2500
      });
}










const numerito = document.getElementById("numerito");
function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad,0);
    numerito.innerText = nuevoNumerito;
}
actualizarNumerito()


