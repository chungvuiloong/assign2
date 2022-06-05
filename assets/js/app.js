/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
// import './styles/app.css';

// start the Stimulus application
// import './bootstrap';
// import '/Index';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Components/Layout/Footer/Footer';
// import Nav from "./Components/Layout/Nav/Nav";

console.log('Testing');

const Index = () => {
    return (
        <>
            <Footer/>
        </>
    )
}

export default Index;


const root = ReactDOM.createRoot(document.getElementById('data'));
root.render(
    <Index />
);