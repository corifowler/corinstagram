import React from 'react';

export default React.createClass({

  goHomeView() {
    this.props.onHomeClick();
  },

  addFormView() {
    this.props.onAddClick();
  },

  editFormView() {
    this.props.onEditClick();
  },

  render() {
    return (
      <div>
        <div className="header">
          <img src="https://scontent-atl3-1.cdninstagram.com/hphotos-xaf1/t51.2885-19/11356615_1636339316612588_613257064_a.jpg"/>
          <button onClick={() => this.goHomeView()}>Home</button>
          <button onClick={() => this.addFormView()}>Add</button>
          <button onClick={() => this.editFormView()}>Edit</button>
        </div>
        <div className="image-view" id={this.props.images.id}>
          <img src={this.props.images.photo}/>
          <p>{this.props.images.caption}</p>
        </div>
      </div>
    );

  }

});
