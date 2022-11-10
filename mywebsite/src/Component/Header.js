import React from "react";
import './Helper/project.scss'
import icon from './Helper/images/A U.svg'

function Header(){
    return(
        <>
        <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a href="#" className="navbar-brand ">
            <img src={icon}/>  <span className="header">AWESOME UI</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto align-items-center ">
              <li className="nav-item px-3">
                <a href="#home" className="nav-link">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item px-3">
                <a href="#home" className="nav-link">
                  C<span className="capitalize">ONTACT US</span>
                </a>
              </li>
              <li className="nav-item px-3">
                <a href="#home" className="nav-link">
                  STORE
                </a>
              </li>
              <li className="nav-item px-3">
                <a href="#home" className="nav-link">
                  USE CASES
                </a>
              </li>
              <li className="nav-item px-3 pg-">
                <a href="#home" className="nav-link rounded p-2">
                  REGISTER
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </>
    )
}
export default Header