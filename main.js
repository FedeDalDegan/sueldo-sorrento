console.log("Programa creado para calcular mi sueldo.");
console.log("© FonohA - 2023.");

let horasTrabajadas = parseFloat(prompt("¿Cuantas horas has trabajado esta semana?"));
let plataPorHora = 650;
let sueldoSemanal = horasTrabajadas * plataPorHora;

function sueldoPorSemana(){

    alert("Esta semana te deberan pagar: $" + sueldoSemanal);
    document.write("Esta semana has trabajado " + horasTrabajadas + " horas" + "<br> Y has ganado $" + sueldoSemanal);

    if(sueldoSemanal == 23400){
        document.write("<br>Has tenido una semana normal");
    }else if(sueldoSemanal < 23400){
        document.write("<br>Has trabajado menos horas de lo normal");
    }else{
        document.write("<br>Has hecho horas extras. ¿Felicidades?");
    }
}

sueldoPorSemana();

