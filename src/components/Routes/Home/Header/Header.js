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
              <ul className={"hide-on-med-and-down "+ data.class}>
                <li className="active">{data.home}<a href="/"></a></li>
                <li><a href="/projects">{data.projects}</a></li>
                <li><a href="/services">{data.services}</a></li>
                <li><a href="/about">{data.about}</a></li>
                <li><a href="/contact">{data.contact}</a></li>
              </ul>
            </div>
          </nav>

          <div className="hero-text">
            <img className="responsive-img" src="assets/images/home-page/home-page-logo.png" alt="" />
            <h3 className={data.classTitle}>{data.titleSub}</h3>
            <h1 className={"follow1 follow " + data.classTitle}><span className={data.classSpan}>{data.titleMain1}</span >{data.titleMain2}<span className={data.classSpan}>{data.titleMain3}</span></h1>
          </div>
      </div>

    );
  }
}

export default Header;
