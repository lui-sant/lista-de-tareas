const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');
const inputTarea = document.getElementById('input-tarea');


function agregarTarea(){
    if(input.value){
        /*crear tarea*/
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');
      

       /*texto ingresado por el ususario*/ 

        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto); /* appendChild significa agregar al hijo*/
        input.value = ''; //limpia el imput cuando le doy crear la tarea

        
        
        


       /* crear y agregar contenedor de iconos*/

       let iconos = document.createElement('div');
       iconos.classList.add('iconos');
       tareaNueva.appendChild(iconos);


        //iconos
        let completar = document.createElement('i');
        completar.classList.add('bi','bi-check-circle-fill', 'icono-completar'); /*buscar los iconos de bootstrap en el minuto 5:08:51*/ 
        completar.addEventListener('click', completarTarea);

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar'),
        eliminar.addEventListener('click', eliminarTarea);

        iconos.append(completar, eliminar);
        //agregar tarea a la lista
        listaDeTareas.appendChild(tareaNueva);
       


    }else{
        alert('Por favor ingresa una tarea');
    }
}



function completarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada'); /*toggle es para alternar una clasesi la tarea  aparece completada le da eliminary si no tine se va agtregar */

}

function eliminarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}


boton.addEventListener('click', agregarTarea);

input.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        agregarTarea(e);

        input.value = ''; //este hace que el input quede vacio despues de crear la tarea
       
    }
    
});



