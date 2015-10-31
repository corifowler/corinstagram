import React from 'react';

export default React.createClass({

  render() {
    return (
      <div>
        <div className="header">
          <img src={this.props.images.user}/>
          <button>Home</button>
          <button>Add</button>
          <button>Edit</button>
        </div>
        <div className="image-view" id={this.props.images.id}>
          <img src={this.props.images.photo}/>
          <p>{this.props.images.caption}</p>
        </div>
      </div>
    );

  }

});
