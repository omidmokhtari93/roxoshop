import React, { Component } from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Button from '../../UI/Button/Button';
import Loading from '../../UI/Loading/Loading';
import http from '../../axios/axios-order';
import Input from '../../UI/Input/Input';

class ContactData extends Component {
    state = {
        inputs: {
            name: {
                type: 'text',
                label: 'نام و نام خانوادگی',
                inputType: 'input',
                value: ''
            },
            email: {
                type: 'email',
                label: 'ایمیل',
                inputType: 'input',
                value: ''
            },
            deliveryMethod: {
                type: null,
                label: 'انتخاب نحوه ارسال',
                inputType: 'select',
                options: [
                    { value: 'pishtaz', label: 'ارسال با پست پیشتاز' },
                    { value: 'tipax', label: 'ارسال با تیپاکس' }
                ],
                rows: 3,
                value: ''
            },
            address: {
                type: 'text',
                label: 'آدرس محل سکونت',
                inputType: 'textarea',
                rows: 3,
                value: ''
            }
        },
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

    handleInputs = e => {
        console.log(e.target.name)
        let inp = this.state.inputs[e.target.name].value;
        this.setState({

        })
    }

    render() {
        let inputsElements = [];
        const inputs = { ...this.state.inputs }
        Object.keys(inputs).map((key, idx) => {
            let rows = inputs[key].inputType == 'textarea' ? 3 : null;
            let options = inputs[key].inputType == 'select'
                ? inputs[key].options : null
            inputsElements.push(
                <Input
                    key={idx}
                    inputType={inputs[key].inputType}
                    type={inputs[key].type}
                    name={key}
                    label={inputs[key].label}
                    value={inputs[key].value}
                    rows={rows}
                    onChange={this.handleInputs}
                    options={options}
                />
            )
        })
        return (
            <Wrapper>
                <hr />
                <form className="card">
                    <div className="card-header">اطلاعات خود را برای ثبت سفارش وارد کنید</div>
                    <div className="card-body text-right" style={{ direction: 'rtl' }}>
                        {inputsElements}
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