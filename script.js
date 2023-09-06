const ENDPOINT="https://jsonplaceholder.typicode.com/users"
function enviarFormulario(direccion,datos){
    fetch(direccion,
        {
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body:JSON.stringify(datos),
    }).then(function(res){ return res.json();})
    .then(function(data){ console.log( data ) })
}

document.addEventListener("DOMContentLoaded",()=>{
    const nameTxt=document.getElementById("name");
    const lastNameTxt=document.getElementById("apellido");
    const nacimientoDate=document.getElementById("fechaNac");
    const formulario=document.getElementById("formulario");
    const boton=document.getElementById("enviar");
    boton.addEventListener("click",(e)=>{
        e.preventDefault();
        let name=nameTxt.value;
        let lastName=lastNameTxt.value;
        let nacimiento=nacimientoDate.value;
        let infoPersona={
            nombre:name,
            apellido:lastName,
            fechaDeNacimiento:nacimiento
        };
        enviarFormulario(ENDPOINT,infoPersona); 
    })
})