import React, { Component } from 'react';
import { connect } from 'react-redux';
import './About.css';
import Action from '../../Reusable/Action/Action.js';
import Navbar from '../../Reusable/Navbar/Navbar.js';
import Header from './Header/Header.js';
import Sections from './Sections/Sections.js';
import Getintouch from '../../Reusable/Getintouch/Getintouch.js';
import Footer from '../../Reusable/Footer/Footer.js';



let actions = require('../../../actions');


class About extends Component {
  render() {
            const content = this.props.content;
            const switchLanguage = this.props.switchLanguage;
    return (
      <div className="">
        <Action />
        <Navbar data={content.page.navbar} switchLanguage={switchLanguage}/>
        <Header />
        <Sections />
        <Getintouch data={content.page.getintouch}/>
        <Footer data={content.page.footer}/>

      </div>
    );
  }
}

export default connect(
  (state) => ({content: state.content}),
  (dispatch) => ({switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))})
)(About);
