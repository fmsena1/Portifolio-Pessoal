import React from 'react'
import EstruturaPagina from './componentes/EstruturaPagina';

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <EstruturaPagina>
        <Home></Home>
      </EstruturaPagina>
    
    </div>
  );
}

export default App;
