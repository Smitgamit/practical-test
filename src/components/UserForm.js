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
                        <div
                            className={
                                checkValidation.middleName.isInvalid
                                    ? 'animated fadeIn'
                                    : ''
                            }
                        >
                            <div className="error">
                                {checkValidation.middleName.message}
                            </div>
                        </div>
                        <InputField
                            type={'text'}
                            placeHolder={'Last name'}
                            value={props.lastName}
                            name={'lastName'}
                            onChangeHandler={onChangeHandler}
                        />
                        <div
                            className={
                                checkValidation.lastName.isInvalid
                                    ? 'animated fadeIn'
                                    : ''
                            }
                        >
                            <div className="error">
                                {checkValidation.lastName.message}
                            </div>
                        </div>
                        <InputField
                            type={'text'}
                            placeHolder={'Mobile no'}
                            value={props.mobileNo}
                            name={'mobileNo'}
                            onChangeHandler={onChangeHandler}
                        />
                        <div
                            className={
                                checkValidation.mobileNo.isInvalid
                                    ? 'animated fadeIn'
                                    : ''
                            }
                        >
                            <div className="error">
                                {checkValidation.mobileNo.message}
                            </div>
                        </div>
                        <InputField
                            type={'email'}
                            placeHolder={'Email'}
                            value={props.email}
                            name={'email'}
                            onChangeHandler={onChangeHandler}
                        />
                        <div
                            className={
                                checkValidation.email.isInvalid
                                    ? 'animated fadeIn'
                                    : ''
                            }
                        >
                            <div className="error">
                                {checkValidation.email.message}
                            </div>
                        </div>
                        <InputField
                            type={'date'}
                            placeHolder={'Birthday'}
                            value={props.birthday}
                            name={'birthday'}
                            onChangeHandler={onChangeHandler}
                        />
                        <div
                            className={
                                checkValidation.birthday.isInvalid
                                    ? 'animated fadeIn'
                                    : ''
                            }
                        >
                            <div className="error">
                                {checkValidation.birthday.message}
                            </div>
                        </div>
                        <InputField
                            type={'text'}
                            placeHolder={'Age'}
                            value={props.age}
                            name={'age'}
                            onChangeHandler={onChangeHandler}
                        />
                        <div
                            className={
                                checkValidation.age.isInvalid
                                    ? 'animated fadeIn'
                                    : ''
                            }
                        >
                            <div className="error">
                                {checkValidation.age.message}
                            </div>
                        </div>
                        <InputField
                            type={'text'}
                            placeHolder={'Blood Group'}
                            value={props.bloodGroup}
                            name={'bloodGroup'}
                            onChangeHandler={onChangeHandler}
                        />
                        <div
                            className={
                                checkValidation.bloodGroup.isInvalid
                                    ? 'animated fadeIn'
                                    : ''
                            }
                        >
                            <div className="error">
                                {checkValidation.bloodGroup.message}
                            </div>
                        </div>
                        <InputField
                            type={'text'}
                            placeHolder={'Height'}
                            value={props.height}
                            name={'height'}
                            onChangeHandler={onChangeHandler}
                        />
                        <div
                            className={
                                checkValidation.height.isInvalid
                                    ? 'animated fadeIn'
                                    : ''
                            }
                        >
                            <div className="error">
                                {checkValidation.height.message}
                            </div>
                        </div>
                        <InputField
                            type={'text'}
                            placeHolder={'Weight'}
                            value={props.weight}
                            name={'weight'}
                            onChangeHandler={onChangeHandler}
                        />
                        <div
                            className={
                                checkValidation.weight.isInvalid
                                    ? 'animated fadeIn'
                                    : ''
                            }
                        >
                            <div className="error">
                                {checkValidation.weight.message}
                            </div>
                        </div>
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
