import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListOfRecipes from './ListOfRecipes';

export function getStaticProps() {
    return {
        props: {
            recipes: [],
        }
    };
}
export default function Home({recipes}) {
    return (
        <div>
            <h1>Przepisy</h1>
            <pre>{JSON.stringify(recipes, null, 2)}</pre>
        </div>
    );
}



//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//    <React.StrictMode>
//        <ListOfRecipes />
//  </React.StrictMode>
//);
const Index = () => {
    return <ListOfRecipes/>
}
ReactDOM.render(<Index />, document.getElementById("app"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
