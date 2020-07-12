import React from 'react';
import controls from '../../components/Controls/Controls'
import Button from '../UI/Button/Button';
import Loading from '../UI/Loading/Loading';
import Wrapper from '../../hoc/Wrapper';

const OrderSummary = props => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(key => {
            return props.ingredients[key] != 0
                && (
                    <div key={key} className="row">
                        <div className="col-6">{props.ingredients[key]}</div>
                        <div className="col-6">{controls.find(x => x.type == key).label}</div>
                    </div>
                )
        });
    return (
        <div className="w-100 text-center m-auto">
            <h5>اقلام سفارشی شما</h5>
            <p>ساندویچی که شما سفارش داده ای شامل موارد زیر است</p>
            <div>
                {ingredientsSummary}
            </div>
            <div className="mt-3">
                {props.loading ? <Loading show={props.loading} /> : (
                    <Wrapper>
                        <Button classes="btn-sm btn-success float-left mr-1"
                            click={props.purchase}>پرداخت نهایی</Button>
                        <Button classes="btn-sm btn-warning float-right"
                            click={props.purchaseContinue}>ادامه فرآیند خرید</Button>
                    </Wrapper>
                )}
            </div>
        </div>
    )
}

export default OrderSummary;