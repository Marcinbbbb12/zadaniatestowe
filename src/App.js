import React, { useState } from 'react';
import useDarkMode from './useDarkMode';
import licznikint from './licznikint';
import counter from './counter'; // Importuj komponent Counter

const ThemeToggle = () => {
    const { theme, toggleTheme } = useDarkMode();
    return (
        <div
            style={{
                background: theme === 'dark' ? '#000' : '#fff',
                color: theme === 'dark' ? '#fff' : '#000',
                padding: '10px',
                margin: '20px 0',
            }}
        >
            <button type="button" onClick={toggleTheme}>
                Przełącz na {theme === 'dark' ? 'jasny' : 'ciemny'} motyw {/*przelaczanie motywu z jasnego na ciemny, funkcja znajduje sie w pliku useDarkMode.js*/}
            </button>
        </div>
    );
};

const App = () => {
    const fixedDate = new Date('1900-03-23');
    const [result, setResult] = useState('');
    const { count, startCount, stopCount } = licznikint(10); // Countdown ze startowym czasem 10 sekund

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
            <h1>Podstawowa aplikacja testowa</h1>
            <counter /> {/* Dodanie komponentu licznika */}
            <div>
                <p>Odmierzanie: {count}</p>
                <button onClick={startCount}>Rozpocznij odmierzanie</button> {/*po kliknieciu przycisku zaczyna sie odliczanie od ustalonej liczby do 0*/}
                <button onClick={stopCount}>Zatrzymaj odmierzanie</button>
            </div>
            <button onClick={calculateDifference}>Oblicz różnicę</button>
            <p>{result}</p>
        </div>
    );
};

const MainApp = () => {
    return (
        <div>
            <ThemeToggle />
            <App />
        </div>
    );
};

export default MainApp;