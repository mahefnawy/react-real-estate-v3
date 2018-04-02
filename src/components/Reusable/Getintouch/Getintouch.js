import React, { Component } from 'react';
import axios from 'axios';
import './Getintouch.css';

import Map from '../Map/Map.js';

class Getintouch extends Component {

  constructor () {
    super();
    this.state = {
      name: '',
      email: '',
      phone: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }



  handleNameChange = event => {
    this.setState({
      name: event.target.value
     });
    console.log(this.state.name);
  }

  handleEmailChange = event => {
      this.setState({
        email: event.target.value
       });
    console.log(this.state.email);
    }

  handlePhoneChange = event => {
        this.setState({
          phone: event.target.value
         });
         console.log(this.state.phone);
      }

  handleSubmit = event => {
    console.log(this.state)
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    };




    fetch( 'https://api.formbucket.com/f/buk_5pZlX4fRjDrezI22h0yu8oYL', {
      method: 'post',
      mode: 'cors',
      headers: {
        'accept' : 'application/javascript',
        'Content-Type': 'application/json',
        'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJEOEJxTkZZRU91YUUwUWk1Y0pUNDhVV1oiLCJpc3MiOiJhcGkuZm9ybWJ1Y2tldC5jb20iLCJ1aWQiOiI1YTg5NDQ2OTY0ZjgxMTA5YmI2NzBlZWMiLCJleHAiOjE1MjUyNjA1MzUsImlhdCI6MTUyMjY2ODUzNX0.cV0CR692ON4p9n6dnfycfljpdznG5tU037vQMQKrmK4',
      },
      body: JSON.stringify(user)
    }).then(res => {
        alert("Thank you, We will contact you soon");

      })
        .catch(function(error) {
          console.log(error.response)
  });

  }



  render() {
    return (
    <section className="contact-section" id="contact-section">
        <div className="container">
          <div className="row">
            <h1 className="body-h1">CONTACT US</h1>
            <div className="contact-social col s1">
              <div className="contact-social-icons twitter">
                <a href="https://twitter.com/CayanGroup_tr" target="_blank" rel="noopener noreferrer">
                  <i className="ion-social-twitter twitter"></i>
                </a>
              </div>
              <br/>
              <div className="contact-social-icons facebook">
                <a href="https://www.facebook.com/CayanGroup.tr/" target="_blank" rel="noopener noreferrer">
                  <i className="ion-social-facebook facebook"></i>
                </a>
              </div>
              <br/>
              <div className="contact-social-icons instagram">
                <a href="https://www.instagram.com/cayangroup_tr/" target="_blank" rel="noopener noreferrer">
                  <i className="ion-social-instagram instagram"></i>
                </a>
              </div>
              <br/>
              <div className="contact-social-icons youtube">
                <a href="https://www.youtube.com/channel/UCE6NO-T6B9DdHMwit-3QPSw/featured?disable_polymer=1" target="_blank" rel="noopener noreferrer">
                  <i className="ion-social-youtube youtube"></i>
                </a>
              </div>
              <br/>
              <div className="contact-social-icons linkedin">
                <a href="https://www.linkedin.com/in/cayan-group-490441113/" target="_blank" rel="noopener noreferrer">
                  <i className="ion-social-linkedin linkedin"></i>
                </a>
              </div>
            </div>

            <div className="contact-input col s12 l4" >
              <h5>Get in touch</h5>
              <p>please fill the form and we will contact you during work hours.</p>

              <form onSubmit={this.handleSubmit}>
               <div className="input-field">

                <input className="validate" type="text" name="name" placeholder="" onChange={this.handleNameChange} required/>

              </div>

              <div className="input-field">

                <input className="validate" type="text" name="email" placeholder="" onChange={this.handleEmailChange} required/>

              </div>
              <div className="input-field">

                <input className="validate" type="text" name="phone" placeholder="" onChange={this.handlePhoneChange} required/>

              </div>
                <button className="btn waves-effect waves-light" type="submit">send</button>
              </form >

              <div className="contact-info">
                <i className="ion-location left "></i>
                <p className="">Cumhuriyet Mah. Hürriyet Cd.1979 Sk. no:16 önay garden residence DR:92 Esenyurt.Istanbul</p>
                <br/>
                <i className="ion-ios-email left "></i>
                <p className="">info@cayan-group.com</p>
                <br/>
                <i className="ion-ios-telephone left "></i>
                <p className="">+905061162526</p>
              </div>
              <div className="contact-social-mobile">
                <a className="bg-facebook" href="https://www.facebook.com/CayanGroup.tr/" target="_blank" rel="noopener noreferrer"><i className="ion-social-facebook"></i></a>
                <a className="bg-twitter" href="https://twitter.com/CayanGroup_tr" target="_blank" rel="noopener noreferrer"><i className="ion-social-twitter"></i></a>
                <a className="bg-youtube" href="https://www.youtube.com/channel/UCE6NO-T6B9DdHMwit-3QPSw/featured?disable_polymer=1" target="_blank" rel="noopener noreferrer"><i className="ion-social-youtube"></i></a>
                <a className="bg-linkedin" href="https://www.linkedin.com/in/cayan-group-490441113/" target="_blank" rel="noopener noreferrer"><i className="ion-social-linkedin"></i></a>
                <a className="bg-instagram" href="https://www.instagram.com/cayangroup_tr/" target="_blank" rel="noopener noreferrer"><i className="ion-social-instagram-outline"></i></a>
              </div>
            </div>
          <Map />

          </div>
        </div>
      </section>
    );
  }
}

export default Getintouch;
