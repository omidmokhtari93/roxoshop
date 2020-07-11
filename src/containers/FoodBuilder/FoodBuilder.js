import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import Food from '../../components/Food/Food'
import FoodControls from '../../components/Food/FoodControls/FoodControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    hotDog: 7000,
    cheese: 3000,
    salad: 1000
}

class FoodBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                hotDog: 0,
                cheese: 0,
                salad: 0
            },
            totalPrice: 0,
            order: false
        }
    }
    
    handleOrder = e => {
        this.setState({ order: true })
    }

    closeModal = e => {
        this.setState({ order: false })
    }

    addIngredient = type => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    }

    removeIngredient = type => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    }

    render() {
        const disabledKey = {
            ...this.state.ingredients
        }
        Object.keys(disabledKey).map(key => {
            disabledKey[key] = disabledKey[key] <= 0;
        });
        
        return (
            <Wrapper>
                <Modal order={this.state.order}
                    closeModal={this.closeModal}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Food ingredients={this.state.ingredients} />
                <FoodControls
                    ingredientAdded={this.addIngredient}
                    ingredientRemoved={this.removeIngredient}
                    disabled={disabledKey}
                    prices={INGREDIENT_PRICES}
                    total={this.state.totalPrice}
                    purchasable={this.state.totalPrice > 0}
                    order={this.handleOrder} />
            </Wrapper>
        )
    }
}

export default FoodBuilder;