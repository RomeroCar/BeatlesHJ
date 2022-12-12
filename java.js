function saludar(nombre, apellido) {
    console.log("Hola" + nombre + "" + apellido);
    alert("Hola" + nombre + "" + apellido)
}
saludar("Tulio", "Ortiz")
saludar("Compañeros")

window.onload = function() {
    alert('Este es el grupo 4');
}

window.onload = function() {
    setTimeout('funcionProgramada()'), hora();
}

function hora() {
    horaActual = new Date();
    horaProgramada = new Date();
    horaProgramada.setHours(8);
    horaProgramada.setMinutes(0);
    horaProgramada.setSeconds(0);
    return horaProgramada.getTime() - horaActual.getTime();
}

function funcionProgramada() {
    alert('Grupo Numero 4')
}


