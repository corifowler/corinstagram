import React from 'react';

export default React.createClass({

  getInitialState() {
    return ({
      photo: this.props.stored.photo,
      caption: this.props.stored.caption
    });
  },

  updatePhoto(event) {
    let newPhoto = event.currentTarget.value;

    this.setState({photo: newPhoto});
  },

  updateCaption(event) {
    let newCaption = event.currentTarget.value;

    this.setState({caption: newCaption});
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

  addChanges() {
    console.log('changes are being added');
    this.props.onSubmitChangesClick();
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
        <div className="new-post">
          <form>
            <label>Image URL: <input onChange={this.updatePhoto} type="text" className="photo" value={this.state.photo}/></label>
            <label>Caption: <input onChange={this.updateCaption} type="text" className="caption" value={this.state.caption}/></label>
            <button onClick={() => this.addChanges()}>Submit Changes</button>
          </form>
        </div>
      </div>
    );
  }


});