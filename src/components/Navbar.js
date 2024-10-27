import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, Link} from 'react-router-dom';


function Navbar(props) {
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">{props.about}</NavLink>
            </li>
          </ul>
        <div className="d-flex">
          <div className="bg-white mx-2 rounded border border-grey" style={{height : '25px', width : '25px'}}  onClick={() => (props.toggleTheme('light'))}></div>
          <div className="bg-dark mx-2 rounded  border border-grey" style={{height : '25px', width : '25px'}}  onClick={() => (props.toggleTheme('dark'))}></div>
          <div className="bg-primary mx-2 rounded  border border-grey" style={{height : '25px', width : '25px'}}  onClick={() => (props.toggleTheme('primary'))}></div>
          <div className="bg-success mx-2 rounded  border border-grey" style={{height : '25px', width : '25px'}}   onClick={() => (props.toggleTheme('success'))}></div>
          <div className="bg-danger mx-2 rounded  border border-grey" style={{height : '25px', width : '25px'}}   onClick={() => (props.toggleTheme('danger'))}></div>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

// type of expected props 
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
};

// default values for props if nothing was passed
Navbar.defaultProps = {
  title: "Site Title",
  about: "About"
};

