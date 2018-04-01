import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <img src="https://res.cloudinary.com/cayangroup9292/image/upload/v1521832676/nav/home-page-logo.png" alt="cayan group logo"/>
              <ul className="footer-nav center ">

                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className="nav-link" exact to="/">HOME</NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className="nav-link"  to="/projects">PROJECTS</NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className="nav-link"  to="/services">SERVICES</NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className="nav-link"  to="/about">ABOUT</NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className="nav-link"  to="/contact">CONTACT</NavLink>
                </li>

              </ul>

                <ul className="footer-social">
                  <a className="bg-facebook" href="https://www.facebook.com/CayanGroup.tr/"><i className="ion-social-facebook"></i></a>
                  <a className="bg-twitter" href="https://twitter.com/CayanGroup_tr"><i className="ion-social-twitter"></i></a>
                  <a className="bg-youtube" href="https://www.youtube.com/channel/UCE6NO-T6B9DdHMwit-3QPSw/featured?disable_polymer=1"><i className="ion-social-youtube"></i></a>
                  <a className="bg-linkedin" href="https://www.linkedin.com/in/cayan-group-490441113/"><i className="ion-social-linkedin"></i></a>
                  <a className="bg-instagram" href="https://www.instagram.com/cayangroup_tr/"><i className="ion-social-instagram-outline"></i></a>
                </ul>
                <p>&copy; Cayan Group Real Estate 2018</p>
              </div>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
