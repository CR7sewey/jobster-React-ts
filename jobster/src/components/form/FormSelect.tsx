import React from 'react'

export const FormSelect = ({ values, defaultValue, name, labelText }: { values: string[], defaultValue: string, name: string, labelText?: string }) => {
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <select
                name={name}
                defaultValue={defaultValue}
                className='form-select'
            >
                {values.map((item) => {
                    return (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    );
                })}
            </select>
        </div>
    )
}
