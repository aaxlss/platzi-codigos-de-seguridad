import logo from './logo.svg';
import { UseState } from './UseState';
// import { ClassState } from './ClassState';
import { UseReducer } from './UseReducer';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name={"UseState"}/>
      {/* <ClassState name={"ClassState"}/> */}
      <UseReducer name={'Use Reducer'}/>
    </div>
  );
}

export default App;
