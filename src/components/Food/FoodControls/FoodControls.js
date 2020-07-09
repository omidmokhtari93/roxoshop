import React from "react";
import Wrapper from '../../../hoc/Wrapper'
import FoodControl from "./FoodControl/FoodControl";
import classes from './FoodControls.module.css'
import controls from '../../Controls/Controls';

const FoodControls = props => {
    return (
        <Wrapper>
            <div className={classes.controlsBack}>
                <div className="p-1 mb-2 bg-light border">قیمت کل : {props.total}</div>
                {controls.map(x => {
                    return <FoodControl
                        key={x.label} label={x.label}
                        add={() => { props.ingredientAdded(x.type) }}
                        remove={() => props.ingredientRemoved(x.type)}
                        disabled={props.disabled[x.type]}
                        price={props.prices[x.type]} />
                })}
                <button onClick={props.order} className="mt-2 btn btn-sm btn-primary" disabled={!props.purchasable}>ثبت سفارش</button>
            </div>
        </Wrapper>
    )
}

export default FoodControls;