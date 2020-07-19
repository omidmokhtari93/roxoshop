import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import Food from '../Food/Food';
import controls from '../Controls/Controls'
import Button from '../UI/Button/Button';
const stateElements = {};
controls.map(x => {
    stateElements[x.type] = 0
})

class Payment extends Component {
    state = {
        loading: false
        , ...stateElements
    }

    handlePayment = e => {
        this.state.loading = true;
    }

    render() {
        this.state = {
            salad: 1,
            soas: 1,
            cheese: 2
        }
        return (
            <Wrapper>
                <div className="card">
                    <div className="card-header text-center">سفارش شما به شرح زیر است</div>
                    <div className="card-body">
                        <Food ingredients={this.state} />
                    </div>
                    <div className="card-footer">
                        <Button click={this.handlePayment} classes="btn btn-success float-left">پرداخت</Button>
                        <Button click={() => this.props.history.goBack()} classes="btn btn-primary float-right">بازگشت</Button>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
export default Payment;