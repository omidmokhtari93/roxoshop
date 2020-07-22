import React from 'react';
import clasess from './Input.module.css';

const Input = props => {
    let validationClasses = ['form-control'], valid = true;
    if (props.touched && !props.valid) {
        validationClasses.push(clasess.invalid)
        valid = false
    }

    const inputElement = e => {
        let config = {
            type: props.type,
            name: props.name,
            onChange: props.onChange,
            rows: props.rows
        }
        switch (props.inputType) {
            case 'input':
                return <input className={validationClasses.join(' ')} {...config} defaultValue={props.value} />
            case 'select':
                return <select className="form-control" {...config} defaultValue={props.value}>
                    {props.options.map((opt, idx) =>
                        <option value={opt.value} key={idx}>
                            {opt.label}
                        </option>
                    )}
                </select>
            case 'textarea':
                return <textarea style={{ resize: 'none' }} className={validationClasses.join(' ')} {...config} defaultValue={props.value}></textarea>
            default:
                return <input className={validationClasses.join(' ')} {...config} defaultValue={props.value} />
        }
    }

    return (
        <div className="form-group">
            <div className={clasess.labelText}>
                <span className="float-right">{props.label}</span>
                {!valid && <span className="float-left text-danger">** فیلد را تکمیل کنید **</span>}
            </div>
            {inputElement()}
        </div>
    )
}
export default Input;