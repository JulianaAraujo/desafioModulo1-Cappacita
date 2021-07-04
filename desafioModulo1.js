module.exports.retornaLista = (dadosClientes) => { 
    
    dadosClientesfinal = []

    for (var i=0; i < dadosClientes.length; i++){ 
    if (dadosClientes[i].idade>=18 && dadosClientes[i].idade<=26){
       dadosClientesfinal.push(dadosClientes[i])
    }
}
return dadosClientesfinal
}
    

   
    
    
    