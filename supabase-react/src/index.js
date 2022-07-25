
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
const Index = () => {
    return <App/>
}

ReactDOM.render(<Index />, document.getElementById("diner"));

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//    <React.StrictMode>
//        <ListOfRecipes />
//  </React.StrictMode>
//);
//const Index = () => {
//    return <ListOfRecipes/>
//}
//ReactDOM.render(<Index />, document.getElementById("app"));

/*reportWebVitals();*/
