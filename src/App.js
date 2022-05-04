import React from "react";


function App(){
    const var_frase = "String";
    const var_letra = "C";
    const var_num = 63;

    return (
        <div>
            <h1>Segunda Aula</h1>
            <h2>{var_frase}</h2>
            <h2>{var_letra + "LS"} {var_num + 2}</h2>
            <button>Clique aqui</button>

        </div>
    );
}

export default App;