import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component{

  setVar() {
    if(!Meteor.userId()){
      Session.set('Meteor.loginButtons.dropdownVisible', 'true');
    }
  }

  render() {
    return(
      <ReactCSSTransitionGroup
        component="div"
        transitionName="route"
        transitionEnterTimeout={600}
        transitionAppearTimeout={600}
        transitionLeaveTimeout={400}
        transitionAppear={true}
      >
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam ex, congue ut nibh ut, dignissim finibus ipsum. Proin posuere tristique massa quis consectetur. Nunc consequat dui id nunc bibendum, vel lobortis tortor vestibulum.</p>
        <button onClick={this.setVar}>Sign Up</button>
      </ReactCSSTransitionGroup>
    );
  }
}
