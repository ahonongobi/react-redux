import React from "react";
import {createStore, applyMiddleware} from "redux"
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import rootReducer from './reducers';
import { createRoot } from "react-dom/client";
import Counter from "./components/counter"
import Signup from "./components/signup";
import UserList from "./components/UserList";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = createStore(rootReducer, applyMiddleware(thunk))

root.render(
  <Provider store ={store} >
    <>
    <Counter />
    <Signup />
    <UserList />
    </>
  </Provider>
);
