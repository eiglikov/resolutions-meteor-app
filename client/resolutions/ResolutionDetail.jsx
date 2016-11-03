import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class ResolutionDetail extends TrackerReact(Component) {
  constructor(){
    super();
    // setting state subscription with
    // Meteor Tracker
    this.state = {
      subscription: {
        resolutions: Meteor.subscribe('userResolutions')
      }
    };
  }
  componentWillUnmount() {
    this.state.subscription.resolutions.stop();
  }

  resolution() {
    return Resolutions.findOne(this.props.id);
  }


  render() {
    let res = this.resolution();

    if (!res){
      return(<div>Loading...</div>);
    }
    return(
      <div>
        <h1>{res.text}</h1>

      </div>
    );
  }
}
