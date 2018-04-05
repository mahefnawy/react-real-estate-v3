import React, { Component } from 'react';
import Slider from 'react-slick';

import PRODUCTS from '../../Data/CarouselData.js';

import './ProjectsCarousel.css';


class ProjectsCarousel extends Component {

  render() {

    const data = this.props.data;
              var settings = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight: true,
                autoplay: false,
                autoplaySpeed: 5000,
                responsive:[
                  { breakpoint: 400, settings: { slidesToShow: 1 } },
                  { breakpoint: 1024, settings: { slidesToShow: 2 } }
                ]
        };
    return (
      <div className="projetcsCarousel ">
              <div className="containermy">
                <div className="row">
                <div className="container">
                  <h1 className={"body-h1 " + data.classTitle}>{data.title}</h1>

                </div>

                <div className="carousel">
                  <div className="left-btn col s1">
                    <p className={data.btns}>PREV</p>
                  </div>
                <Slider className="inner col s10" {...settings}>

                {PRODUCTS.map((product)=>{
                  return (
                  <a key={product.id} href={'/products/'+product.id}>

                    <div className='wrapper'>
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
                          <p className="nutural">{product.types}</p>
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
                          <p className="nutural">{product.deliveryDate}</p>
                          <p className="nutural">{product.deliveryDateAr}</p>
                          <br/>
                        </div>
                        <button className={"more-details " + data.classTitle} >{data.moreDetails}</button>

                      </div>
                    </div>
                  </a>
                  )
                })}

                </Slider>
                <div className="right-btn col s1">
                  <p className={data.btns}>NEXT</p>
                </div>
                </div>
              </div>
            </div>
      </div>
    );
  }

}


export default ProjectsCarousel;
