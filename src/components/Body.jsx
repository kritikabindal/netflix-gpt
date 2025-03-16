import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const appRouter = createBrowserRouter([
    {
      path: "/Browse",
      element: <Browse />,
    },
    {
      path: "/Login",
      element: <Login />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // navigate('/Browse');
      } else {
        // User is signed out
        dispatch(removeUser());
        // navigate('/Login');
      }
    });
    console.log("Body useEffect");
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
