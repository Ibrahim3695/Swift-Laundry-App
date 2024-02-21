import React from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterSignUp from './registerSignupComponent/RegisterSignUp';
import RegisterLogin from './registerLoginComponent/RegisterLogin';
import Signup from './signupComponent/Signup';
import Login from './loginComponents/Login';
import LandingPage from './landingPageComponents/LandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/registerSignup",
    element: <RegisterSignUp/>
  },
  {
    path: "/registerLogin",
    element: <RegisterLogin/>
  },
  {
    path: "/registerLogin",
    element: <Signup/>
  },
  {
    path: "/registerLogin",
    element: <Login/>
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

