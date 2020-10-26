import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";

import AddTask from "./components/AddTask";
import Task from "./components/ViewTask";
import EditTask from "./components/EditeTask";

import TodoList from "./components/todoList.component";
import Navbar from './layout/Navbar';

function App() {
  return (<Router>
    <div className="App">
         
    <Navbar />
      {/* <div className="auth-wrapper">
        <div className="auth-inner"> */}
        <div className="container">
          <div className="pt-5 mt-4">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route exact path="/tasks/add" component={AddTask} />
              <Route exact path="/tasks/:id" component={Task} />
              <Route exact path="/tasks/edit/:id" component={EditTask} />
              <Route path="/todo-list" component={TodoList} />
            </Switch>
          </div>
        </div>
    </div>
    
    

    </Router>
  );
}

export default App;