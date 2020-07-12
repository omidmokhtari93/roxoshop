import React, { Component } from 'react';
import classes from './FoodIngredient.module.css'
import propTypes from 'prop-types';

class FoodIngredient extends Component {
    render() {
        return <div className={classes.common} style={{ background: this.props.color }}>
            {this.props.name}
        </div>
    }
}

FoodIngredient.propTypes = {
    type: propTypes.string.isRequired
}

export default FoodIngredient;