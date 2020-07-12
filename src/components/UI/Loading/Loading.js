import React from 'react';
import classes from './Loading.module.css';

const Loading = props => {
    return (
        props.show && (
            <div className={classes.loader}></div>
        )
    )
}

export default Loading;