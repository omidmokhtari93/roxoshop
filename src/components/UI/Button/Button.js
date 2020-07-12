import React from 'react';
import classes from './Button.module.css';

const Button = props => {
    return (
        <button className={props.classes + ' ' + classes.responsive}
            onClick={props.click}
            disabled={props.disabled}>
            {props.children}
        </button>
    )
}
export default Button;