//local Storage Variable
let l = localStorage;

const formularioContacto = document.getElementById("idFormulario"); //ACA CAPTURAMOS EL ID
const btnEnviar = document.getElementById("botonEnviar") // ACA CAPTURAMOS EL BOTON ENVIAR DESDE EL HTML DOM
//ACA SE AGREGA UN EVENTO ADDLISTENNER


formularioContacto.addEventListener("submit",(e)=>{
    e.preventDefault();
    agregarUsuario(); 
});


class Usuario { 
    constructor(id, nombre, apellido, email, contrasenia) {
        this.id = id,
            this.nombre = nombre,
            this.apellido = apellido,
            this.email = email,
            this.contrasenia = contrasenia

    }

    mostrarDatosObjetos() {
        console.log(`El registro N°${this.id} el nombre del usuario es ${this.nombre} apellido ${this.apellido} Email de registro ${this.email} contraseña ${this.contrasenia}`)
    }
}


//interaciones con los libros.

const Objeto1 = new Usuario(1, "Mauro", "Harmitton", "mauro.harmittonbr@gmail.com", 11111)

const Objeto2 = new Usuario(2, "Pepe", "Benedetti", "pepebenedeti@gmail.com", 22222)

const Objeto3 = new Usuario(3, "Juan", "Diablo", "juand@gmail.com", 33333)

const Objeto4 = new Usuario(4, "Pagani", "Zonda", "pagani@gmail.com", 44444)

const Objeto5 = new Usuario(5, "Alberto", "Ferraro", "alber@gmail.com", 55555)

const Objeto6 = new Usuario(6, "Pedro", "Corola", "corola@gmail.com", 66666)

const usuarios = [Objeto1, Objeto2, Objeto3, Objeto4, Objeto5, Objeto6] // ESTO ES UN ARRAY CON PARAMETROS 

localStorage.setItem('usuarios',JSON.stringify(usuarios)) //ESTA ES LA MANERA DE GUARDAR EN EL LOCALSTORAGE


//dentro de una funcion se agregan las capturas de ID o CLASS, y se crea un ARRAY "CONST USUARIO NUEVO = NEW USUARIO (usuarios.lenght+1, ETC)"
//y tambien se puede definir donde guardar la informacion dependiendo del tipo de guardado, en este caso lo guardamos dentro del Localstorage
//tambien pusheamos el nuevo usuario a nuestro array.
function agregarUsuario() {
    let nombreUsuario = document.getElementById("validacionNombre").value
    let apellidoUsuario = document.getElementById("validacionApellido").value
    let emailUsuario = document.getElementById("validacionMail").value
    let contraseniaUsuario = document.getElementById("validacionPassword").value
    
    const usuarioNuevo = new Usuario(usuarios.length + 1, nombreUsuario, apellidoUsuario, emailUsuario, contraseniaUsuario) // SE LE PASAN PARAMETROS
    usuarioNuevo.mostrarDatosObjetos()
    console.log(usuarioNuevo) // PARA VER EN CONSOLA
    usuarios.push(usuarioNuevo) //ACA SE PUSHEA DE USUARIOS.PUSH el USUARIO NUEVO.
    localStorage.setItem("usuarios", JSON.stringify(usuarios)) //ACA SE GUARDA EN EL LOCAL STORAGE DENTRO DE LA FUNCTION


    //cambiar el dom html y poner mensage de gracias por registrarse
}

function verUsuario(array) {
    console.log(`Registro de Usuario, email y contraseña`)
    for (let usuario of Usuario) {
        console.log(usuario.id, usuario.nombre, usuario.apellido, usuario.email, usuario.contraseña)
    }
}
