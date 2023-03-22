// props : parameters that you difine name in component and declare name in App.js
// while using actual component

// PropsType : here you can decide type(string,integer,object,ext) of props
// if don't give name to prop according theire type then it will show/display error
import React from "react";

import PropTypes from "prop-types";
// import{Link} from "react-router-dom"

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
            <Link className="nav-link" to="/about">{props.AboutText}</Link> 
            
          </li> */}
            </ul>

            <div className="d-flex">
              <div
                className="bg-primary rounded mx-2"
                style={{
                  height: "30px",
                  width: "30px",
                  border: "1px solid black",
                }}
                onClick={() => {
                  props.toggle("primary");
                }}
              ></div>
              <div
                className="bg-success rounded mx-2"
                style={{
                  height: "30px",
                  width: "30px",
                  border: "1px solid black",
                }}
                onClick={() => {
                  props.toggle("success");
                }}
              ></div>
              <div
                className="bg-danger rounded mx-2"
                style={{
                  height: "30px",
                  width: "30px",
                  border: "1px solid black",
                }}
                onClick={() => {
                  props.toggle("danger");
                }}
              ></div>
              <div
                className="bg-warning rounded mx-2"
                style={{
                  height: "30px",
                  width: "30px",
                  border: "1px solid black",
                }}
                onClick={() => {
                  props.toggle("warning");
                }}
              ></div>
              <div
                className="bg-secondary rounded mx-2"
                style={{
                  height: "30px",
                  width: "30px",
                  border: "1px solid black",
                }}
                onClick={() => {
                  props.toggle("secondary");
                }}
              ></div>
              <div
                className="bg-info rounded mx-2"
                style={{
                  height: "30px",
                  width: "30px",
                  border: "1px solid black",
                }}
                onClick={() => {
                  props.toggle("info");
                }}
              ></div>
              <div
                className="bg-light rounded mx-2"
                style={{
                  height: "30px",
                  width: "30px",
                  border: "1px solid black",
                }}
                onClick={() => {
                  props.toggle("light");
                }}
              ></div>
              <div
                className="bg-dark rounded mx-2"
                style={{
                  height: "30px",
                  width: "30px",
                  border: "1px solid black",
                }}
                onClick={() => {
                  props.toggle("dark");
                }}
              ></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
// Declare default props name
Navbar.defaultProps = {
  title: "Navbar Name Here",
  AboutText: "About here",
};

// declaring types of props that is used in components
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  AboutText: PropTypes.string.isRequired,
};
