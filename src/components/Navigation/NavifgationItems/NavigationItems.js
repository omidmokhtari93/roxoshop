import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => {
    return (
        <ul className={classes.menu}>
            <NavigationItem link="/" exact>ثبت سفارش</NavigationItem>
            <NavigationItem link="/payment">پرداخت</NavigationItem>
        </ul>
    )
}

export default NavigationItems;