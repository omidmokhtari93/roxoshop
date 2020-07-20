import React from 'react';
import Food from '../../Food/Food';
import Button from '../../UI/Button/Button';

const PaymentSummary = props => {
    return (
        <div className="card">
            <div className="card-header text-center">سفارش شما به شرح زیر است</div>
            <div className="card-body">
                <Food ingredients={props.ingredients} />
            </div>
            <div className="card-footer">
                <Button click={props.handlePayment} classes="btn btn-sm btn-success float-left">ثبت اطلاعات</Button>
                <Button click={props.cancelPayment} classes="btn btn-sm btn-primary float-right">بازگشت</Button>
            </div>
        </div>
    )
}

export default PaymentSummary;