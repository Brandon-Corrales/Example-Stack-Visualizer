
let stack = []; // Arreglo que simula una pila

// Función para renderizar la pila en la interfaz
function renderStack() {
    const stackContainer = document.getElementById('stack-container');
    stackContainer.innerHTML = ''; // Borra cualquier contenido anterior en el contenedor de la pila

    // Itera sobre cada elemento de la pila en orden inverso para que los elementos se apilen uno encima del otro
    for (let i = stack.length - 1; i >= 0; i--) {
        const stackItem = document.createElement('div');
        stackItem.classList.add('stack-item');
        stackItem.innerText = stack[i];
        stackContainer.appendChild(stackItem); // Agrega el elemento al final del contenedor
    }
}

// Función para añadir un elemento a la pila
function pushItem() {
    const newItem = prompt('Ingrese valores al Stack:'); // Pide al usuario ingresar un valor
    if (newItem !== null && newItem !== '') { // Verifica que el valor ingresado no sea nulo ni vacío
        stack.push(newItem); // Agrega el nuevo elemento al final de la pila (último que entra)
        renderStack(); // Renderiza la pila actualizada en la interfaz
        const stackContainer = document.getElementById('stack-container');
        const newStackItem = stackContainer.firstChild; // Obtén el primer elemento de la pila
        newStackItem.classList.add('added'); // Agrega la clase para la animación de agregado
        setTimeout(() => {
            newStackItem.classList.remove('added'); // Quita la clase después de 0.3 segundos
        }, 300);
        
    }
}

// Función para eliminar un elemento de la pila
function popItem() {
    if (stack.length > 0) { // Verifica si la pila tiene elementos
        const stackContainer = document.getElementById('stack-container');
        const removedStackItem = stackContainer.firstChild; // Obtén el primer elemento de la pila
        removedStackItem.classList.add('removed'); // Agrega la clase para la animación de eliminación
        setTimeout(() => {
            stackContainer.removeChild(removedStackItem); // Elimina el primer elemento del DOM después de 0.3 segundos
            stack.shift(); // Elimina el primer elemento de la pila (último que entró)
        }, 300);
    } else {
        alert('Stack vacío! Ingrese datos para habilitar la función Pop'); // Muestra un mensaje si la pila está vacía
    }
}




// Función que se ejecuta cuando la página se carga completamente
window.onload = function() {
    renderStack(); // Renderiza la pila inicial en la interfaz al cargar la página
};