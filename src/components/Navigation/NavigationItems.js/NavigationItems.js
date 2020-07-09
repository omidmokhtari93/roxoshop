import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => {
    return (
        <ul className={classes.menu}>
            <NavigationItem link="/">پرداخت</NavigationItem>
            <NavigationItem link="/" active>صفحه اصلی</NavigationItem>
        </ul>
    )
}

export default NavigationItems;