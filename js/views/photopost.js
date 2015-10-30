import React from 'react';

export default React.createClass({

  render() {
    return (
      <div className="image-view">
        <img src={this.props.photo}/>
        <p>{this.props.caption}</p>
      </div>
    );

  }



});
