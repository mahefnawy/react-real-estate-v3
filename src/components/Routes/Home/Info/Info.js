import React, { Component } from 'react';
import '../../../../base-styles/base-styles.css'
import './Info.css';

class Info extends Component {
  render() {
    const data = this.props.data;
    return (
      <section className="company-intro center section" id="company-intro">
          <div className="container">
            <div className="row">
            <h4>{data.header}</h4>
            <p>{data.text}  <a href="/about">Read more</a></p>

              <div className="row">
                <div className="col s12 m12 l12">
                  <div className="company-info-icons col s6 l3">
                    <div className="company-info-images investment">

                    </div>
                    <br />
                    <h5>Real Estate Investment</h5>
                  </div>
                  <div className="company-info-icons col s6 l3">
                    <div className="company-info-images management">

                    </div>
                    <br/>
                    <h5>Real Estate Management</h5>
                  </div>
                  <div className="company-info-icons col s6 l3">
                    <div className="company-info-images establishment">

                    </div>
                    <br />
                    <h5>Company Establishment</h5>
                  </div>

                  <div className="company-info-icons col s6 l3">
                    <div className="company-info-images pickups">

                    </div>
                    <br />
                    <h5>Airport Pickups</h5>
                  </div>

                </div>
              </div>


            </div>
          </div>
        </section>
    );
  }
}

export default Info;
