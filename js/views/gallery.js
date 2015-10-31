import React from 'react';

export default React.createClass({

  viewPhoto(id) {
    this.props.onClick(id); 
  },

  addFormView() {
    console.log('this button is being clicked');
    this.props.onAddClick();
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
          <button>Home</button>
          <button onClick={() => this.addFormView()}>Add</button>
          <button>Edit</button>
        </div>      
        <div className="gallery-images">{this.props.images.map(this.processData)}</div>
      </div>
    );
  }

});