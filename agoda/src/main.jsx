import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import {BrowserRouter} from "react-router-dom"
import { AppProvider } from "../src/components/context/provider"
import { AuthContextProvider } from './components/authContext/authContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
          <App />
      </AuthContextProvider>    
    </BrowserRouter>   
  </React.StrictMode>,
  document.getElementById('root')
)
