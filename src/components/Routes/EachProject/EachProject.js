import React, { Component } from 'react';
import { connect } from 'react-redux';
import find from 'lodash/find';
import { Link } from 'react-router-dom';
import './EachProject.css';
import Action from '../../Reusable/Action/Action.js';
import Navbar from '../../Reusable/Navbar/Navbar.js';
import './Header/Header.css';
import './PhotoTour/PhotoTour.css';
import './Plans/Plans.css';
import './Privileges/Privileges.css';
import './Location/Location.css';
import './overview/overview.css'
import Getintouch from '../../Reusable/Getintouch/Getintouch.js';
import Footer from '../../Reusable/Footer/Footer.js';

import PRODUCTS from '../../Data/projects';
import Slider from 'react-slick'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


let actions = require('../../../actions');





class EachProject extends Component {
  render() {
    const content = this.props.content;
    const switchLanguage = this.props.switchLanguage;
    const data = content.page.eachProject
    const product = find(PRODUCTS, { id: this.props.match.params.id });
    const currentProduct = product;

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div >
        <Navbar data={content.page.navbar} switchLanguage={switchLanguage}/>
          <section className={"header col s12 cayan-"+ currentProduct.id} >
            <div className="project-code">
              <h3 id="product-code">CAYAN{currentProduct.id}</h3>
            </div>
            <div className="project-details row">
              <div className="project-details-wrapper">
                <div className="project-details-each col s4 l4">
                  <div className="image col s12 location-icons">
                  </div>
                  <div className="text col s12">
                    <p>{data.location}</p>
                    <p className={data.classInfoEn}>{currentProduct.location}</p>
                    <p className={data.classInfoAr}>{currentProduct.locationAr}</p>
                  </div>
                </div>
                <div className="project-details-each col s4 l4">
                  <div className="image col s12 delivery-icons">
                  </div>
                  <div className="text col s12">
                    <p>{data.delivery}</p>
                    <p className={data.classInfoEn}>{currentProduct.deliveryDate}</p>
                    <p className={data.classInfoAr}>{currentProduct.deliveryDateAr}</p>
                  </div>
                </div>
                <div className="project-details-each col s4 l4">
                  <div className="image col s12 type-icons">
                  </div>
                  <div className="text col s12">
                    <p>{data.type}</p>
                    <p className="nutural">{currentProduct.typesAll}</p>
                  </div>
                </div>
                <div className="project-details-each col s4 l4">
                <div className="image col s12 area-icons">
                </div>
                <div className="text col s12">
                  <p>{data.area}</p>
                  <p className="nutural">{currentProduct.area}</p>
                </div>
              </div>
                <div className="project-details-each col s4 l4">
                <div className="image col s12 installments-icons">
                </div>
                <div className="text col s12">
                  <p>{data.installments}</p>
                  <p>{currentProduct.installment}</p>
                  <p className={data.classInfoEn}>{currentProduct.installment} months installments</p>
                  <p className={data.classInfoAr}> شهر تقسيط {currentProduct.installment}</p>
                </div>
              </div>
                <div className="project-details-each col s4 l4">
                <div className="image col s12 status-icons">
                </div>
                <div className="text col s12">
                  <p>{data.status}</p>
                  <p className={data.classInfoEn}>{currentProduct.status}</p>
                  <p className={data.classInfoAr}>{currentProduct.statusAr}</p>
                </div>
              </div>
              </div>
            </div>
          </section>
          <section className="overview">
          <div className="container">
            <div className="row">
              <div className="text">
                <h2 className={data.classTitle}>{data.overview}</h2>
                <hr/>
              </div>
              <div className="description">
                <p className={data.classInfoEn}>{currentProduct.description}</p>
                <p className={data.classInfoAr}>{currentProduct.descriptionAr}</p>
              </div>

            </div>
          </div>

          </section>
            <section className="photo-tour col s12">
              <div className="container">
                <div className="row">
                  <div className="text">
                    <h2 className={data.classTitle}>{data.photo}</h2>
                    <hr/>
                  </div>
                  <div className="images col s12">
                    <div className="left-btn col s1">
                      <p>PREV</p>
                    </div>
                         <Slider {...settings}>
                          {currentProduct.images.map((images)=>{return(<div className="image-each">
                            <img src={images} alt="projects, real estate, istanbul, turkey,cayan group"/>
                          </div>)})}
                        </Slider>
                    <div className="right-btn col s1">
                      <p>NEXT</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="privilages">
                <div className="container">
                  <div className="row">
                    <div className="text">
                      <h2 className={data.classTitle}>{data.privileges}</h2>
                      <hr />
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image parks">

                      </div>
                      <div className="text-each">
                        <p>{data.parks}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image family">

                      </div>
                      <div className="text-each">
                        <p>{data.family}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image pool">

                      </div>
                      <div className="text-each">
                        <p>{data.pool}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image security">

                      </div>
                      <div className="text-each">
                        <p>{data.security}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image cafes">

                      </div>
                      <div className="text-each">
                        <p>{data.cafes}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image resturants">

                      </div>
                      <div className="text-each">
                        <p>{data.resturants}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image gym">

                      </div>
                      <div className="text-each">
                        <p>{data.fitness}</p>
                        <hr />
                      </div>
                    </div>
                    <div className="privilages-each col s12 m6 l3">
                      <div className="image trails">

                      </div>
                      <div className="text-each">
                        <p>{data.trails}</p>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            <section className="plans col s12">
                <div className="container">
                  <div className="row">
                    <div className="text">
                      <h2 className={data.classTitle}>{data.plans}</h2>
                      <hr/>
                    </div>
                    <Tabs>

                      <TabList>
                      {currentProduct.types.map((type)=>{return(
                        <Tab>{type.type}</Tab>
                        )})}
                      </TabList>
                      {currentProduct.types.map((type)=>{return(

                      <TabPanel>
                      <div className="plan-image s12 m8 left">
                        <img src={type.plan} alt="projects, real estate, istanbul, turkey,cayan group"/>
                      </div>
                      <div className="plan-info s12 m4 right">
                        <div className="price">
                          <h3>{type.minPrice} TL - {type.maxPrice} TL</h3>
                        </div>
                        <div className="area">
                          <h3>AREA: {type.minArea}m - {type.maxArea}m</h3>
                        </div>
                        <a href="#contact-section">
                          <button type="button" name="button">
                              {data.button}
                          </button>
                        </a>
                      </div>
                      </TabPanel>
                      )})}
                    </Tabs>

                  </div>
                </div>
              </section>
              <section className="location">
                  <div className="container">
                    <div className="row">
                      <div className="text">
                        <h2 className={data.classTitle}>{data.nearBy}</h2>
                        <hr/>
                      </div>
                      <div className="tabs col s12 row">
                        <ul>
                          <li>
                            <div className="airport"></div>
                            <p>{data.ataturk}</p>
                          </li>
                          <li>
                            <div className="airport"></div>
                            <p>{data.airport}</p>
                          </li>
                          <li>
                            <div className="taksim"></div>
                            <p>{data.taksim}</p>
                          </li>

                        </ul>
                      </div>

                    </div>
                  </div>
                  <div className="map  col s12">

                  </div>
                </section>
                <Getintouch data={content.page.getintouch}/>
                <Footer data={content.page.footer}/>
                <Action />
      </div>
    );
  }
}

export default connect(
  (state) => ({content: state.content}),
  (dispatch) => ({switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))})
)(EachProject);
