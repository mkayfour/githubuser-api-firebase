import React, { useContext, useState } from 'react';
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import './App.css';

import UserContext from './context/UserContext';
import { toast, ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/auth';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';
import Footer from './layout/Footer';
import Header from './layout/Header';

import firebaseConfig from './config/firebaseConfig';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='*' component={NotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
