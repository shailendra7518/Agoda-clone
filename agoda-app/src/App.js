import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home/Home';
import { TopHidden } from './Components/TopHiddenNav/TopHidden';
import { FilterPart } from './Components/FIlter/Filter';

function App() {
  return (<>
    <TopHidden/>
    <FilterPart/>
   <Home/>
   </>
  );
}

export default App;
