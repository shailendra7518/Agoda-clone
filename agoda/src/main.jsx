import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import {BrowserRouter} from "react-router-dom"
import { AppProvider } from "../src/components/context/provider"
import { AuthContextProvider } from './components/authContext/authContext'
import { Provider } from "react-redux";
import { store } from "./productRedux/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthContextProvider>    
    </BrowserRouter>   
  </React.StrictMode>,
  document.getElementById('root')
)
