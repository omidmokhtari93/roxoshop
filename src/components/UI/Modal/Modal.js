import React from 'react';
import classes from './Modal.module.css';
import Wrapper from '../../../hoc/Wrapper';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => (
    <Wrapper>
        <Backdrop show={props.order} closeModal={props.closeModal}/>
        <div className={classes.modal}
            style={{
                // display: props.order ? 'block' : 'none'
                opacity:props.order ? '1' : '0', 
                zIndex: props.order && '9999'
            }}>
            {props.children}
        </div>
    </Wrapper>
)

export default Modal;
