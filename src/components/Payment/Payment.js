import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import PaymentSummary from './PaymentSummary/PaymentSummary';

class Payment extends Component {
    state = {
        ingredients: {},
        totalPrice: 0
    }

    componentDidMount() {
        const queryParams = new URLSearchParams(this.props.location.search)
        const ing = {}
        queryParams.forEach((value, item) => {
            item == 'price'
                ? this.setState({ totalPrice: value })
                : ing[item] = +value;
        })
        this.setState({ ingredients: ing })
    }

    handlePayment = e => {
        this.props.history.replace('/payment/contact-data');
        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        }, 100);
    }

    cancelPayment = e => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <PaymentSummary
                    ingredients={this.state.ingredients}
                    handlePayment={this.handlePayment}
                    cancelPayment={this.cancelPayment} />
                <Route
                    render={(props) => (<ContactData
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        {...props} />)}
                    path={this.props.match.path + '/contact-data'} />
            </div>
        )
    }
}
export default Payment;
