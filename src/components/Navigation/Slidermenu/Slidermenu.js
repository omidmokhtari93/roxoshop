import React from 'react';
import classes from './Slidermenu.module.css';
import Wrapper from '../../../hoc/Wrapper';
import Backdrop from '../../UI/Backdrop/Backdrop';

const Slidermenu = props => {
    return (
        <Wrapper>
            <Backdrop show={props.show}
                closeModal={props.handleClose} />
            <div className={classes.slider}
                style={{ display: props.show ? null : 'none' }}>
                <span
                    className={classes.closebtn}
                    onClick={props.handleClose}>✖</span>
            </div>
        </Wrapper>
    )
}

export default Slidermenu;