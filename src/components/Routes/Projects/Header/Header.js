import React, { Component } from 'react';
import '../../../../base-styles/base-styles.css'
import './Header.css';

class Header extends Component {
  render() {
    const data = this.props.data;
    return (
      <section className="projects-hero-carousel col s12">
        <div className={"container " + data.classTitle}>
          <h1 >{data.title}</h1>

        </div>
      </section>

    );
  }
}

export default Header;
