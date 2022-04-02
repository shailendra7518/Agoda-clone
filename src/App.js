import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home/Home';
import { TopHidden } from './Components/TopHiddenNav/TopHidden';
import { FilterPart } from './Components/FIlter/Filter';
import { Navbar } from './Components/LoginSignup/navbar/navbar';
import { Footer } from './Components/LoginSignup/footer/footer';
import { AllRoutes } from './Components/Routes/Routes';
import {ProductPage} from './Components/product/productpage.jsx'

function App() {
  return (<>
    {/* <TopHidden/>
    <FilterPart/>
   <Home/> */}
   <Navbar/>
   <AllRoutes/>
   {/* <ProductPage/> */}
   <Footer/>
  
  
   </>
  );
}

export default App;
