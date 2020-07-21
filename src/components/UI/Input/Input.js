import React from 'react';
import clasess from './Input.module.css';

const Input = props => {
    const inputElement = e => {
        let config = {
            type: props.type,
            name: props.name,
            value: props.value,
            onChange: props.onChange,
            rows: props.rows
        }
        switch (props.inputType) {
            case 'input':
                return <input className="form-control" {...config} />
            case 'select':
                return <select className="form-control" {...config} >
                    {props.options.map((opt, idx) =>
                        <option value={opt.value} key={idx}>
                            {opt.label}
                        </option>
                    )}
                </select>
            case 'textarea':
                return <textarea style={{ resize: 'none' }} className="form-control" {...config}></textarea>
            default:
                return <input className="form-control" {...config} />
        }
    }

    return (
        <div className="form-group">
            <label className={clasess.labelText}>{props.label}</label>
            {inputElement()}
        </div>
    )
}
export default Input;