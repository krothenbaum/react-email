import React from 'react';

export default function App(props) {
    console.log(props);
    return (
        <div>
            <h1>
                Email App
            </h1>
            <div>
                {props.children}
            </div>
        </div>
    );
};