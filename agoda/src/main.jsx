import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import {BrowserRouter} from "react-router-dom"
import { AppProvider } from "../src/components/context/provider"
// import {store} from "./components/store";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider  > 
      {/* store={store} */}
        <App />
      </AppProvider>
    </BrowserRouter>   
  </React.StrictMode>,
  document.getElementById('root')
)
