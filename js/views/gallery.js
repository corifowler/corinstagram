import React from 'react';


export default React.createClass({

  viewPhoto() {
    this.props.onClick();
  },

  processData(data) {
    return (
      <div key={data.objectId}>
        <img onClick={this.viewPhoto} picId={data.objectId} src={data.photo}/>
      </div>
    );
  },

  render() {
    return (
      <div className="gallery-images">{this.props.images.map(this.processData)}</div>
    );
  }

});