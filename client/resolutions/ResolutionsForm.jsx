'use strict';
// makes React.Component to be used as Component

import React, {Component} from 'react';

export default class ResolutionsForm extends Component{

  addResolution(event) {
    event.preventDefault();
    var text = this.refs.resolution.value.trim();

    if(text){
      Meteor.call('addResolution', text, (error, data)=> {
        if(error){
          Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o' );
        } else {
          this.refs.resolution.value = "";
        }
      });
    }
  }

  render() {
    return (
      <form className='new-resolution'
        onSubmit={this.addResolution.bind(this)}>

        <input
          type='text'
          ref='resolution'
          placeholder='Finish React Meteor Series'
        />

      </form>
    );
  }

}
