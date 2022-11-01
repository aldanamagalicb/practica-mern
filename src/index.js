import React from 'react'; //importo modulos
import ReactDOM from 'react-dom/client'; //importo modulos
import './index.css'; //los unicos que se importa directamente. 
import App from './App'; //acá importo otro componente.

//La estructura de lo que se importa es la siguiente:
// 1. escribo la palabra import (REACT viene en modules)
// 2. el nombre de lo que necesito
// 3. escribo la palabra FROM (desde donde lo estoy importando)
// 4. escribo la ruta de lo que necesito.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

//todo lo que necesite se importa y se exporta.

