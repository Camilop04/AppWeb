import { registeruser } from "../js/firebase.js";

const evento = document.getElementById("registerbtn")

async function register(){

    const user = document.getElementById("user").value
    const pass = document.getElementById("password").value
    const confirmuser = document.getElementById("confirmuser").value
    const confirmpassword = document.getElementById("confirmpassword").value

    if(user === '' || confirmuser === '' || pass === '' || confirmpassword === ''){

        alert("Los campos estan vacios, intente nuevamente ")
        return;
    }

    if(user != confirmuser){
        alert("Los usurarios no coinciden, intente de nuevo ")
        return;
    
    }
    if(pass != confirmpassword){
        alert("Las contraseñas no coinciden, intente de nuevo ")
        return;
    }
    if(pass.length <6){
        alert("La contraseña es demasiado corta, debe contener minimo 6 caracteres ")
        return;
    }

    const registro = registeruser(user,pass)
    const validation  = await registro

    if(validation !=null)
    {
        alert("User resgister succesfull"+user)
        window.location.href="../index.html"
    }
    else
    {
        console.log("register "+user+"not validation")
        alert("Error de usuario verifique y/o contraseña")
    }

}

window.addEventListener('DOMContentLoaded',async()=>{

    evento.addEventListener('click',register)
})