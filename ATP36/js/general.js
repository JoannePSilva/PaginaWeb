var viagens = [];

function salvar(event){
    event.preventDefault();
    let identificador = document.getElementById('id')
    let lugar = document.getElementById('lugar')
    let estadia = document.getElementById('estadia')
    let preco = document.getElementById('preco')

    if(id.value >= 1){
        viagem = {"Identificador": identificador.value, "Lugar": lugar.value, "Período de estadia": estadia.value, "Valor": preco.value}
        viagens.push(viagem);
        console.log(viagem)

    }else{
        alert('Id digitado incorreto')
    }

    
}