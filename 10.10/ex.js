// ex 1 - LOOP WHILE e CONDICIONAIS




// ex 2 - creie um çoop while que fara uma contagem de 10 a 0, quando chegar a zero, o loop para e imprima a mensagem "BOOOOM" antes disso 



let tempo = 10

while ( tempo >=0 ){
    if(tempo ==0){

        console.log(`BBOOOOOOMMM`)
    } 

    else if (tempo % 2 == 0){
        
       console.log(`tic`)} 
    
     else {
console.log(`tac`)

    }
tempo--;
  }




  /// tabuada com uma função de um número

  function imprimirTabuada (numero) {
for (let i = 1; i <= 10; i++){
console.log(`${numero} X ${i} = ${numero * i}`)

}

  }


  imprimirTabuada(14)