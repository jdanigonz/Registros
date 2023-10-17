import { clientServices } from "../service/client-service";

const registroProductos = document.querySelector("[data-form]")

registroProductos.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    const nombreProducto = document.querySelector("[data-producto]").value;
    const descripcionProducto = document.querySelector("[data-descripcion]").value;
    const precioProducto = parseFloat(document.querySelector("[data-precio]").value);

    if (isNaN(productPrice)) {
        alert("Porfavor ingresa un precio real.");
        return;
    }

    clientServices
    .crearProducto(nombreProducto, descripcionProducto, precioProducto)
    .then(() => {
        // Redirect to a success page or perform other actions
        window.location.href = "../screens/registrar_producto.html";
    })
    .catch((error) => {
        console.log("Error al registrar producto:", error);
    });

})



