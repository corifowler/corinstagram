import React from 'react';

export default React.createClass({

  goHomeView() {
    console.log('home button being clicked');
    this.props.onHomeClick();
  },

  addNewPost() {
    console.log('new post being uploaded');
    this.props.onSubmitClick();
  },

  render() {
    return (
      <div>
        <div className="header">
          <img src="https://scontent-atl3-1.cdninstagram.com/hphotos-xaf1/t51.2885-19/11356615_1636339316612588_613257064_a.jpg"/>
          <button onClick={() => this.goHomeView()}><i className="fa fa-home"></i> Back to Home</button>
          <hr/>
        </div> 
        <div className="new-post">
          <h2>Add New Post</h2>
          <form>
            <label>Image URL: <input type="text" className="photo"/></label>
            <label>Caption: <input type="text" className="caption"/></label>
            <button onClick={() => this.addNewPost()}>Submit Post</button>
          </form>
        </div>
      </div>
    );


  }




});