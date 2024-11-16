import React from 'react'

export const FormInputText = ({ name, placeholder, labelText, type }: { name: string, type: string, placeholder?: string, labelText?: string }) => {
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <input type={type} name={name} placeholder={placeholder} className='form-input' />
        </div>
    )
}
