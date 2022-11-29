import React, { Fragment, useEffect, useState } from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [state, setState] = useState({
    error: false,
    value: "",
    loading: false,
    deleted: false,
    confirmed: false,
  });

  useEffect(() => {
    console.log("iniciando effecto");
    if (!!state.loading) {
      setTimeout(() => {
        console.log("haciendo validacion");
        if (state.value !== SECURITY_CODE) {
          console.log("error validation");
          setState({
            ...state,
            error: true,
            loading: false,
          });
        } else {
          setState({
            ...state,
            confirmed: true,
          });
        }
      }, 1500);
    }

    console.log("terminando effecto");
  }, [state.loading]);

  const onSetValue = (newValue) => {
    setState({
      ...state,
      value: newValue,
    });
  };
  const onValitateValue = () => {
    setState({
      ...state,
      loading: true,
      error: false,
    });
  };
  const onDelete = () => {
    setState({
      ...state,
      deleted: true,
      confirmed: true,
    });
  };

  const onRevert = () => {
    setState({
      ...state,
      deleted: false,
      confirmed: false,
      loading: false,
    });
  };
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
            onSetValue(event.target.value);
          }}
        />
        <button
          onClick={() => {
            onValitateValue();
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
        <button onClick={() => onDelete()}>Delete</button>
        <button onClick={() => onRevert()}>Cancel</button>
      </Fragment>
    );
  } else if (!!state.deleted && !!state.confirmed) {
    return (
      <Fragment>
        <p>Successful deletion</p>
        <button onClick={() => onRevert()}>Restart the values</button>
      </Fragment>
    );
  }
}

export { UseState };
