document.getElementById('latitud').addEventListener('input', mostrarMapa);
document.getElementById('longitud').addEventListener('input', mostrarMapa);

function mostrarMapa() {
    const longitud = document.getElementById('longitud').value;
    const latitud = document.getElementById('latitud').value;
    if (!isNaN(longitud) && !isNaN(latitud) && longitud !== "" && latitud !== "") {
        const apiKey = 'AIzaSyBQzTbdQar25jWNJNXUsZzISrReYomhOGc'; // Reemplaza esto con tu clave de API válida
        const src = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${latitud},${longitud}`;
        document.getElementById('map-container').innerHTML = `<iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="${src}"></iframe>`;
    } else {
        document.getElementById('map-container').innerHTML = ""; // Limpiar el iframe si los datos no son válidos
    }
}
