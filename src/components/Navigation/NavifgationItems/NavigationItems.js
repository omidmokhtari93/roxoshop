import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => {
    return (
        <ul className={classes.menu}>
            <NavigationItem link="/" active>صفحه اصلی</NavigationItem>
            <NavigationItem link="/">پرداخت</NavigationItem>
        </ul>
    )
}

export default NavigationItems;