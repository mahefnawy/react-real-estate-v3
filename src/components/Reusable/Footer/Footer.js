import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Footer.css';

class Footer extends Component {
  render() {
    const data = this.props.data;
    return (
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <img src="https://res.cloudinary.com/cayangroup9292/image/upload/v1521832676/nav/home-page-logo.png" alt="cayan group logo"/>
              <ul className="footer-nav center ">

                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className={"nav-link " + data.classNav} exact to="/">{data.home}</NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className={"nav-link " + data.classNav}  to="/projects">{data.projects}</NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className={"nav-link " + data.classNav}  to="/services">{data.services}</NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className={"nav-link " + data.classNav}  to="/about">{data.about}</NavLink>
                </li>
                <li className="link-wrapper">
                  <NavLink activeClassName="selected" className={"nav-link " + data.classNav}  to="/contact">{data.contact}</NavLink>
                </li>

              </ul>

                <ul className="footer-social">
                  <a className="bg-facebook" href="https://www.facebook.com/CayanGroup.tr/"><i className="ion-social-facebook"></i></a>
                  <a className="bg-twitter" href="https://twitter.com/CayanGroup_tr"><i className="ion-social-twitter"></i></a>
                  <a className="bg-youtube" href="https://www.youtube.com/channel/UCE6NO-T6B9DdHMwit-3QPSw/featured?disable_polymer=1"><i className="ion-social-youtube"></i></a>
                  <a className="bg-linkedin" href="https://www.linkedin.com/in/cayan-group-490441113/"><i className="ion-social-linkedin"></i></a>
                  <a className="bg-instagram" href="https://www.instagram.com/cayangroup_tr/"><i className="ion-social-instagram-outline"></i></a>
                </ul>
                <p className={data.classNav}>{data.copyrights}</p>
              </div>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
