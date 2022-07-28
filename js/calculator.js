//import React, { useState } from 'react';
import ReactDOM from "react-dom";

//const Calculator = () => {
//    const [numA, setNumA] = useState();
//    const [numB, setNumB] = useState();
//    //let result = (numA/(numB*numB));

// return(
//     <form class="container">
//         <h1>Kalkulator BMI</h1>
//         <p>Kalkulator BMI, czyli Body Mass Index. To narzêdzie daj¹ce mo¿liwoœæ szybkiego i wygodego obliczenia w³asnego wskaŸnika masy cia³a. BMI obliczamy dziel¹c masê cia³a (w kilogramach) przez wzrost do kwadratu (w metrach).</p>
//            <label class="weight">Waga (kg):</label>
//            <input type="text" onChange={e => setNumA(Number(e.target.value))} value="waga" /><br/>
//            <label class="height" >Wzrost (m):</label>
//         <input type="text" onChange={e => setNumB(Number(e.target.value))} value="wzrost" /><br />
//         <h2>{(numA / (numB * numB))}</h2>
//        </form>
//    );
//    switch ((numA / (numB * numB))) {
//        case ((numA / (numB * numB)) < 18,49):
//            return (
//                <p>niedowaga</p>
//            );
//            break;
//        case ((numA / (numB * numB)) < result < (numA / (numB * numB))):
//            return (
//                <p>wartoœæ prawid³owa</p>
//            );
//            break;
//        case (25 < result < 29, 99):
//            return (
//                <p>nadwaga</p>
//            );
//            break;
//        case (30 < result < 34, 99):
//            return (
//                <p> I stopieñ oty³oœci</p>
//            );
//            break;
//        case (35 < result < 39, 99):
//            return (
//                <p> II stopieñ oty³oœci</p>
//            );
//            break;
//        case (40 < result):
//            return (
//                <p> I stopieñ oty³oœci</p>
//            );
//            break;
//    }
//}
import React, { useState } from "react";

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
        const bmi = +mass / (+height) ** 2;
        setBmi(bmi);
    };

    return (
        <div class="calculator">
            <form onSubmit={calculate}>
                <div>
                    <label>height in meters</label>
                    <input value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>

                <div>
                    <label>mass in kg</label>
                    <input value={mass} onChange={(e) => setMass(e.target.value)} />
                </div>

                <button type="submit">calculate</button>
            </form>
            <p>bmi: {bmi}</p>
        </div>
    );
}


ReactDOM.render(<Calculator />, document.getElementById("calculator"));

