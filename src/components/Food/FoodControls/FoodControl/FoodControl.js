import React from 'react';
import classes from './FoodControl.module.css';
import Button from '../../../UI/Button/Button';

const FoodControl = props => {
    return (
        <div className="row pt-1">
            <div className="col-4">
                <Button classes='mr-1 btn btn-sm btn-success'
                    click={props.add}>افزایش</Button>
                <Button classes='btn btn-sm btn-danger'
                    click={props.remove} disabled={props.disabled}>کاهش</Button>
            </div>
            <div className="col-4 align-self-center">
                قیمت : <strong>{props.price}</strong>
            </div>
            <div className="col-4 align-self-center">
                <div className="bg-light">{props.label}</div>
            </div>
        </div>
    )
}

export default FoodControl;