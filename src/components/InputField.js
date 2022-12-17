import React from 'react'

export default function InputField({ type, value, placeHolder, onChangeHandler, name }) {
    return (
        <div className='col-md-6'>
            <div className="form-group mt-4">
                <input
                    type={type}
                    value={value}
                    name={name}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder={placeHolder}
                    onChange={onChangeHandler}
                />
            </div>
        </div>
    )
}
