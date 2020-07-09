import React from 'react';
import FoodIngredient from './FoodIngredient/FoodIngredient'
import classes from "./Food.module.css";

const Food = props => {
    let transformIngredients = (Object.keys(props.ingredients)).map(keys => {
        return [...Array(props.ingredients[keys])].map((_, x) => {
            return <FoodIngredient key={keys + x} type={keys} />
        })
    }).reduce((arr, el) => {
        return [...arr, ...el]
    }, []);

    return (
        <div className="">
            <FoodIngredient type="bread" />
            {transformIngredients.length > 0
                ? transformIngredients
                : <p className={classes.noFood}>لطفا یه مورد غذا را انتخاب کنید</p>}
            <FoodIngredient type="bread" />
        </div>
    )
}

export default Food;