import React, { useState } from 'react';

function App() {
    const fixedDate = new Date('1900-03-23');
    const [result, setResult] = useState('');

    const calculateDifference = () => {
        const today = new Date();

        let years = today.getFullYear() - fixedDate.getFullYear();
        let months = today.getMonth() - fixedDate.getMonth();
        let days = today.getDate() - fixedDate.getDate();


        if (days < 0) {
            months--;
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += lastMonth.getDate();
        }


        if (months < 0) {
            years--;
            months += 12;
        }

        setResult(`Od dnia 23.03.1900 minęło: ${days} dni, ${months} miesięcy oraz ${years} lat.`);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Oblicz różnicę czasu</h1>
            <button onClick={calculateDifference}>Oblicz</button>
            <p>{result}</p>
        </div>
    );
}

export default App;