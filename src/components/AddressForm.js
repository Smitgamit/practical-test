import React from 'react'
import InputField from './InputField'

export default function AddressForm({ onAddressChangeHandler, ...props }) {
    console.log('props.checkValidationAddress-->', props.checkValidationAddress);
    return (
        <section className='py-5'>
            <div className='container'>
                <form>
                    <div className='row'>
                        <InputField
                            type={'text'}
                            placeHolder={'Address Line 1'}
                            value={props.firstAddress}
                            name={'firstAddress'}
                            onChangeHandler={onAddressChangeHandler}
                            checkValidation={props.checkValidationAddress.firstAddress}
                        />
                        <InputField
                            type={'text'}
                            placeHolder={'Address Line 2'}
                            value={props.secondAddress}
                            name={'secondAddress'}
                            onChangeHandler={onAddressChangeHandler}
                            checkValidation={props.checkValidationAddress.secondAddress}
                        />
                        <InputField
                            type={'text'}
                            placeHolder={'City'}
                            value={props.city}
                            name={'city'}
                            onChangeHandler={onAddressChangeHandler}
                            checkValidation={props.checkValidationAddress.city}
                        />
                        <InputField
                            type={'text'}
                            placeHolder={'State'}
                            value={props.state}
                            name={'state'}
                            onChangeHandler={onAddressChangeHandler}
                            checkValidation={props.checkValidationAddress.state}
                        />
                        <InputField
                            type={'text'}
                            placeHolder={'Country'}
                            value={props.country}
                            name={'country'}
                            onChangeHandler={onAddressChangeHandler}
                            checkValidation={props.checkValidationAddress.country}
                        />
                        <InputField
                            type={'text'}
                            placeHolder={'Pin Code'}
                            value={props.pinCode}
                            name={'pinCode'}
                            onChangeHandler={onAddressChangeHandler}
                            checkValidation={props.checkValidationAddress.pinCode}
                        />
                    </div>
                </form>
            </div>
            <div className='col-md-12'>
                <button onClick={props.submitHandler} className="btn btn-primary">Submit</button>
            </div>
        </section>
    )
}
