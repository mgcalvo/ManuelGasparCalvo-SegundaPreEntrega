// Función que calcula el total de la compra
function calcularTotal(arr) {
    let resultado = 0;
    arr.forEach((producto) => {
      resultado += producto.precio * producto.cantidad;
    });
    return resultado;
  }
  
  // lista de productos con sus datos
  const ListaProductos = [
    { id: 1, nombre: "Camperas", precio: 150000, cantidad: 0, stock: 5 },
    { id: 2, nombre: "Zapatillas", precio: 175000, cantidad: 0, stock: 3 },
    { id: 3, nombre: "Remeras", precio: 300000, cantidad: 0, stock: 2 },
  ];
  
  // Carrito de compras donde se guardan los productos seleccionados por el usuario
  const CarritoCompra = [];
  let cantidadTotalProductos = 0; // Variable que representa la cantidad total de productos en el carrito
  
  // Se muestra al usuario las características de los productos
  ListaProductos.forEach((producto) => {
    console.log("Catalogo original de productos: "+"\n\nID:", producto.id);
    console.log("Nombre:", producto.nombre);
    console.log("Precio:", producto.precio);
    console.log("Stock disponible:", producto.stock);
    console.log("------------------");
  });
  
  let rta = "";
  
  do {
    let id = prompt("Ingrese el ID del producto a comprar");
  
    if (!isNaN(id)) {
      if (ListaProductos.some((producto) => producto.id == id)) {
        const producto = ListaProductos.find((producto) => producto.id == id);
  
        // se verifica si el producto tiene stocvk disponible
        if (producto.stock > 0) {
          let cantidad = prompt(`Cuantos desea llevar? (Stock disponible: ${producto.stock}). Este producto no estara disponible una vez que se agoten las existencias`);
          cantidad = parseInt(cantidad);
  
          // Se verifica si la cantidad seleccionada supera el stock disponible
          if (cantidad > producto.stock) {
            alert(`La cantidad seleccionada supera el stock disponible. El stock disponible es: ${producto.stock}`);
          } else {
            producto.cantidad = cantidad;
            producto.stock -= cantidad;
            CarritoCompra.push(producto);
            cantidadTotalProductos += cantidad; // Se suma la cantidad del producto al carrito a la variable cantidadTotalProductos
  
            // Se muestra al usuario la cantidad total de productos en el carrito
            alert(`Producto agregado. Cantidad de productos en el carrito: ${cantidadTotalProductos}`);
          }
        } else {
          alert("Lo siento, este producto no está disponible en este momento.");
        }
      } else {
        alert("ID ingresado no existe.");
      }
    }
  
    rta = prompt(`¿Desea seguir comprando? si/no \n\n${mostrarCarrito()}`);
  
  } while (rta != "no");
  
  // Función que muestra el contenido del carrito de compras
  function mostrarCarrito() {
    let carrito = "";
    CarritoCompra.forEach((producto) => {
      carrito += `${producto.cantidad} x ${producto.nombre} - $${producto.precio} cada uno \n`;
    });
    carrito += `Total: $${calcularTotal(CarritoCompra)}`;
    return carrito;
  }
  
  // Se muestra al usuario el contenido del carrito de compras y el total de la compra
  alert(`Contenido del carrito: \n\n${mostrarCarrito()}`);


 // Mostramos un mensaje de agradecimiento al usuario mediante
alert("¡Gracias por su compra!");