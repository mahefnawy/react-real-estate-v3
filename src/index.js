import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import { AnimatedSwitch } from 'react-router-transition';

import Services from './components/Routes/Services/Services.js';
import About from './components/Routes/About/About.js';
import Contact from './components/Routes/Contact/Contact.js';
import Projects from './components/Routes/Projects/Projects.js';
import registerServiceWorker from './registerServiceWorker';
import EachProject from './components/Routes/EachProject/EachProject.js';



const Provider = require('react-redux').Provider;
const createStore = require('redux').createStore;
const content = require('./reducer');


const store = createStore(content);


ReactDOM.render(


  <Provider {... { store }}>

  <BrowserRouter>
    <Switch>

        <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Route exact path="/" component={App} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route exact path="/products/:id" component={EachProject} />
       </AnimatedSwitch>
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
