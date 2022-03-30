import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import {BrowserRouter} from "react-router-dom"
import { AppProvider } from "../src/components/context/provider"
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>   
  </React.StrictMode>,
  document.getElementById('root')
)
