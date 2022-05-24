// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(e) {
//     console.log(e.target)
//     e.preventDefault();
//     console.log('enviando formulario');
// })


const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.form');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
// Submit
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    //Validación

    
    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;
    } 
        datos.nombre= ''
        mostrarAlerta('Mensaje enviado con éxito', '')
        return;

   
})    


function leerTexto(e) {
    // console.log(e.target.value)

    datos[e.target.id] = e.target.value;

    
    // console.log(datos)
}


//Mostrar Mensaje
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) 
        alerta.classList.add('error')
    else 
        alerta.classList.add('correcto')    

    formulario.appendChild(alerta);
    
       //Time out
       setTimeout(() => {
        alerta.remove();
    }, 5000);
}




