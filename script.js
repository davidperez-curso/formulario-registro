function validar(){
    var nombre, apellido, usuario, contraseña, telefono, correo
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;
    telefono = document.getElementById("telefono").value;
    correo = document.getElementById("correo").value;
    if (nombre === ""){alert("Todos los campos son obligatorios");return false;}
    else if (nombre.length>30){alert("El nombre es muy largo");return false;}
    else if (apellido === ""){alert("Todos los campos son obligatorios");return false;}
    else if (apellido.length>40){alert("El apellido es muy largo");return false;}
    else if (usuario === ""){alert("Todos los campos son obligatorios");return false;}
    else if (usuario.length>20){alert("El apellido es muy largo");return false;}
    else if (contraseña === ""){alert("Todos los campos son obligatorios");return false;}
    else if (telefono === ""){alert("Todos los campos son obligatorios");return false;}
    else if (telefono.length>15){alert("El teléfono es muy largo");return false;}
    else if (/^([a-z])*$/.test(telefono)){alert("Ingrese sólo números en la casilla teléfono");return false;}
    else if (correo === ""){alert("Todos los campos son obligatorios");return false;}
    else if (correo.length>50){alert("El correo es muy largo");return false;}
    else if (correo.includes("@" , ".")); else {alert("correo invalido, siga el ejemplo: correo@dominio.cl");return false};
    alert("bienvenido "+nombre+' '+apellido+' '+"tu usuario es "+usuario+' '+"y tu contraseña es "+contraseña); 
}

/*function validar(){
    var correo
    correo = document.getElementById("correo").value;
    if (correo === ""){alert("Todos los campos son obligatorios");return false;}
    else if (correo.includes("@" , "."))return true; else {alert("correo invalido")} 
} */
/*function validar(){
    var telefono
    telefono = document.getElementById("telefono").value;
    if (telefono === ""){alert("Todos los campos son obligatorios");return false;}
    else if (telefono.length>15){alert("El teléfono es muy largo");return false;}
    else if (telefono >= 0)return true; else {alert("ingrese sólo números")}
} */