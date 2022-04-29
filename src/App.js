import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Navbar from '../src/components/navbar/Navbar.js';

import MyRouter from './routes/MyRouter';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar />
       <MyRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
