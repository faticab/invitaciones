var botonEntrada= document.getElementById('botonEntrada');
var nombre= document.getElementById('nombre');
var video= document.getElementById('video');

botonEntrada.addEventListener('click', function() {
    botonEntrada.style.display= 'none';
    nombre.style.display= 'none';
    video.style.display='block';
    video.play();
    video.addEventListener('ended', function() {
        window.location.href = 'principal.html';
    });
});
