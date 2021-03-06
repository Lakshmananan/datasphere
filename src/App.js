import React, { useEffect } from 'react';
import './App.css';

import Test from './components/Test';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <div>
      <Test />
    </div>
  );
}

export default App;
