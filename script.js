let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;

let seconds = "00"

                // display

window.onload = () => {
    
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
}
                // timer on

function start() {                  //cambiar tiempo
    
                                    //cambiar el boton
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime -1;

    breackCount = 0;

    let timeFunction = () => {
        
                                    //cambia el display

        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;
        
                                    // arranca

        seconds = seconds -1;

        if (seconds == 0) {

            workMinutes = workMinutes -1;
            if(workMinutes == -1){
                if(breackCount % 2 == 0){
                    
                    //comienza el break
                    workMinutes = breakMinutes;
                    breackCount++

                //aqui, cambia el panel
                workTittle.classList.remove('active');
                breakTittle.classList.add('active');

                }else{ //continua la cuenta
                    workMinutes =workTime;
                    breackCount++

                    //de nuevo, cambia el panel
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                
                }
            }
            seconds = 59;
        }

    }

                                         //empezar a contar
    setInterval(timeFunction, 1000);    // 1000 = 1seg
}