

// const listaClientes=()=>{
//     const promise = new Promise ((resolve,reject)=>{
//         const http =new XMLHttpRequest();
//         http.open("GET","http://localhost:3000/perfil");
//         http.send();
//         http.onload=()=>{
//             const response = JSON.parse(http.response) ;
//             if (http.status>= 400){
//                 reject(response)
//             }else{
//                 resolve(response)
//             }
//         };
//     });
//     return promise;
// }




const listaClientes =()=> fetch("http://localhost:3000/perfil").then(respuesta=>respuesta.json());

const crearCLiente=(nombre,email)=>{
    return fetch("http://localhost:3000/perfil",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({nombre,email, id: uuid.v4()}),

    });
};

const eliminarCliente=(id)=>{
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE"
    });
};

const detalleCliente=(id)=>{

    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta)=>
    respuesta.json());
};

const registroProductos =(id)=>{
    return fetch(`http://localhost:3000/perfil/${id}`,)
}

const actualizarCLiente=(nombre,email,id)=>{
    return fetch(`http://localhost:3000/perfil/${id}`,{

        method:"PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({nombre,email}),
    })
    .then((respuesta)=>(respuesta))
    .catch((error)=>console.log(error))

}




export const clientServices={
    listaClientes,
    crearCLiente,
    detalleCliente,
    actualizarCLiente,
    eliminarCliente,
    registroProductos
};





