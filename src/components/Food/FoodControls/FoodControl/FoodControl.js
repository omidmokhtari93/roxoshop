import React from 'react';
import classes from './FoodControl.module.css';

const FoodControl = props => {
    return (
        <div className="row pt-1">
            <div className="col-4">
                <button className="mr-1 btn btn-sm btn-success"
                    onClick={props.add}>افزایش</button>
                <button className="btn btn-sm btn-danger"
                    onClick={props.remove} disabled={props.disabled}>کاهش</button>
            </div>
            <div className="col-4 align-self-center">
                قیمت : {props.price}
            </div>
            <div className="col-4 align-self-center">
                <div className="bg-light">{props.label}</div>
            </div>
        </div>
    )
}

export default FoodControl;