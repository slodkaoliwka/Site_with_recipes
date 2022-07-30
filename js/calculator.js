import React, { useState } from 'react';
import ReactDOM from "react-dom";




const Calculator = () => {
    const [height, setHeight] = useState(0);
    const [mass, setMass] = useState(0);
    const [bmi, setBmi] = useState(0);

    const calculate = (e) => {
        e.preventDefault();
        const formValid = +height > 0 && +mass > 0;
        if (!formValid) {
            return;
        }
        const bmi = (+mass / (+height) ** 2).toFixed(2);
        setBmi(bmi);
    };
    const getResults = (bmi) => {
        let bmiResults = {
            label: '',
            alertClass: '',
        };

        if (bmi <= 18.5) {
            bmiResults.label = 'Niedowaga';
        }
        else if (bmi <= 24.9) {
            bmiResults.label = 'Waga prawid³owa';
        }
        else if (bmi <= 29.9) {
            bmiResults.label = 'Nadwaga';
        }
        else if (bmi >= 30) {
            bmiResults.label = 'Oty³oœæ';
        } else {
            bmiResults.label = 'BMI';
        }

        return bmiResults;
    }
    let result = getResults;

    return (
        <div class="calculator">
            <form onSubmit={calculate} class='calculator-form'>
                <h3>Kalkulator BMI</h3>
                <div class='height'>
                    <label>Wzrost w metrach: </label>
                    <input type='number' class='input' value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>

                <div class='weight'>
                    <label>Waga w kilogramach: </label>
                    <input type='number' class='input' value={mass} onChange={(e) => setMass(e.target.value)} />
                </div>

                <button type="submit">Oblicz</button>
            </form>
            <div class='result'>
            <h3>Twoje BMI wynosi: {bmi}</h3>
            <div class="result-info">
                <getResults bmi={bmi} label={result.label} alertClass={result.alertClass} />
                </div>
            </div>
            <img src='../images/bmi-co-to.webp' class=' bmi-image'/>
        </div>
    );
}


ReactDOM.render(<Calculator />, document.getElementById("calculator"));

