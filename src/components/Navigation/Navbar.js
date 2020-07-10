import React from 'react';

import Wrapper from '../../hoc/Wrapper';
import classes from './Navbar.module.css';
import NavigationItems from './NavifgationItems/NavigationItems';
import Logo from './Logo/Logo';

const Navbar = props => {
    return (
        <Wrapper>
            <header className={classes.header}>
                <Logo />
                <div className={classes.navigationItems}>
                    <NavigationItems />
                </div>
                <div className={classes.mobile}
                    onClick={() => props.sliderShow('open')}>
                    ☰
                </div>
            </header>
        </Wrapper>
    )
}

export default Navbar;