import React, { Component } from 'react';
import MadlibForm from './madlib_form';

export default class App extends Component {
  render() {
    return (
      <div className='backgroundSkew'>
        <div className='madlib-heading'>
          <h1>Mad Libs by Bradley</h1>
          <div className='madlib-subheading'>
            <h2>Fill out the form below and hit 'generate'</h2>
          </div>
          <MadlibForm />
        </div>
      </div>
    );
  }
}
