import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import{ useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  //useRef is used to get the value of the input field
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    console.log("toggleSignInForm");
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonCLick = () => {
    //vadiate the form data

    console.log("handleButtonCLick");
    console.log(email.current.value);
    console.log(password.current.value);
    const nameValue = name.current ? name.current.value : "";
    console.log(nameValue);
    // console.log(name.current.value);
    const message = checkValidData(
      nameValue,
      email.current.value,
      password.current.value
    );
    console.log("message", message);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/40392661?v=4",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/Browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });

          console.log("user", user);
          // navigate("/Browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in

      const auth = getAuth();
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user", user);
          navigate("/Browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error", errorCode, errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black text-white my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign IN" : "Sign UP"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          type="password"
          ref={password}
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700 "
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 rounded-lg w-full cursor-pointer"
          onClick={handleButtonCLick}
        >
          {isSignInForm ? "Sign IN" : "Sign UP"}
        </button>
        <p className="py-4" onClick={toggleSignInForm}>
          {" "}
          {isSignInForm
            ? "New to Netflix?Signup now"
            : "Already registered?Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
