import React, { Component } from 'react';
import '../../../../base-styles/base-styles.css'
import './Header.css';

class Header extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="home-page-header">
          <nav className="home-page-nav">
            <div className="center nav-wrapper">
              <a href="#!" className="brand-logo"><img className="responsive-img follow2 follow" src="https://res.cloudinary.com/cayangroup9292/image/upload/v1521832676/nav/home-page-logo.png" alt="cayan group logo"/></a>
              <ul className=" hide-on-med-and-down">
                <li className="active">{data.home}<a href="/"></a></li>
                <li><a href="/projects">{data.projects}</a></li>
                <li><a href="/services">{data.services}</a></li>
                <li><a href="/about">{data.about}</a></li>
                <li><a href="/contact">{data.contact}</a></li>
              </ul>
            </div>
          </nav>
          <ul className="right hide-on-med-and-down language language-home">
            <li className="dropdown-button right" href="#dropdown2" data-activates="dropdown2"><i className="material-icons right">arrow_drop_down</i><a className="language-a">EN</a></li>
            <li className="right">
              <p>CALL US: +905061162526</p>
            </li>
          </ul>
          <div className="hero-text">
            <img className="responsive-img" src="assets/images/home-page/home-page-logo.png" alt="" />
            <h3 className="">{data.titleSub}</h3>
            <h1 className="follow1 follow">{data.titleMain}</h1>
          </div>
      </div>

    );
  }
}

export default Header;
