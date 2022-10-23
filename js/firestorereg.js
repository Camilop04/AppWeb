import { registersetdoc, registeruser} from "../js/firebase.js";

window.addEventListener('DOMContentLoaded',()=>{

})

const formregistro = document.getElementById('fregistro')

formregistro.addEventListener('submit', (e)=>{
    e.preventDefault()

    const nombre = formregistro['nombre']
    const cedula = formregistro['cedula']
    const dir = formregistro['direccion']
    const tel = formregistro['telefono']
    const dep = formregistro['departamento']
    const ciu = formregistro ['ciudad']
    const rh = formregistro['rh']
    const gen = formregistro['genero']
    const email = formregistro['email']
    const confemail = formregistro['confemail']
    const pass = formregistro ['password']
    const confpass = formregistro ['confpassword']

    registersetdoc(
        nombre.value,
        cedula.value,
        dir.value,
        tel.value,
        dep.value,
        ciu.value,
        rh.value,
        gen.value,
        email.value,
        confemail.value,
        pass.value,
        confpass.value,
        )

        alert("Registro Éxitoso")
        formregistro.reset()
        window.location.href="../index.html"
    
})


const evento = document.getElementById("entrar")

window.addEventListener('DOMContentLoaded',async()=>{
    evento.addEventListener('click',register)
})

async function register(){

    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value
    const pass = document.getElementById("password").value
    const confemail = document.getElementById("confemail").value
    const confpassword = document.getElementById("confpassword").value

    if(email === '' || confemail === '' || pass === '' || confpassword === ''){

        alert("Los campos estan vacios, intente nuevamente ")
        return;
    }

    if(email != confemail){
        alert("Los usuarios no coinciden, intente de nuevo ")
        return;
    
    }
    if(pass != confpassword){
        alert("Las contraseñas no coinciden, intente de nuevo ")
        return;
    }
    if(pass.length <6){
        alert("La contraseña es demasiado corta, debe contener minimo 6 caracteres ")
        return;
    }

    const registro = registeruser(email,pass)
    const validation  = await registro

    if(validation !=null)
    {
        alert("Usuario "+nombre+" registrado exitosamente")
        window.location.href="../index.html"
    }
    else
    {
        alert("Error al registrar usuario, verifique email y/o contraseña")
    }

}





    
