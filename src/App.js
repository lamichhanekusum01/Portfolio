import React from 'react';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import Navbar from '../src/components/navbar/Navbar.js';

import MyRouter from './routes/MyRouter';
import Footer from './components/commonComponent/Footer.js';

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
