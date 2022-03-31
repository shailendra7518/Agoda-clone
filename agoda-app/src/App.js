import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home/Home';
import { TopHidden } from './Components/TopHiddenNav/TopHidden';

function App() {
  return (<>
    <TopHidden/>
   <Home/>
   </>
  );
}

export default App;
