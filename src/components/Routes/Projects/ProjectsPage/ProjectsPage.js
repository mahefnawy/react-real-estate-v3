import React, { Component } from 'react';
import PRODUCTS from '../../../Data/projects.js';
import './ProjectsPage.css'
class ProjectsPage extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="projects-page col s12">
        <div className="container">
          <div className="row">
            <div className="projectsPage-wrapper col s12">
            {PRODUCTS.map((product)=>{
              return (
                  <a href={'/products/'+product.id}>
                    <div className={'wrapper col s3 cayan-'+product.id}>
                      <div className={'carouselImages cayan-'+product.id}>
                        <h6>{'CAYAN'+product.id}</h6>
                      </div>
                      <div className="description">
                        <h6 className={data.classDescriptionTitle}>{data.descriptionTitle}</h6>
                        <h5 className={data.classprice}>{product.priceMin + ' - ' + product.priceMax}</h5>
                        <p className={data.classDescriptionEn}>{product.description}</p>
                        <p className={data.classDescriptionAr}>{product.descriptionAr}</p>
                      </div>
                      <div className="project-info ">
                        <div className={"col s6 project-info-icons " + data.classIcons1}>
                          <i className={"ion-ios-location-outline " + data.classIconsI}></i>
                          <p className={data.classEn}>{product.location}</p>
                          <p className={data.classAr}>{product.locationAr}</p>
                          <br/>
                          <i className={"ion-ios-home-outline " + data.classIconsI}></i>
                          <p className="nutural">{product.typesAll}</p>
                          <br/>
                          <i className={"ion-ios-photos-outline " + data.classIconsI}></i>
                          <p className="nutural">{product.area}</p>
                          <br/>
                        </div>
                        <div className={"col s6 project-info-icons " + data.classIcons2}>
                          <i className={"ion-ios-pricetag-outline "+ data.classIconsI}></i>
                          <p className={data.classEn}>{product.installment} months installments</p>
                          <p className={data.classAr}> شهر تقسيط {product.installment}</p>
                          <br/>
                          <i className={"ion-ios-gear-outline " + data.classIconsI}></i>
                          <p className={data.classEn}>{product.status}</p>
                          <p className={data.classAr}>{product.statusAr}</p>
                          <br/>
                          <i className={"ion-ios-cart-outline " +  data.classIconsI}></i>
                          <p className={data.classEn}>{product.deliveryDate}</p>
                          <p className={data.classAr}>{product.deliveryDateAr}</p>
                          <br/>
                        </div>
                        <button className={"more-details " + data.classTitle}>{data.moreDetails}</button>
                      </div>
                    </div>
                </a>
              )})}
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default ProjectsPage;
