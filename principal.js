var countdownFecha= new Date('2023-10-29T18:00:00').getTime();

var x = setInterval(function() {
    var ahora= new Date().getTime();
    var distancia= countdownFecha - ahora;

    var dias= Math.floor(distancia / (1000 * 60 * 60 * 24));
    var horas= Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos= Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('dias').innerHTML = dias;
    document.getElementById('horas').innerHTML = horas;
    document.getElementById('minutos').innerHTML = minutos;

    if (distancia < 0) {
        clearInterval(x);
        document.getElementById('countdown').innerHTML = 'Mi cumple ha comenzado';
    }

}, 1000);