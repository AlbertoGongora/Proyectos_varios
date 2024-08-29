const actualizador = setInterval(function(){

    //tiempo de inicio en milisegundos
    const proximoEvento = new Date('december 24, 2024 00:00:00').getTime();
    console.log(proximoEvento);

    //tiempo de ahora en milisegundos

    const tiempoActual = new Date().getTime();
    console.log(tiempoActual);

    //direrencia entre el inicio y el tiempo actual;

    let tiempoRestante = proximoEvento - tiempoActual;
    console.log(tiempoRestante);

    //Convertimos los milisegundos en segundos 1s = 1000 ms;

    tiempoRestante /=1000;
    const dia = 60*60*24
    const hora = 60*60
    const segundo = 60
    console.log(tiempoRestante);

    //Calculamos los dias restantes

    const dias = Math.floor(tiempoRestante/(dia));
    console.log(dias);

    //Calculamos las horas restantes

    const horas = Math.floor((tiempoRestante%(dia))/(hora));
    console.log(horas);

    //Calculamos los minutos restantes

    const minutos = Math.floor((tiempoRestante%(hora))/segundo)
    console.log(minutos);

    //Calculamos los segundos restantes

    const segundos = Math.floor(tiempoRestante%(segundo))
    console.log(segundos);

    const contador = document.getElementById('contador');

    contador.innerHTML = `
    <div>
    <span>${dias}</span>
    <span class='texto'>Dias</span>
    </div>
    <div>
    <span>${horas}</span>
    <span class='texto'>Horas</span>
    </div>
    <div>
    <span>${minutos}</span>
    <span class='texto'>Minutos</span>
    </div>
    <div>
    <span>${segundos}</span>
    <span class='texto'>Segundos</span>
    </div>
    `;
}, 1000);
