import React from 'react';
import { useState } from 'react';

//Como cada boton tiene su propio estado, al precionar cada botos cambia su estado
export default function MyButton() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <ActionButton />
      <ActionButton />
    </div>
  );
}

function ActionButton() {
  const [count, setCount] = useState(0);
  //Con useState le asigno el valor al count

  function handleClick() {
    setCount(count + 1); //Con setCount le cambio el valor al count
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}
