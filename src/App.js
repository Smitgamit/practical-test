import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from './components/UserForm';
import { useState } from 'react';
import UserDetails from './components/UserDetails';
import FormValidator from './components/FormValidator';

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
  const [userData, setUserData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNo: '',
    email: '',
    birthDay: '',
    age: '',
    bloodGroup: '',
    height: '',
    weight: '',
    gender: '',
    maritalStatus: ''
  })
  const [page, setPage] = useState(0)
  const [validation, setValidation] = useState(validator.valid());
  const [submitted, setSubmitted] = useState(false)
  const onChangeHandler = (event) => {
    const { name, value } = event.target
    // console.log(name);
    setUserData((prevState) => ({ ...prevState, [name]: value }))
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const validation = validator.validate(userData)
    setValidation(validation)
    setSubmitted(true)
    if (validation.isValid) {
      setPage(1)
    }

  }
  let checkValidation = submitted
    ? validator.validate(userData)
    : validation
  return (
    <div>
      {
        page === 0 ?
          <UserForm
            checkValidation={checkValidation}
            onChangeHandler={onChangeHandler}
            submitHandler={submitHandler}
            userData={userData}
          /> :
          <UserDetails userData={userData} />
      }

      {/* <UserDetails userData={userData} /> */}
    </div>
  );
}

export default App;
