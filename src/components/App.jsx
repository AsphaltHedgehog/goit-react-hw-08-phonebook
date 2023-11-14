// base
import { Routes, Route } from "react-router-dom";

// hook's 
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// pages
import ContactsBook from "Pages/ContactsBook/ContactsBook.js";
import RegisterForm from "Pages/Register/RegisterForm.js";
import LogInForm from "Pages/Login/LogInForm.js";
import NotFound from "Pages/NotFound/NotFound.js";
import Home from "Pages/Home/Home.js";

// selectors
import { selectAuth } from "redux/selectors";

// components
import authOperations from "redux/auth/auth-operations.js";
import Header from "./Header/Header.js";




const App = () => {
  const [firstRender, setFirstRender ] = useState(0)
  const { token } = useSelector(selectAuth);

  const dispatch = useDispatch()

  const fetchCurrentUser = authOperations.currentAuth

  useEffect(() => {
    if (firstRender < 1) {
        setFirstRender(1)
      token && dispatch(fetchCurrentUser(token))
      return 
      }
    }, [firstRender, token, dispatch, fetchCurrentUser]);
  
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contacts" element={<ContactsBook />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
};


export default App
