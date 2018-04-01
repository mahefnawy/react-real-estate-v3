import React, { Component } from 'react';
import '../../../../base-styles/base-styles.css'
import './Whyus.css';

class Whyus extends Component {
  render() {
    return (
      <section className="why-choose-us">
          <div className="container">
            <div className="row">
              <h1 className="body-h1">WHY CHOOSE US</h1>
              <div className="why-choose-us-info">
                <div className="col s12 m6 l4">
                  <div className="why-choose-us-info-each col s12">
                  <i className="ion-ios-people col s3 bg"></i>
                    {/*<div className="col s3 bg bg-pro"></div> */}
                    <div className="col s9 why-choose-us-text">
                      <h6>Professional Team</h6>
                      <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                    </div>
                  </div>
                  <div className="why-choose-us-info-each col s12">
                  <i className="ion-ios-telephone col s3 bg"></i> 
                    {/*<div className="col s3 bg bg-fast_com"></div>*/}
                    <div className="col s9 why-choose-us-text">
                      <h6>Fast Communication</h6>
                      <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6 l4">
                  <div className="why-choose-us-info-each col s12">
                  <i className="ion-ios-pricetags col s3 bg"></i>
                    {/*<div className="col s3 bg bg-best_pricing"></div>*/}
                    <div className="col s9 why-choose-us-text">
                      <h6>Best Pricing</h6>
                      <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                    </div>
                  </div>
                  <div className="why-choose-us-info-each col s12">
                  <i className="ion-arrow-graph-up-left col s3 bg"></i>
                    {/*<div className="col s3 bg bg-service"></div>*/}
                    <div className="col s9 why-choose-us-text">
                      <h6>Service Excellence</h6>
                      <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                    </div>
                  </div>
                </div>
                <div className="col s12 m12 l4">
                  <div className="why-choose-us-info-each col s12 m6 l12">
                  <i className="ion-ios-pulse-strong col s3 bg"></i>
                    {/*<div className="col s3 bg bg-trust"></div>*/}
                    <div className="col s9 why-choose-us-text">
                      <h6>Trust</h6>
                      <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                    </div>
                  </div>
                  <div className="why-choose-us-info-each col s12 m6 l12">
                  <i className="ion-heart col s3 bg"></i>
                    {/*<div className="col s3 bg bg-satisfy"></div>*/}
                    <div className="col s9 why-choose-us-text">
                      <h6>Passion to Satisfy</h6>
                      <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Whyus;
