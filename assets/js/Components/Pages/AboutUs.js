import React from 'react';

const AboutUs = () => {
    return (
        <div>
            This is about us.
        </div>
    );
};

export default AboutUs;

const root = ReactDOM.createRoot(document.getElementById('aboutUs'));
root.render(
    <AboutUs />
);