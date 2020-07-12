import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import Food from '../../components/Food/Food'
import FoodControls from '../../components/Food/FoodControls/FoodControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import axios from '../../components/axios/axios-order';
import controls from '../../components/Controls/Controls';

const INGREDIENT_PRICES = {}
const initState = {}
controls.map(obj => {
    INGREDIENT_PRICES[obj.type] = obj.price
    initState[obj.type] = 0;
})

class FoodBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                ...initState
            },
            totalPrice: 0,
            order: false,
            loading: false
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

    orderPurchaseContinue = e => {
        this.setState({ loading: true })
        const order = {
            ingredients: this.state.ingredients,
            totalPrice: this.state.totalPrice,
        }
        axios.post('posts', order)
            .then(response => this.setState({ loading: false }))
            .catch(error => this.setState({ loading: false }))
    }

    orderPurchase = e => {
        console.log(2)
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
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchase={this.orderPurchase}
                        purchaseContinue={this.orderPurchaseContinue}
                        loading={this.state.loading} />
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