// IF pode ser utilizado sozinho
// Else sempre que utilizado a palavra else preciso de um if antes
// Eu posso ter varios elses e ifs na checage
// só pode haver um else na checagem 



Dia = async () => {
    console.log("Bom dia!!!")
}

Tarde = async () => {
    console.log("Boa tarde!!!")
}

Noite = async () => {
    console.log("Boa Noite!!!")
}

const hora = 20;


if(hora < 11){
    Dia()
}
else{
    if(hora > 11 && hora < 17){
        Tarde()
    }
    else{
        if(hora > 17){
            Noite()
        }
    }
}