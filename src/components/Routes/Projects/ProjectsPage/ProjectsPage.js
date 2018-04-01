import React, { Component } from 'react';
import PRODUCTS from '../../../Data/projects.js';
import './ProjectsPage.css'
class ProjectsPage extends Component {
  render() {
    return (
      <section className="projects-page col s12">
        <div className="container">
          <div className="row">
            <div className="projectsPage-wrapper">
            {PRODUCTS.map((product)=>{
              return (
                  <a href={'/products/'+product.id}>
                    <div className='wrapper'>
                      <div className={'carouselImages cayan-'+product.id}>
                        <h6>{'CAYAN'+product.id}</h6>
                      </div>
                      <div className="description">
                        <h6>Description</h6>
                        <h5>{product.priceMin + ' - ' + product.priceMax}</h5>
                        <p>{product.description}</p>
                      </div>
                      <div className="project-info ">
                        <div className="col s6 project-info-icons left">
                          <i className="ion-ios-location-outline "></i>
                          <p>{product.location}</p>
                          <br/>
                          <i className="ion-ios-home-outline"></i>
                          <p>{product.typesAll}</p>
                          <br/>
                          <i className="ion-ios-photos-outline"></i>
                          <p>{product.area}</p>
                          <br/>
                        </div>
                        <div className="col s6 project-info-icons right">
                          <i className="ion-ios-pricetag-outline "></i>
                          <p>{product.installment} months installments</p>
                          <br/>
                          <i className="ion-ios-gear-outline"></i>
                          <p>{product.status}</p>
                          <br/>
                          <i className="ion-ios-cart-outline"></i>
                          <p>{product.deliveryDate}</p>
                          <br/>
                        </div>
                        <button className="more-details">MORE DETAILS</button>
                      </div>
                    </div>
                </a>
              )})}
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default ProjectsPage;
