'use strict';

import React, {Component} from 'react';

export default class ResolutionSingle extends Component {
  toggleChecked() {
    console.log('Checked');
    Meteor.call("toggleResolution", this.props.resolution);
  }

  deleteResolution() {
    console.log('Deleted', this.props.resolution);
    Meteor.call("deleteResolution", this.props.resolution);
  }

  render() {
    const resolutionClass = this.props.resolution.complete ? "checked" : "";
    const status = this.props.resolution.complete ? <span className='completed'>Completed</span> : '';

    return (
      <li className={resolutionClass}>
        <input type='checkbox'
          readOnly={true}
          checked={this.props.resolution.complete}
          onClick={this.toggleChecked.bind(this)} />
        <a className='single-resolution' href={`/resolutions/${this.props.resolution._id}`}>{this.props.resolution.text}</a>
          {status}
        <button className='btn-cancel'
          onClick={this.deleteResolution.bind(this)}>
          &times;
          </button>
        </li>
    );
  }
}
