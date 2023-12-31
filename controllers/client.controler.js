import { clientServices } from "../service/client-service.js";
console.log(clientServices)
const crearNuevaLinea =(nombre, email, id) =>{
    const linea =document.createElement('tr');
    const contenido = `
    <td class="td" data-td>
        ${nombre}
        </td>
            <td>${email}</td>
            <td>
            <ul class="table__button-control">
                <li>
                <a
                    href="../screens/editar_cliente.html?id=${id}"
                    class="simple-button simple-button--edit"
                    >Editar</a
                >
                </li>
                <li>
                <button
                    class="simple-button simple-button--delete"
                    type="button" id="${id}">
                    Eliminar
                </button>
                </li>
            </ul>
            </td>
    `;
linea.innerHTML= contenido;
const btn = linea.querySelector("button");
btn.addEventListener("click",()=>{
    const id = btn.id;

    clientServices.eliminarCliente(id).then(respuesta=>{
        console.log(respuesta)
    }).catch (error => console.log("ERROR"));

});

return linea;
};
const table =document.querySelector("[data-table]")
//create - post
// read - get 
//update - put/patch
//delete - delete
clientServices
.listaClientes()
    .then((data)=>{
        data.forEach((perfil)=> {
            const nuevaLinea=crearNuevaLinea(perfil.nombre,perfil.email,perfil.id);
            table.appendChild(nuevaLinea); 
        });
    })
.catch((error)=>alert("error")); 