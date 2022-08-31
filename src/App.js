import './App.css';
import Index from './components/Index.js';
import NavItems from './components/Navbar.js';
import Links from './components/Links.js';
import About from './components/About.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {

  const [styleMode, setstyleMode] = useState({
    mode: 'light'
  })

  function toggleMode() {
    if (styleMode.mode === 'light') {
      setstyleMode({
        mode: 'dark',
        bg: 'dark',
        fg: 'light'
      })
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = '#fff';
    } else {
      setstyleMode({
        mode: 'light',
        bg: 'light',
        fg: 'dark'
      })
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={
            <>
              <NavItems toggleMode={toggleMode} styleMode={styleMode} />
              <Index title="TextUtils" styleMode={styleMode} />
              <Links />
            </>
          } />

          <Route exact path="/about" element={
            <>
              <NavItems toggleMode={toggleMode} styleMode={styleMode} />
              <About styleMode={styleMode} />
              <Links />
            </>
          } />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
