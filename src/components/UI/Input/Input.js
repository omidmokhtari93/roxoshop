import React from 'react';
import clasess from './Input.module.css';

const Input = props => {
    let element = null;
    let config = {
        type: props.type,
        name: props.name,
        onChange: props.onChange,
        rows: props.rows,
        options: (props.options && props.options.map((opt, idx) =>
            <option value={opt.value} key={idx}>
                {opt.label}
            </option>))
    }

    let validationClasses = ['form-control'];
    if (props.touched && !props.valid) {
        validationClasses.push(clasess.invalid)
    }

    switch (props.inputType) {
        case 'input':
            element = <input className={validationClasses.join(' ')} {...config} value={props.value} />
            break;
        case 'select':
            element = <select className="form-control" {...config} >
                {config.options}
            </select>
            break;
        case 'textarea':
            element = <textarea style={{ resize: 'none' }} className={validationClasses.join(' ')} {...config} value={props.value}></textarea>
            break;
        default:
            element = <input className={validationClasses.join(' ')} {...config} value={props.value} />
            break;
    }
    return (
        <div className="form-group">
            <div className={clasess.labelText}>
                <span className="float-right">{props.label}</span>
                {(props.touched && !props.valid)
                    && <span className="float-left text-danger">
                        ** فیلد را تکمیل کنید **
                        </span>}
            </div>
            {element}
        </div>
    )
}
export default Input;