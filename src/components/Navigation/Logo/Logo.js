import React from 'react';
import classes from './Logo.module.css';

const Logo = props => {
    return (
        <a href="/">
            <img className={classes.logo} src="https://bit.ly/2Z9IwHp" />
        </a>
    )

}
export default Logo;