//const TresHoras = 60 * 60 * 3 * 1000 
//const UmDia = 60 * 60 * 24 * 1000
/*
function TresHoras (){
    const Th = 60 * 60 *3 * 1000
    return Th
}

function UmDia (){
    const Ud = 60 * 60 * 24 * 1000
    return Ud
}


const data = new Date(0 + TresHoras() + UmDia()) // 01/01/1970 TimeStamp unix ou época unix
console.log(data.toString())*/

// mes = 0 = janeiro, mes = 11 = Dezembro
//const Data = new Date(2025, 4, 27, 0, 0 ) // Ano, Mês, Dia, Horas, Minutos, Segundos, Milesimos de segundos

/*const Data = new Date(1742006743692)
console.log('Dia', Data.getDate())
console.log('Mês', Data.getMonth() + 1) // Més começa no Sabado
console.log('Ano', Data.getFullYear())
console.log('Hora', Data.getHours())
console.log('Minuto', Data.getMinutes())
console.log('Segundos', Data.getSeconds())
console.log('MIle Segundos', Data.getMilliseconds())
console.log('Dia da Semana', Data.getDay()) // 0 - Domingo, 6 - Sabado 
console.log(Data.toString())
console.log(Date.now())*/


function ZeroAEsquerda (num) {
    return num >= 10  ? num : `0${num}`;
}

function FormataData(data){
    const dia = data.getDate() 
    const mês = (data.getMonth() + 1)
    const ano = data.getFullYear()
    const hora = data.getHours()
    const minuto = data.getMinutes()
    const segundos = data.getSeconds()

    return ` ${dia}/${mês}/${ano}/${hora}/${minuto}/${segundos}`

}

const data = new Date()
const dataBrasil = FormataData(data)
console.log(dataBrasil)