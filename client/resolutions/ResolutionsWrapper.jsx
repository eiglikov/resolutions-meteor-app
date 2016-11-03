import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import meteor package
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from './ResolutionsForm';
import ResolutionSingle from './ResolutionSingle';

// create/connect DB
Resolutions = new Mongo.Collection('resolutions');


// export default class Resolutions extends React.Component {
export default class ResolutionsWrapper extends TrackerReact(React.Component) {
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

  resolutions() {
    // '.fetch' -> return object
    // '' -> return cursor
    return Resolutions.find().fetch();
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={400}
        transitionAppear={true}
      >
        <h1>My Resolutions</h1>
        <ResolutionsForm/>
        <ReactCSSTransitionGroup
          component='ul'
          className='resolutions'
          transitionName="resolutionLoad"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={400}
        >
          {this.resolutions().map((resolution) => {
            return <ResolutionSingle key={resolution._id} resolution={resolution}/>;
          })}
        </ReactCSSTransitionGroup>

        </ReactCSSTransitionGroup>

    );
  }
}
