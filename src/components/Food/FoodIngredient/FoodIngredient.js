import React, { Component } from 'react';
import classes from './FoodIngredient.module.css'
import propTypes from 'prop-types';

class FoodIngredient extends Component {
    render() {
        switch (this.props.type) {
            case 'bread':
                return <div className={classes.bread}>نان</div>
            case 'hotDog':
                return <div className={classes.hotDog}>هات داگ</div>
            case 'salad':
                return <div className={classes.salad}>سالاد</div>
            case 'cheese':
                return <div className={classes.cheese}>پنیر</div>
            default:
                return null;
        }
    }
}

FoodIngredient.propTypes = {
    type: propTypes.string.isRequired
}

export default FoodIngredient;