import React, { Component } from 'react';
import './Testimonial.css';
import Slider from 'react-slick';
class Testimonial extends Component {
  render() {
        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          autoplay: false,
          autoplaySpeed: 5000
  };
    return (
            <section className="testimonials">
                <div className="container">
                  <h1 className="body-h1">TESTIMONIALS</h1>
                  <Slider className="owl-carousel testimonials-carousel">
                    <div className="testimonials-each">
                      <div className="col s2 l1"></div>
                      <div className="testimonials-each-text col s10 l10">
                        <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard .</p>
                        <span>Ahmed Hassan</span>
                      </div>
                    </div>
                    <div className="testimonials-each">
                      <div className="col s2"></div>
                      <div className="testimonials-each-text col s10">
                        <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard .</p>
                        <span>Ahmed Hassan</span>
                      </div>
                    </div>
                    <div className="testimonials-each">
                      <div className="col s2"></div>
                      <div className="testimonials-each-text col s10">
                        <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard .</p>
                        <span>Ahmed Hassan</span>
                      </div>
                    </div>
                    <div className="testimonials-each">
                      <div className="col s2" ></div>
                      <div className="testimonials-each-text col s10">
                        <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard .</p>
                        <span>Ahmed Hassan</span>
                      </div>
                    </div>
                  </Slider>
                </div>
              </section>
    );
  }
}

export default Testimonial;
