
import './App.css';
import React from 'react';
import axios from 'axios';
import styledComponents from 'styled-components';
import ListaDeViagens from './componentes/ListaDeViagens';


function App() {
  return (
    <div className="App">
      <h1>Olá, <br/> escolha seu primeiro destino:</h1>
      <button>Área Administrativa</button>
      <button>Lista de Viagens</button> 
    </div>
  );
}

export default App;
