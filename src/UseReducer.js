import React, { Fragment, useEffect, useReducer} from "react";

const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirm: false,
}

const SECURITY_CODE = "paradigma";

function UseReducer({ name }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("iniciando effecto");
    if (!!state.loading) {
      setTimeout(() => {
        console.log("haciendo validacion");
        if (state.value !== SECURITY_CODE) {
          console.log("error validation");
          dispatch({type:'ERROR'});
        } else {
          dispatch({type:'CONFIRM'})
        }
      }, 1500);
    }

    console.log("terminando effecto");
  }, [state.loading]);
 

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Ingresa el codigo de seguridad</p>
        {state.error && <p>Error: codigo incorrecto</p>}
        {state.loading && <p>Loading...</p>}
        <input
          placeholder="Codigo de seguridad"
          value={state.value}
          onChange={(event) => {
            dispatch({
                type: 'WRITE',
                payload: event.target.value,
            })
          }}
        />
        <button
          onClick={() => {
            dispatch({
                type:'CHECK'
            });
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (!state.deleted && !!state.confirmed) {
    return (
      <Fragment>
        <p>Confirm screen</p>
        <button onClick={() => dispatch({type:'DELETE'})}>Delete</button>
        <button onClick={() => dispatch({type:'RESET'})}>Cancel</button>
      </Fragment>
    );
  } else if (!!state.deleted && !!state.confirmed) {
    return (
      <Fragment>
        <p>Successful deletion</p>
        <button onClick={() => dispatch({type:'RESET'})}>Restart the values</button>
      </Fragment>
    );
  }
}

const reducerObject = (state, action) => ({
    'CHECK':{
        ...state,
        loading:true,
        error: false,
    },
    'DELETE':{
        ...state,
        deleted: true,
    },
    'RESET':{
        ...state,
        deleted:false,
        confirmed: false,
        loading: false,
        error: false,
        value: '',
    },
    'CONFIRM':{
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },
    'ERROR':{
        ...state,
        error: true,
        loading: false
    },
    'WRITE':{
        ...state,
        value: action,
      }
});

const reducer = (state, action) => {
    if(reducerObject(state)[action.type]){
        return reducerObject(state, action.payload)[action.type]
    } else {
        return {...state};
    }
}

export { UseReducer };