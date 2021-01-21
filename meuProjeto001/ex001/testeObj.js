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



console.log(mulherParda('Jacinta'))

console.log(homemPardo('joao'))

