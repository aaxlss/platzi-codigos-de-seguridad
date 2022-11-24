import React, { useState } from "react";

function UseState ({name}){
    const [error, setError] = useState(false);
    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Ingresa el codigo de seguridad</p>
            {error && <p>Erorr: codigo incorrecto</p>}
            <input placeholder="Codigo de seguridad"/>
            <button onClick={() => setError(prev => !prev)}>Comprobar</button>
        </div>
    )
}

export {UseState}