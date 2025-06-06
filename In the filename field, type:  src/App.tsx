import React from 'react';

function App() {
  return (
    <div>
      <h1>Curiosity Code Index - Companion App</h1>
      <p>Your assessment results indicate how each of the FATE (Fear, Assumptions, Technology, Environment) factors may be affecting your curiosity.</p>
      <button onClick={() => window.location.href='https://curiositycode.com'}>Get Your Full Report</button>
    </div>
  );
}

export default App;
