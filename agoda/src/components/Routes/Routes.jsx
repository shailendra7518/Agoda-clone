import {Routes , Route} from "react-router-dom"
import { Login } from "../login/login"
import { Register } from "../login/register"
import { Navbar } from "../navbar/navbar"

export const Routes = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
            </Routes>
        </>
    )
}