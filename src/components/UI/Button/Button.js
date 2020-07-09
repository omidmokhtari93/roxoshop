import React from 'react';

const Button = props => {
    return (
        <button className={['btn ', props.classes].join(' ')}
            onClick={props.click}>
            {props.children}
        </button>
    )
}
export default Button;