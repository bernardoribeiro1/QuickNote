import React from "react";
//Declarar variavel
//let
//const é a melhor
//var

let numero = 0;

function clicou(dividir){
    numero += 1;
    let dividido; //melhor jeito é delcarar antes e usar o LET 

    if(dividir === true){
        // var dividido = numero / 2;//var tem escopo global, o let não, mas não é bom usar
        dividido = numero / 2;
    }

    alert(numero);
    alert(dividido);
}
function App(){

    return(
        <div>
        <h1>Mais coisa de variaveis</h1>
        <button onClick ={() => clicou(false)}
        >+ um
        </button>

        <button onClick ={() => clicou(true)}
        >+ um e divide
        </button>
            
        </div>
    );
}

export default App;