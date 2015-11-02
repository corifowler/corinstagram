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
          <button onClick={() => this.goHomeView()}><i className="fa fa-home"></i> Home</button>
          <button onClick={() => this.addFormView()}><i className="fa fa-plus"></i> Add</button>
          <button onClick={() => this.editFormView()}><i className="fa fa-pencil"></i> Edit</button>
          <hr/>
        </div>
        <div className="image-view" id={this.props.images.id}>
          <img src={this.props.images.photo}/>
          <p><span className="username">{this.props.images.user}</span> {this.props.images.caption}</p>
        </div>
      </div>
    );

  }

});
