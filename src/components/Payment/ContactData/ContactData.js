import React, { Component } from 'react';
import Wrapper from '../../../hoc/Wrapper';
import Button from '../../UI/Button/Button';
import Loading from '../../UI/Loading/Loading';
import http from '../../axios/axios-order';
import Input from '../../UI/Input/Input';
import { element, object } from 'prop-types';

class ContactData extends Component {
    state = {
        inputs: {
            name: {
                type: 'text',
                label: 'نام و نام خانوادگی',
                inputType: 'input',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                type: 'email',
                label: 'ایمیل',
                inputType: 'input',
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 50
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                type: null,
                label: 'انتخاب نحوه ارسال',
                inputType: 'select',
                options: [
                    { value: 'pishtaz', label: 'ارسال با پست پیشتاز' },
                    { value: 'tipax', label: 'ارسال با تیپاکس' }
                ],
                value: '',
                valid: true,
                validation: {}
            },
            address: {
                type: 'text',
                label: 'آدرس محل سکونت',
                inputType: 'textarea',
                rows: 3,
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        loading: false
    }
    orderHandler = e => {
        e.preventDefault();
        this.setState({ loading: true })
        const formData = {}
        for (let key in this.state.inputs) {
            formData[key] = this.state.inputs[key].value
        }
        http.post('posts', formData).then(x => {
            this.setState({ loading: false })
            this.props.history.replace('/')
        }).catch(x => {
            this.setState({ loading: false })
        })
    }

    checkValidation = (value, rules) => {
        return (value !== '' && rules.required && !rules.minLength)
            || (value !== '' && rules.required
                && rules.minLength
                && value.length > rules.minLength
                && value.length < rules.maxLength)
            || (value !== '' && !rules.required)
    }

    checkInvalidInputs = () => {
        const inputs = { ...this.state.inputs };
        let valid = true;
        for (let key in inputs) {
            if ((inputs[key].valid == false)) {
                valid = false;
            }
        }
        return valid;
    }

    handleContactInputs = e => {
        const elementName = e.target.name;
        const elementValue = e.target.value;
        const inputs = { ...this.state.inputs }
        const rules = inputs[elementName].validation;
        const validationStatus = this.checkValidation(elementValue, rules);
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [elementName]: {
                    ...prevState.inputs[elementName],
                    value: elementValue,
                    valid: validationStatus,
                    ...(rules.required && { touched: true })
                }
            }
        }))
    }

    render() {
        let formIsValid = this.checkInvalidInputs();
        let inputsElements = [];
        const inputs = { ...this.state.inputs }
        for (let key in inputs) {
            inputsElements.push(
                <Input
                    key={key}
                    inputType={inputs[key].inputType}
                    type={inputs[key].type}
                    name={key}
                    label={inputs[key].label}
                    value={inputs[key].value}
                    rows={inputs[key].rows}
                    onChange={this.handleContactInputs}
                    touched={inputs[key].touched}
                    valid={inputs[key].valid}
                    options={inputs[key].options}
                />
            )
        }
        return (
            <Wrapper>
                <hr />
                <form className="card" onSubmit={this.orderHandler}>
                    <div className="card-header">اطلاعات خود را برای ثبت سفارش وارد کنید</div>
                    <div className="card-body text-right" style={{ direction: 'rtl' }}>
                        {inputsElements}
                    </div>
                    <div className="card-footer">
                        {this.state.loading
                            ? <Loading show={this.state.loading} />
                            : <Button click={this.orderHandler}
                                classes="btn btn-sm btn-success float-left"
                                disabled={!formIsValid}>
                                پرداخت نهایی
                            </Button>
                        }
                    </div>
                </form>
            </Wrapper>
        )
    }
}

export default ContactData;