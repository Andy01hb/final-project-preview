// src/App.js
import React from 'react';
import './App.css'; // Importa tus estilos si es necesario
import ContactForm from './ContactForm'; // Importa el componente ContactForm

function App() {
  return (
    <div className="App">
      <h1>Coliving Contact</h1>
      <ContactForm hostName="Carlos García" location="Ciudad de México" />
    </div>
  );
}

export default App;
