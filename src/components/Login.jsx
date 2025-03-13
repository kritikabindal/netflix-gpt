import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  //useRef is used to get the value of the input field
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    console.log('toggleSignInForm');
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonCLick = () => {

    //vadiate the form data

    console.log('handleButtonCLick');
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(name.current.value);
    const message = checkValidData(name.current.value, email.current.value, password.current.value);
    console.log("message", message);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //sign up

    }
    else {
      //sign in}

    }
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg" alt="logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-3/12 absolute p-12 bg-black text-white my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80'>
        <h1 className='text-3xl font-bold py-4'>{isSignInForm ? "Sign IN" : "Sign UP"}</h1>
        {!isSignInForm && <input type="text" ref={name} placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />}
        <input type="text" ref={email} placeholder='Email address' className='p-4 my-4 w-full bg-gray-700' />

        <input type="password" ref={password} placeholder='password' className='p-4 my-4 w-full bg-gray-700 ' />
        <p className='text-red-500'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 rounded-lg w-full cursor-pointer' onClick={handleButtonCLick}>{isSignInForm ? "Sign IN" : "Sign UP"}</button>
        <p className='py-4' onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix?Signup now" : "Already registered?Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login