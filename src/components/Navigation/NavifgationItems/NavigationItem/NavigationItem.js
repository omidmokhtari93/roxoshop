import React from 'react'
import classes from './NavigationItem.module.css';
const NavigationItem = props => {
    console.log(props.active)
    return (
        <li className={classes.link}>
            <a href={props.link} className={props.active && classes.active}>{props.children}</a>
        </li>
    )
}

export default NavigationItem;