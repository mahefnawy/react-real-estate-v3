import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import '../../../data/content.json'
const Provider = require('react-redux').Provider;
const createStore = require('redux').createStore;
const content = require('../../../reducer');

class Navbar extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render() {
        const data = this.props.data;
        let switchLanguage = this.props.switchLanguage;
    return (
      <div>
        <i onClick={ this.showSettings } className="material-icons sidenav-trigger right">menu</i>
        <Menu >
          <img className="sidenav-logo" src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1522222933/other/home-page-logo.png" alt="cayan group logo"/>
          <li className="link-wrapper">
            <NavLink activeClassName="selected" className="menu-item" exact to="/">{data.home}</NavLink>
          </li>
          <li className="link-wrapper">
            <NavLink activeClassName="selected" className="menu-item" exact to="/projects">{data.projects}</NavLink>
          </li>
          <li className="link-wrapper">
            <NavLink activeClassName="selected" className="menu-item" exact to="/services">{data.services}</NavLink>
          </li>
          <li className="link-wrapper">
            <NavLink activeClassName="selected" className="menu-item" exact to="/about">{data.about}</NavLink>
          </li>
          <li className="link-wrapper">
            <NavLink activeClassName="selected" className="menu-item" exact to="/contact">{data.contact}</NavLink>
          </li>

        </Menu>
        <div className="navbar-fixed">
          <nav className="normal-nav">
            <div className="nav-wrapper">
              <a href="index.html" className="brand-logo"><img className="responsive-img" src="https://res.cloudinary.com/dd5e5iszi/image/upload/v1522221061/other/logo-nav.png" alt="cayan group logo"/></a>

              <ul className="nav-links center hide-on-med-and-down">

                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className="nav-link" exact to="/">{data.home}</NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className="nav-link"  to="/projects">{data.projects}</NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className="nav-link"  to="/services">{data.services}</NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className="nav-link"  to="/about">{data.about}</NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className="nav-link"  to="/contact">{data.contact}</NavLink>
                </li>

              </ul>
              <ul className="right hide-on-med-and-down language">
                <li className="dropdown-button right"><a onClick={switchLanguage.bind(this,'en')} className="language-a">Eng</a></li>
                <li className="dropdown-button right"><a onClick={switchLanguage.bind(this,'ar')} className="language-a">عربي</a></li>
                <li className="right">
                  <p>CALL US: +905061162526</p>
                </li>
              </ul>

            </div>

          </nav>
        </div>

      </div>
    );
  }

}

export default Navbar;
