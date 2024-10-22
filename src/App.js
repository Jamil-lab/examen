import logo from './logo.svg';
import './App.css';
import React,{ useRef }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculadora from "./Componentes/Calculadora.js";
import Contador from './Componentes/Contador';
import Camara from './Componentes/Camara';

function App() {

  return (
    <div>
      <Calculadora></Calculadora>
      <Contador></Contador>
      <Camara></Camara>
    </div>
  );
}

export default App;
