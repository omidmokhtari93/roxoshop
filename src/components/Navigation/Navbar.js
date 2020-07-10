import React from 'react';

import Wrapper from '../../hoc/Wrapper';
import classes from './Navbar.module.css';
import NavigationItems from './NavigationItems.js/NavigationItems';

const Navbar = props => {
    return (
        <Wrapper>
            <header className={classes.header}>
                <img className={classes.logo} src="https://bit.ly/2Z9IwHp" />
                <div className="float-right">
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