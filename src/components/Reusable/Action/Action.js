import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from 'react-materialize'
import './Action.css';
let actions = require('../../../actions');



class Action extends Component {

  render() {
      const content = this.props.content;
      const switchLanguage = this.props.switchLanguage;
    return (
      <div>
        <Button floating fab='vertical' fabClickOnly={true} icon='' className="ion-navicon " large >
          <a onClick={switchLanguage.bind(this,'en')}>
          <Button floating icon='E' className='' />
          </a>
          <a onClick={switchLanguage.bind(this,'ar')}>
          <Button floating icon='ع' className='' />
          </a>
          <a href='http://maps.apple.com/?q=41.016422,28.653334'>
          <Button floating icon='' className='ion-ios-location waves'/>
          </a>
          <a href='https://api.whatsapp.com/send?phone=905061162526'>
          <Button floating icon='' className='ion-social-whatsapp waves' />
          </a>
          <a href=''>
          <Button floating icon='' className='ion-ios-email'/>
          </a>
        </Button>
      </div>
    );
  }

}

export default connect(
  (state) => ({content: state.content}),
  (dispatch) => ({switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))})
)(Action);
