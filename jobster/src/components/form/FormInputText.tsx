import React from 'react'

export const FormInputText = ({ name, placeholder, labelText }: { name: string, placeholder?: string, labelText?: string }) => {
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <input type='text' name={name} placeholder={placeholder} className='form-input' />
        </div>
    )
}
