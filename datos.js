function guardarDatos(){
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const saldo = document.getElementById('saldo').value;

    localStorage.setItem('nombre',nombre);
    localStorage.setItem('apellido',apellido);
    localStorage.setItem('saldo',saldo);

    window.location.href = '../html/funciones.html';
}