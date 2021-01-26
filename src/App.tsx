import React, { useState } from 'react';
import Child from './views/Child';

var cont2 = 0;

const App: React.FC = () => {

  const [cont, setCont] = useState<number>(0);

  const increment = () => {
    setCont(cont + 1);
    cont2++;
    console.log("cont :>>", cont);
    console.log("cont2 :>>", cont2);
    
  };

  const decrement = () => {
    setCont(cont - 1);
    cont2--;
    console.log("cont :>>", cont);
    console.log("cont2 :>>", cont2);
    
  };



  return (<div>

    <button onClick={increment}>Incrementar</button>
    <h1>state cont: {cont} </h1>
    <h1>variável cont2: {cont2} </h1>
    <button onClick={decrement}>Decrementar</button>
    <Child number={cont} />

  </div>
  
  );


};

export default App;
