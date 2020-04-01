import React, { createContext } from 'react';
// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import FoodDetail from './components/FoodDetail/FoodDetail';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import { AuthContextProvider } from './components/Login/useAuth';






function App() {
  // const user ={name:"KoduMia", email:"kodumia12343@gmail.com"}
  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route path="/food/:foodKey">
              <FoodDetail></FoodDetail>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/">
              <Container></Container>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
        </AuthContextProvider>
    </div>
  );
}

export default App;
