import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = props => (
    props.show ? <div onClick={props.closeModal} className={classes.backdrop}></div> : null
)

export default Backdrop;