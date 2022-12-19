import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './components/UserForm';
import { useState } from 'react';
import UserDetails from './components/UserDetails';
import FormValidator from './components/FormValidator';
import AddressForm from './components/AddressForm';

function App() {
  const validator = new FormValidator([
    {
      field: "firstName",
      method: "isEmpty",
      validWhen: false,
      message: "Please enter first name.",
    },
    {
      field: "middleName",
      method: "isEmpty",
      validWhen: false,
      message: "Please enter middle name.",
    },
    {
      field: "lastName",
      method: "isEmpty",
      validWhen: false,
      message: "Please enter last name.",
    },
    {
      field: "email",
      method: "isEmpty",
      validWhen: false,
      message: "Please enter email.",
    },
    {
      field: "email",
      method: "isEmail",
      validWhen: true,
      message: "Please enter valid email.",
    },
    {
      field: "birthday",
      method: "isEmpty",
      validWhen: false,
      message: "Please enter birthday.",
    },
    {
      field: "age",
      method: "isEmpty",
      validWhen: false,
      message: "Please enter age.",
    },
    {
      field: "bloodGroup",
      method: "isEmpty",
      validWhen: false,
      message: "Please enter bloodGroup.",
    },
    {
      field: "mobileNo",
      method: "isEmpty",
      validWhen: false,
      message: "Please enter phone number.",
    },
    {
      field: "height",
      method: "isEmpty",
      validWhen: false,
      message: "Please enter height.",
    },
    {
      field: "weight",
      method: "isEmpty",
      validWhen: false,
      message: "Please enter weight.",
    }
  ]);
  const validatorAddress = new FormValidator([
    {
      field: "firstAddress",
      method: "isEmpty",
      validWhen: false,
      message: "Please enter address line 1.",
    },
    {
      field: "secondAddress",
      method: "isEmpty",
      validWhen: false,
      message: "Please enter address line 2.",
    },
    {
      field: "city",
      method: "isEmpty",
      validWhen: false,
      message: "Please enter city.",
    },
    {
      field: "state",
      method: "isEmpty",
      validWhen: false,
      message: "Please enter state.",
    },
    {
      field: "country",
      method: "isEmpty",
      validWhen: false,
      message: "Please enter country.",
    },
    {
      field: "pinCode",
      method: "isEmpty",
      validWhen: false,
      message: "Please enter pin code.",
    },
  ])
  const [userData, setUserData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNo: '',
    email: '',
    birthday: '',
    age: '',
    bloodGroup: '',
    height: '',
    weight: '',
    gender: '',
    maritalStatus: ''
  })
  const [addressData, setAddressData] = useState({
    firstAddress: '',
    secondAddress: '',
    city: '',
    state: '',
    country: '',
    pinCode: '',
  })
  const [page, setPage] = useState(0)
  const [validation, setValidation] = useState(validator.valid());
  const [validationAddress, setValidationAddress] = useState(validatorAddress.valid());
  const [submitted, setSubmitted] = useState(false)
  const [submittedAddress, setSubmittedAddress] = useState(false)
  const onChangeHandler = (event) => {
    const { name, value } = event.target
    // console.log(name);
    setUserData((prevState) => ({ ...prevState, [name]: value }))
  }
  const onAddressChangeHandler = (event) => {
    const { name, value } = event.target
    // console.log(name);
    setAddressData((prevState) => ({ ...prevState, [name]: value }))
  }
  const nextPageHandler = (event) => {
    event.preventDefault();
    const validation = validator.validate(userData)
    setValidation(validation)
    setSubmitted(true)
    if (validation.isValid) {
      setPage(1)
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const validationAddress = validatorAddress.validate(addressData)
    setValidationAddress(validationAddress)
    setSubmittedAddress(true)
    if (validationAddress.isValid) {
      setPage(2)
    }
  }
  let checkValidation = submitted
    ? validator.validate(userData)
    : validation

  let checkValidationAddress = submittedAddress
    ? validatorAddress.validate(addressData)
    : validationAddress
  return (
    <div>
      {
        page === 0 ?
          <UserForm
            checkValidation={checkValidation}
            onChangeHandler={onChangeHandler}
            nextPageHandler={nextPageHandler}
            userData={userData}
          /> : page === 1 ?
            <AddressForm
              addressData={addressData}
              checkValidationAddress={checkValidationAddress}
              submitHandler={submitHandler}
              onAddressChangeHandler={onAddressChangeHandler}
            /> : <UserDetails userData={{ ...userData, ...addressData }} />
      }
    </div>
  );
}

export default App;
