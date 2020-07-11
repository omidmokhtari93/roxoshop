import React from 'react';
import classes from './Slidermenu.module.css';
import Wrapper from '../../../hoc/Wrapper';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavifgationItems/NavigationItems';
import Logo from '../../Navigation/Logo/Logo';

const Slidermenu = props => {
    return (
        <Wrapper>
            <Backdrop show={props.show}
                closeModal={props.handleClose} />
            <div className={classes.slider}
                style={{
                    width: props.show ? '60%' : '0',
                    padding: props.show && '15px 15px 10px 10px'
                }}>
                <span
                    className={classes.closebtn}
                    onClick={props.handleClose}>✖</span>
                <div className="mb-3"
                    style={{ paddingLeft: 50 }}>
                    <Logo />
                </div>
                <NavigationItems />
            </div>
        </Wrapper>
    )
}

export default Slidermenu;