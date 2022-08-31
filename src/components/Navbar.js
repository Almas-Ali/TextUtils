import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavItems({toggleMode, styleMode}) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-${styleMode.bg} text-${styleMode.fg}`}>
        <div className="container-fluid">
          <Link to="/" className={`navbar-brand text-${styleMode.fg}`}>TextUtils</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className={`nav-link text-${styleMode.fg}`}>Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={`nav-link text-${styleMode.fg}`}>About</Link>
              </li>
            </ul>
            <div className="form-check form-switch" onClick={toggleMode}>
              <input type="checkbox" className='form-check-input' role="switch" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavItems;