import React, { Component } from 'react';
import classes from './Modal.module.css';
import Wrapper from '../../../hoc/Wrapper';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.order != this.props.order
            || nextProps.children != this.props.children)
    }

    render() {
        return (
            <Wrapper>
                <Backdrop show={this.props.order} closeModal={this.props.closeModal} />
                <div className={classes.modal}
                    style={{
                        opacity: this.props.order ? '1' : '0',
                        zIndex: this.props.order && '9999'
                    }}>
                    {this.props.children}
                </div>
            </Wrapper>
        )
    }
}
export default Modal;
