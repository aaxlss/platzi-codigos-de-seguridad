import React, { useEffect, useState } from "react";

function UseState ({name}){
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('iniciando effecto');
        if(!!loading){
            setTimeout(()=>{
                console.log('haciendo validacion');
                setLoading(false)
                console.log('Terminando validacion');
            },1500)
        }
        
        console.log('terminando effecto');
    }, [loading]);
    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Ingresa el codigo de seguridad</p>
            {error && <p>Erorr: codigo incorrecto</p>}
            {loading && <p>Loading...</p>}
            <input placeholder="Codigo de seguridad"/>
            <button onClick={() => setError(prev => !prev)}>Comprobar</button>
        </div>
    )
}

export {UseState}