import React from 'react';

const Komponenku = () => {
    const btnHandler = () => {
        alert('You click me!');
    }
    return(
        <div>
            <input onClick={btnHandler} type="button" value="Click me!" />
        </div>
    )
}

let test = 'testing';

const NewScreen = () => {
    return(
        <div>
            <h1>Aku cinta kamu!</h1>
            <p>{test}</p>
            <Komponenku/>
        </div>
        
    )
}
export default NewScreen;