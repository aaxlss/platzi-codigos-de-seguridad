import React, { Fragment, useEffect, useReducer} from "react";

const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirm: false,
}

const actionTypes = {
    CONFIRM: 'CONFIRM',
    CHECK: 'CHECK',
    DELETE: 'DELETE',
    RESET: 'RESET',
    CONFIRM: 'CONFIRM',
    ERROR: 'ERROR',
    WRITE: 'WRITE',
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
          dispatch({type:actionTypes.ERROR});
        } else {
          dispatch({type:actionTypes.CONFIRM})
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
                type: actionTypes.WRITE,
                payload: event.target.value,
            })
          }}
        />
        <button
          onClick={() => {
            dispatch({
                type: actionTypes.CHECK
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
        <button onClick={() => dispatch({type: actionTypes.DELETE})}>Delete</button>
        <button onClick={() => dispatch({type: actionTypes.RESET})}>Cancel</button>
      </Fragment>
    );
  } else if (!!state.deleted && !!state.confirmed) {
    return (
      <Fragment>
        <p>Successful deletion</p>
        <button onClick={() => dispatch({type: actionTypes.RESET})}>Restart the values</button>
      </Fragment>
    );
  }
}

const reducerObject = (state, action) => ({
    [actionTypes.CHECK]:{
        ...state,
        loading:true,
        error: false,
    },
    [actionTypes.DELETE]:{
        ...state,
        deleted: true,
    },
    [actionTypes.RESET]:{
        ...state,
        deleted:false,
        confirmed: false,
        loading: false,
        error: false,
        value: '',
    },
    [actionTypes.CONFIRM]:{
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },
    [actionTypes.ERROR]:{
        ...state,
        error: true,
        loading: false
    },
    [actionTypes.WRITE]:{
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