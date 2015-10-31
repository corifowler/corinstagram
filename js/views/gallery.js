import React from 'react';

export default React.createClass({

  viewPhoto(id) {
    this.props.onClick(id); 
  },

  goHomeView() {
    console.log('home button being clicked');
    this.props.onHomeClick();
  },

  addFormView() {
    console.log('this button is being clicked');
    this.props.onAddClick();
  },

  editFormView() {
    console.log('the edit button is being clicked');
    this.props.onEditClick();
  },

  processData(data) {
    return (
      <div key={data.objectId}>
        <img id={data.objectId} onClick={() => this.viewPhoto(data.objectId)} src={data.photo}/>
      </div>
    );
  },

  render() {
    return (
      <div>
        <div id={this.props.images.id} className="header">
          <img src="https://scontent-atl3-1.cdninstagram.com/hphotos-xaf1/t51.2885-19/11356615_1636339316612588_613257064_a.jpg"/>
          <button onClick={() => this.goHomeView()}>Home</button>
          <button onClick={() => this.addFormView()}>Add</button>
          <button onClick={() => this.editFormView()}>Edit</button>
        </div>      
        <div className="gallery-images">{this.props.images.map(this.processData)}</div>
      </div>
    );
  }

});