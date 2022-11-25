import React, { useEffect, useState } from "react";

const SECURITY_CODE = 'paradigma'

function UseState ({name}){
    const [error, setError] = useState(false);
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log('iniciando effecto');
        if(!!loading){
            setTimeout(()=>{
                console.log('haciendo validacion');
                if (value !== SECURITY_CODE){
                    setError(true);   
                }
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
            {error && <p>Error: codigo incorrecto</p>}
            {loading && <p>Loading...</p>}
            <input 
            placeholder="Codigo de seguridad"
            value={value}
            onChange={(event) =>setValue( event.target.value) }
            />
            <button onClick={() => {
                setLoading(true);
                setError(false);
                }}>Comprobar</button>
        </div>
    )
}

export {UseState}