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
        <div className="new-post">
          <form>
            <label>Image URL: <input type="text" className="photo"/></label>
            <label>Caption: <input type="text" className="caption"/></label>
          </form>
        </div>
      </div>
    );


  }




});