import React from 'react'
import InputField from './InputField'
import UserDetails from './UserDetails'

export default function UserForm({ onChangeHandler, checkValidation, ...props }) {
    return (
        <section className='py-5'>
            <div className='container'>
                <form>
                    <div className='row'>
                        <InputField
                            type={'text'}
                            placeHolder={'First name'}
                            value={props.firstName}
                            name={'firstName'}
                            onChangeHandler={onChangeHandler}
                        />
                        <div
                            className={
                                checkValidation.firstName.isInvalid
                                    ? 'animated fadeIn'
                                    : ''
                            }
                        >
                            <div className="error">
                                {checkValidation.firstName.message}
                            </div>
                        </div>
                        <InputField
                            type={'text'}
                            placeHolder={'Middle name'}
                            value={props.middleName}
                            name={'middleName'}
                            onChangeHandler={onChangeHandler}
                        />
                        <InputField
                            type={'text'}
                            placeHolder={'Last name'}
                            value={props.lastName}
                            name={'lastName'}
                            onChangeHandler={onChangeHandler}
                        />
                        <InputField
                            type={'text'}
                            placeHolder={'Mobile no'}
                            value={props.mobileNo}
                            name={'mobileNo'}
                            onChangeHandler={onChangeHandler}
                        />
                        <InputField
                            type={'email'}
                            placeHolder={'Email'}
                            value={props.email}
                            name={'email'}
                            onChangeHandler={onChangeHandler}
                        />
                        <InputField
                            type={'date'}
                            placeHolder={'Birthday'}
                            value={props.birthday}
                            name={'birthday'}
                            onChangeHandler={onChangeHandler}
                        />
                        <InputField
                            type={'text'}
                            placeHolder={'Age'}
                            value={props.age}
                            name={'age'}
                            onChangeHandler={onChangeHandler}
                        />
                        <InputField
                            type={'text'}
                            placeHolder={'Blood Group'}
                            value={props.bloodGroup}
                            name={'bloodGroup'}
                            onChangeHandler={onChangeHandler}
                        />
                        <InputField
                            type={'text'}
                            placeHolder={'Height'}
                            value={props.height}
                            name={'height'}
                            onChangeHandler={onChangeHandler}
                        />
                        <InputField
                            type={'text'}
                            placeHolder={'Weight'}
                            value={props.weight}
                            name={'weight'}
                            onChangeHandler={onChangeHandler}
                        />
                        <div className='col-md-6'>
                            <div>
                                <label>Gender</label>
                            </div>
                            <div className="form-check d-inline-block me-4 mb-4">
                                <input className="form-check-input" type="radio" name="gender" id="male" value="option1" />
                                <label className="form-check-label" htmlFor="male">
                                    Male
                                </label>
                            </div>
                            <div className="form-check d-inline-block me-4 mb-4">
                                <input className="form-check-input" type="radio" name="gender" id="female" value="option1" />
                                <label className="form-check-label" htmlFor="female">
                                    Female
                                </label>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div>
                                <label>Marital Status</label>
                            </div>
                            <div className="form-check d-inline-block me-4 mb-4">
                                <input className="form-check-input" type="radio" name="marital" id="single" value="option1" />
                                <label className="form-check-label" htmlFor="single">
                                    Single
                                </label>
                            </div>
                            <div className="form-check d-inline-block me-4 mb-4">
                                <input className="form-check-input" type="radio" name="marital" id="married" value="option1" />
                                <label className="form-check-label" htmlFor="married">
                                    Married
                                </label>
                            </div>
                            <div className="form-check d-inline-block me-4 mb-4">
                                <input className="form-check-input" type="radio" name="marital" id="divorced" value="option1" />
                                <label className="form-check-label" htmlFor="divorced">
                                    Divorced
                                </label>
                            </div>
                            <div className="form-check d-inline-block me-4 mb-4">
                                <input className="form-check-input" type="radio" name="marital" id="widowed" value="option1" />
                                <label className="form-check-label" htmlFor="widowed">
                                    Widowed
                                </label>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <button onClick={props.submitHandler} className="btn btn-primary">Next</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
