onload = () =>{
        document.body.classList.remove("container");
};
window.onload = function() {
        var audio = new Audio('tu-cancion.mp3');
        audio.loop = true;
        audio.play();
};