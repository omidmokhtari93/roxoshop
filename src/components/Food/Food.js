import React from 'react';
import FoodIngredient from './FoodIngredient/FoodIngredient'
import classes from "./Food.module.css";
import controls from '../Controls/Controls';

const Food = props => {
    let transformIngredients = (Object.keys(props.ingredients)).map(keys => {
        return [...Array(props.ingredients[keys])].map((_, x) => {
            return <FoodIngredient
                key={keys + x}
                type={keys}
                name={controls.find(j => j.type == keys).label}
                color={controls.find(j => j.type == keys).color}
                price={controls.find(j => j.type == keys).price}
            />
        })
    }).reduce((arr, el) => {
        return [...arr, ...el]
    }, []);

    return (
        <div className="">
            <FoodIngredient type="bread" name="نان" color="burlywood" />
            {transformIngredients.length > 0
                ? transformIngredients
                : <p className={classes.noFood}>لطفا یه مورد غذا را انتخاب کنید</p>}
            <FoodIngredient type="bread" name="نان" color="burlywood" />
        </div>
    )
}

export default Food;