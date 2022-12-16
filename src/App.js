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
      field: "phoneNumber",
      method: "isEmpty",
      validWhen: false,
      message: "Please enter phone number.",
    },
    {
      field: "contactMessage",
      method: "isEmpty",
      validWhen: false,
      message: "Please enter message.",
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
  const onChangeHandler = (event) => {
    const { name, value } = event.target
    console.log(name);
    setUserData((prevState) => ({ ...prevState, [name]: value }))
  }
  return (
    <div>
      <UserForm
        onChangeHandler={onChangeHandler}
        userData={userData}
      />
      {/* <UserDetails userData={userData} /> */}
    </div>
  );
}

export default App;
