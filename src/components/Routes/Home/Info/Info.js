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
            <h4 className={data.classInfo}>{data.main}</h4>
            <p className={data.classInfo}>{data.submain}</p>

              <div className="row">
                <div className="col s12 m12 l12">
                  <div className="company-info-icons col s6 l3">
                    <div className="company-info-images investment">

                    </div>
                    <br />
                    <h5 className={data.classInfo}>{data.investment}</h5>
                  </div>
                  <div className="company-info-icons col s6 l3">
                    <div className="company-info-images management">

                    </div>
                    <br/>
                    <h5 className={data.classInfo}>{data.management}</h5>
                  </div>
                  <div className="company-info-icons col s6 l3">
                    <div className="company-info-images establishment">

                    </div>
                    <br />
                    <h5 className={data.classInfo}>{data.company}</h5>
                  </div>

                  <div className="company-info-icons col s6 l3">
                    <div className="company-info-images pickups">

                    </div>
                    <br />
                    <h5 className={data.classInfo}>{data.airport}</h5>
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
