import React, { Component } from 'react';

import './Sections.css';

class Sections extends Component {
  render() {
    return (
      <div className="about-outter">
      <div className="container">
      <div className="row">
        <section className="about col s12">

            <h1 className="body-h1">ABOUT US</h1>
            <hr/>
            <p>Since it was founded in 2014, CAYAN GROUP philosophy is a commitment to professionalism,
              integrity and credibility, creative and forward thinking real estate company in Turkey.
              We have artfully united extraordinary homes with extraordinary lives and gave our customers the
              fruit of our long experience in real estate industry.
              We have artfully united extraordinary homes with extraordinary lives and gave our customers the
              fruit of our long experience in real estate industry, We are passionate about delivering exceptional
              costumer experience whether buying or selling a home or even researching the market.
            </p>
            <p>
               our extremely hard
              working, friendly and knowledgeable fulltime support staff can greatly benefit you by
              giving professional advice and make the process easier for a smooth and seamless transaction.>
              We offer a complete suite of real estate services and we ensure to meet our customers need as we have
              experts in every field to guide you skilfully from beginning to the end of your real estate journey.
            </p>

        </section>
        <section className="our-team">
          <div className="container">
            <div className="row">
              <div className="our-team-div col s12">
                <div className="our-team-each col s12 m4">
                  <img src="assets/images/about/person1.jpg"  alt=""/>
                  <div className="name">
                    <h5>JOHN DOE</h5>
                  </div>
                  <h5>HEAD OF SALES</h5>
                  <div className="position">
                    <p><i className="material-icons">email</i>example@gmail.com</p>
                    <p><i className="material-icons">call</i>+090578676867</p>
                  </div>
                </div>
                <div className="our-team-each col s12 m4">
                  <img src="assets/images/about/person2.jpg" alt=""/>
                  <div className="name">
                    <h5>JOHN DOE</h5>
                  </div>
                  <h5>HEAD OF SALES</h5>
                  <div className="position">
                    <p><i className="material-icons">email</i>example@gmail.com</p>
                    <p><i className="material-icons">call</i>+090578676867</p>
                  </div>
                </div>
                <div className="our-team-each col s12 m4">
                  <img src="assets/images/about/person3.jpg" alt=""/>
                  <div className="name">
                    <h5>JOHN DOE</h5>
                  </div>
                  <h5>HEAD OF SALES</h5>
                  <div className="position">
                    <p><i className="material-icons">email</i>example@gmail.com</p>
                    <p><i className="material-icons">call</i>+090578676867</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
        </div>
      </div>
    );
  }
}

export default Sections;
