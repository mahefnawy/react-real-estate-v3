import React, { Component } from 'react';
import { connect } from 'react-redux';


import './Home.css';
import Navbar from '../../Reusable/Navbar/Navbar.js';
import Footer from '../../Reusable/Footer/Footer.js';
import Action from '../../Reusable/Action/Action.js';
import ProjectsCarousel from '../../Reusable/ProjectsCarousel/ProjectsCarousel.js';
import Getintouch from '../../Reusable/Getintouch/Getintouch.js';
import Header from './Header/Header.js';
import Info from './Info/Info.js';
import Whyus from './Whyus/Whyus.js';
import Testimonial from './Testimonial/Testimonial.js';
let actions = require('../../../actions');

class Home extends Component {
  render() {
        const content = this.props.content;
        const switchLanguage = this.props.switchLanguage;


        if (content){
              return (
                <div className="home">
                  <Action />
                  <Navbar data={content.page.navbar} switchLanguage={switchLanguage}/>
                  <Header data={content.page.Home.header}/>
                  <Info  data={content.page.Home.info}/>
                  <ProjectsCarousel data={content.page.Home.ProjectsCarousel}/>
                  <Whyus data={content.page.Home.whyus}/>
                  <Testimonial />
                  <Getintouch data={content.page.getintouch}/>
                  <Footer data={content.page.footer}/>
                </div>
              )
        } else {
          return;
        }

  }
}


export default connect(
  (state) => ({content: state.content}),
  (dispatch) => ({switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))})
)(Home);
