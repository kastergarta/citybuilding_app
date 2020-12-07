import React from 'react';

import classes from './Input.css';

const input = ( props ) => {
    
    let inputElement = null;

    switch ( props.inputtype ) {
        case ( 'input' ):
            inputElement = <input />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea />;
            break;
        default:
            inputElement = <input />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}></label>
            {inputElement}
        </div>
    );

};

export default input;