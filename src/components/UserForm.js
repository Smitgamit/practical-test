import React, { useState } from 'react'
import InputField from './InputField'
import UserDetails from './UserDetails'

export default function UserForm({ onChangeHandler, ...props }) {
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
                            checkValidation={props.checkValidation.firstName}
                        />
                        <InputField
                            type={'text'}
                            placeHolder={'Middle name'}
                            value={props.middleName}
                            name={'middleName'}
                            onChangeHandler={onChangeHandler}
                            checkValidation={props.checkValidation.middleName}
                        />
                        <InputField
                            type={'text'}
                            placeHolder={'Last name'}
                            value={props.lastName}
                            name={'lastName'}
                            onChangeHandler={onChangeHandler}
                            checkValidation={props.checkValidation.lastName}
                        />
                        <InputField
                            type={'text'}
                            placeHolder={'Mobile no'}
                            value={props.mobileNo}
                            name={'mobileNo'}
                            onChangeHandler={onChangeHandler}
                            checkValidation={props.checkValidation.mobileNo}
                        />
                        <InputField
                            type={'email'}
                            placeHolder={'Email'}
                            value={props.email}
                            name={'email'}
                            onChangeHandler={onChangeHandler}
                            checkValidation={props.checkValidation.email}
                        />
                        <InputField
                            type={'date'}
                            placeHolder={'Birthday'}
                            value={props.birthday}
                            name={'birthday'}
                            onChangeHandler={onChangeHandler}
                            checkValidation={props.checkValidation.birthday}
                        />
                        <InputField
                            type={'text'}
                            placeHolder={'Age'}
                            value={props.age}
                            name={'age'}
                            onChangeHandler={onChangeHandler}
                            checkValidation={props.checkValidation.age}
                        />
                        <InputField
                            type={'text'}
                            placeHolder={'Blood Group'}
                            value={props.bloodGroup}
                            name={'bloodGroup'}
                            onChangeHandler={onChangeHandler}
                            checkValidation={props.checkValidation.bloodGroup}
                        />
                        <InputField
                            type={'text'}
                            placeHolder={'Height'}
                            value={props.height}
                            name={'height'}
                            onChangeHandler={onChangeHandler}
                            checkValidation={props.checkValidation.height}
                        />
                        <InputField
                            type={'text'}
                            placeHolder={'Weight'}
                            value={props.weight}
                            name={'weight'}
                            onChangeHandler={onChangeHandler}
                            checkValidation={props.checkValidation.weight}
                        />
                        <div className='col-md-6'>
                            <div>
                                <label>Gender</label>
                            </div>
                            <div className="form-check d-inline-block me-4 mb-4">
                                <input onChange={onChangeHandler} className="form-check-input" type="radio" name="gender" id="male" value="male" />
                                <label className="form-check-label" htmlFor="male">
                                    Male
                                </label>
                            </div>
                            <div className="form-check d-inline-block me-4 mb-4">
                                <input onChange={onChangeHandler} className="form-check-input" type="radio" name="gender" id="female" value="female" />
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
                                <input onChange={onChangeHandler} className="form-check-input" type="radio" name="maritalStatus" id="single" value="single" />
                                <label className="form-check-label" htmlFor="single">
                                    Single
                                </label>
                            </div>
                            <div className="form-check d-inline-block me-4 mb-4">
                                <input className="form-check-input" type="radio" name="maritalStatus" id="married" value="married" />
                                <label className="form-check-label" htmlFor="married">
                                    Married
                                </label>
                            </div>
                            <div className="form-check d-inline-block me-4 mb-4">
                                <input onChange={onChangeHandler} className="form-check-input" type="radio" name="maritalStatus" id="divorced" value="divorced" />
                                <label className="form-check-label" htmlFor="divorced">
                                    Divorced
                                </label>
                            </div>
                            <div className="form-check d-inline-block me-4 mb-4">
                                <input onChange={onChangeHandler} className="form-check-input" type="radio" name="maritalStatus" id="widowed" value="widowed" />
                                <label className="form-check-label" htmlFor="widowed">
                                    Widowed
                                </label>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <button onClick={props.nextPageHandler} className="btn btn-primary">Next</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
