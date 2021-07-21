
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import Header from './components/nav/header';
import RegisterComplete from "./pages/auth/RegisterComplete"

const App = () => {
  return (
    <div>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Register/Complete" component={RegisterComplete} />
      </Switch>
    </div>
  );
}

export default App;
