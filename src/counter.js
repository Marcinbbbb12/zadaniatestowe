import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0); // Ustawienie początkowego stanu na 0

    const increment = () => {
        setCount(prevCount => prevCount + 1); // Zwiększanie licznika
    };

    const decrement = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : prevCount)); // Zmniejszanie licznika, ale nie poniżej 0
    };

    return (
        <div style={{ margin: '20px 0' }}>
            <h1>Licznik: {count}</h1>
            <button onClick={increment}>Zwiększ</button>
            <button onClick={decrement}>Zmniejsz</button>
        </div>
    );
}