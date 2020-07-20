import React, { Component } from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Button from '../../UI/Button/Button';
import Loading from '../../UI/Loading/Loading';
import http from '../../axios/axios-order';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: '',
        loading: false
    }
    orderHandler = e => {
        e.preventDefault();
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            name: '',
            family: ''
        }
        http.post('posts', order).then(x => {
            this.setState({ loading: false })
            this.props.history.replace('/')
        }).catch(x => {
            this.setState({ loading: false })
        })
    }

    render() {
        return (
            <Wrapper>
                <hr />
                <form className="card">
                    <div className="card-header">اطلاعات خود را برای ثبت سفارش وارد کنید</div>
                    <div className="card-body text-right"
                        style={{ direction: 'rtl' }}>
                        <div className="row">
                            <div className="col-6 mb-3">
                                <input className="form-control" type="text" name="name" placeholder="نام و نام خانوادگی" />
                            </div>
                            <div className="col-6 mb-3">
                                <input className="form-control" type="email" name="email" placeholder="ایمیل" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input className="form-control" type="text" name="address" placeholder="آدرس پستی" />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        {this.state.loading
                            ? <Loading show={this.state.loading} />
                            : <Button click={this.orderHandler}
                                classes="btn btn-sm btn-success float-left">پرداخت نهایی</Button>
                        }
                    </div>
                </form>
            </Wrapper>
        )
    }
}

export default ContactData;