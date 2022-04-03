import {Checkout} from "./components/checkout/Checkout";

import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={"home page"} />
        <Route path="/checkout" element={< Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
