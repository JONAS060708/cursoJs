

var modeloHumano = {
    etnia:'',
    gênero:'',
    saúde: 10,
    inteligencia: 10   

}

function mulherParda(nome) {
    modeloHumano.nome = nome
    modeloHumano.etnia = 'pardo'
    modeloHumano.gênero = 'feminino'
    
    return modeloHumano
}

function homemPardo(nome) {
    modeloHumano.nome = nome
    modeloHumano.etnia = 'pardo'
    modeloHumano.gênero = 'masculino'
    
    return modeloHumano   
}
function atirar(tiro=0, nome ) {
if (modeloHumano.nome == nome) {
    switch (tiro) {
        case 1:
            modeloHumano.saúde -= tiro
            
            break;
        case 2:
            modeloHumano.saúde -= tiro
            
            break;
        default:
            console.log(`sem balas ${tiro}`)
            break;
    } 
    console.log(modeloHumano)
}else{
    console.log(`este nome : ${nome} não existe! `)
}
    
}



mulherParda('Jacinta')
atirar(1,'Jacinta')

homemPardo('joao')
atirar(2,'joao')
