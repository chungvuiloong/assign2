import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Components/Layout/Footer/Footer';
import Nav from "./Components/Layout/Nav/Nav";

console.log('Testing');

const Index = () => {
    return (
        <>
            <Nav/>


            <Footer/>
        </>
    )
}

export default Index;



const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <Index />
);