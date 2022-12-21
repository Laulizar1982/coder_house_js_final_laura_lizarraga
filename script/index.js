// ARRAY DE PRODUCTOS
const productos = [
    {
      id: "silla-01",
      titulo: "Silla de Escritorio Tokio",
      imagen: "./img/silladeescritoriotokio.jpeg",
      categoria: {
        nombre: "Sillas",
        id: "sillas"
    },
      descripcion: "Silla de escritorio Tokio con apoyacabezas regulable",
      precio:78301
    },
  
    {
      id:"silla-02",
      titulo: "Silla de comedor Saurus",
      imagen: "./img/sillacomedorapilable.png",
      categoria: { 
        nombre:"Sillas",
        id: "sillas"
      },
      descripcion: "Silla de comedor apilable patas de caño",
      precio:7097,  
    },
  
    {
      id: "silla-03",
      titulo: "Silla de Comedor Micaela",
      imagen: "./img/silladecomedorenfundada.png",
      categoria: { 
        nombre:"Sillas",
        id: "sillas"
      },
      descripcion: "Silla de comedor enfundada",
      precio:39105, 
    },
    {
      id: "silla-05",
      titulo: "Silla Eames",
      imagen: "./img/sillaeamesbasemadera.png",
      categoria: { 
        nombre:"Sillas",
        id: "sillas"
      },
      descripcion: "Silla base madera color negro",
      precio: 77591,
    },
    {
      id: "silla-06",
      titulo: "Silla de Jardín París",
      imagen: "./img/sillaplasticaapilablejardin.png",
      categoria: { 
        nombre:"Sillas",
        id: "sillas"
      },
      descripcion: "Silla de Jardín plástica apilable reforzada",
      precio: 2498,
      
    },
    {
      id: "sillon-01",
      titulo: "Sillón Francia",
      imagen: "./img/sillonesquinero1.png",
      categoria: { 
        nombre:"Sillones",
        id: "sillones"
      },
      descripcion: "Sillón esquinero rinconero 280 x 180 cm",
      precio: 276908,
      
    },
    {
      id:"sillon-02",
      titulo: "Sillón América",
      imagen: "./img/sillonesquinero2.png",
      categoria: { 
        nombre:"Sillones",
        id: "sillones"
      },
      descripcion: "Sillón esquinero rinconero 225 x 160 cm",
      precio: 245901,
      
    },
    {
      id: "sillon-03",
      titulo: "Sillón Escandinavo",
      imagen: "./img/sofaescandinavo.jpeg",
      categoria: { 
        nombre:"Sillones",
        id: "sillones"
      },
      descripcion: "Sillón Escandinavo 3 cuerpos",
      precio: 170907,
      
    },
    {
      id: "sillon-04",
      titulo: "Sofá sillón Katia",
      imagen: "./img/sofasillon1.png",
      categoria: { 
        nombre:"Sillones",
        id: "sillones"
      },
      descripcion: "Sofá Sillón 3 cuerpos",
      precio: 147898,
    },
    {
      id: "sillon-05",
      titulo: "Sofá sillón Moderno",
      imagen: "./img/sofasillon2.png",
      categoria: { 
        nombre:"Sillones",
        id: "sillones"
      },
      descripcion: "Sofá Sillón 3 cuerpos",
      precio: 162997,
      
    },
    {
      id: "mesa-01",
      titulo: "Mesa de Comedor Keops",
      imagen: "./img/mesacomedorextensible.png",
      categoria: { 
        nombre:"Mesas",
        id: "mesas"
      },
      descripcion: "Mesa de comedor extensible madera paraíso 150cm",
      precio: 112596,
      
    },
    {
      id: "mesa-04",
      titulo: "Mesa de jardín Alaska",
      imagen: "./img/mesajardin.jpeg",
      categoria: { 
        nombre:"Mesas",
        id: "mesas"
      },
      descripcion: "Mesa de jardín redonda plástica 90cm",
      precio: 6878,
      
    },
    {
      id: "juegodecomedor-01",
      titulo: "Juego de Comedor Italia",
      imagen: "./img/juegocomedorrectangular.png",
      categoria: { 
        nombre:"Juegos de comedor",
        id: "juegosdecomedor"
      },
      descripcion: "Juego De Comedor Mesa Rectangular 120cm + 4 Sillas Eames",
      precio: 62495,
      
    },
    {
      id:"juegodecomedor-02" ,
      titulo: "Juego de Comedor Zurich",
      imagen: "./img/juegodecomedorredonda.png",
      categoria: { 
        nombre:"Juegos de comedor",
        id: "juegosdecomedor"
      },
      descripcion: "Juego De Comedor Mesa Redonda 90cm + 4 Sillas Eames",
      precio: 62378,
      
    },
    {
      id: "juegodecomedor-04",
      titulo: "Juego de Comedor Florencia",
      imagen: "./img/juegomesaredondavidrio.jpeg",
      categoria: { 
        nombre:"Juegos de comedor",
        id: "juegosdecomedor"
      },
      descripcion: "Juego De Comedor Mesa Redonda Vidrio 100cm + 4 Sillas Eames",
      precio: 62493,
      
    },
    {
      id: "juegodecomedor-06",
      titulo: "Juego de Comedor Sauvage",
      imagen: "./img/juegodecomedorparados.jpeg",
      categoria: { 
        nombre:"Juegos de comedor",
        id: "juegosdecomedor"
      },
      descripcion: "Juego De Comedor Mesa Redonda 90cm + 2 Sillas Eames",
      precio: 43998,
      img: "./img/juegodecomedorparados.jpeg",
    },
    {
      id: "juegodecomedor-07",
      titulo: "Juego de Comedor Claire",
      imagen: "./img/juegodecomedorclaire.jpeg",
      categoria: { 
        nombre:"Juegos de comedor",
        id: "juegosdecomedor"
      },
      descripcion: "Juego Comedor Mesa de Madera 120 X 80 + 4 Sillas Eames",
      precio: 65777,
      
    },
    
  ]
const divisa = '$';  
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numero = document.querySelector("#numero");


// FUNCION PARA RECORRER EL ARRAY DE PRODUCTOS Y PODER SUMARLOS AL CARRITO

cargarProductos= (productosElegidos) => {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-descripcion">${producto.descripcion}</p>
                <p class="producto-precio">${divisa}${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

// FUNCION PARA PODER FILTRAR POR CATEGORIA DE PRODUCTO

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

// SE UTILIZA PARA PODER CONSERVAR LOS PRODUCTOS ELEGIDOS EN EL CARRITO SI SE ACTUALIZA EL NAVEGADOR (PARA QUE NO SE BORREN)

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumero();
} else {
    productosEnCarrito = [];
}

// ARRAY DE PRODUCTOS AGREGADOS AL CARRITO
function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumero();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

// ACTUALIZA EL NUMERO DE PRODUCTOS ELEGIDOS DENTRO DEL CARRITO
function actualizarNumero() {
    let nuevoNumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerText = nuevoNumero;
}
