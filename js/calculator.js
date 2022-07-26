import React, { useState } from 'react';
import ReactDOM from "react-dom";

const Calculator = () => {
    const [numA, setNumA] = useState();
    const [numB, setNumB] = useState();
    //let result = (numA/(numB*numB));
  
 return(   
     <form class="container">
         <h1>Kalkulator BMI</h1>
         <p>Kalkulator BMI, czyli Body Mass Index. To narz�dzie daj�ce mo�liwo�� szybkiego i wygodego obliczenia w�asnego wska�nika masy cia�a. BMI obliczamy dziel�c mas� cia�a (w kilogramach) przez wzrost do kwadratu (w metrach).</p>
            <label class="weight">Waga (kg):</label>
            <input type="text" onChange={e => setNumA(Number(e.target.value))} value="waga" /><br/>
            <label class="height" >Wzrost (m):</label>
         <input type="text" onChange={e => setNumB(Number(e.target.value))} value="wzrost" /><br />
         <h2>{(numA / (numB * numB))}</h2>
        </form>
    );
    switch ((numA / (numB * numB))) {
        case ((numA / (numB * numB)) < 18,49):
            return (
                <p>niedowaga</p>
            );
            break;
        case ((numA / (numB * numB)) < result < (numA / (numB * numB))):
            return (
                <p>warto�� prawid�owa</p>
            );
            break;
        case (25 < result < 29, 99):
            return (
                <p>nadwaga</p>
            );
            break;
        case (30 < result < 34, 99):
            return (
                <p> I stopie� oty�o�ci</p>
            );
            break;
        case (35 < result < 39, 99):
            return (
                <p> II stopie� oty�o�ci</p>
            );
            break;
        case (40 < result):
            return (
                <p> I stopie� oty�o�ci</p>
            );
            break;
    }
}

ReactDOM.render(<Calculator/>, document.getElementById("calculator"));