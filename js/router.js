import Backbone from 'backbone';
import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';

import {Gallery as GalleryCollection} from './resources';
import {Photo as PhotoModel} from './resources';

import {Gallery as GalleryView} from './views';
import {PhotoPost as PhotoView} from './views';
import {AddPost} from './views';
import {EditPost} from './views';

export default Backbone.Router.extend({

  routes: {
    "": "redirectToGallery",
    "gallery": "showGallery",
    "photopost/:id": "showPost",
    "addphoto": "addForm",
    "editphoto": "editForm"
  },

  initialize(appElement) {
    this.el = appElement;
    this.collection = new GalleryCollection();
  },

  render(component) {
    ReactDom.render(component, this.el);
  },

  start() {
    Backbone.history.start();
    return this;
  },

  goto(route) {
    this.navigate(route, {trigger: true});
  },

  redirectToGallery() {
    this.navigate('gallery', {replace: true, trigger: true});
  },

  showGallery() {
    this.collection.fetch().then( () => {
      this.render(<GalleryView 
        id={this.collection.objectId}
        onHomeClick={() => this.goto('')} 
        onAddClick={() => this.goto('addphoto')} 
        onEditClick={() => this.goto('editphoto')}
        onClick={(id) => this.goto('photopost/' + id)} 
        images={this.collection.toJSON()}/>);
    });
  },

  showPost(id) {
    console.log('should show post with:' + id);
    let photoPost = this.collection.get(id);

    if (photoPost) {
      console.log(photoPost);
      this.render(<PhotoView 
        images={photoPost.toJSON()}
        onHomeClick={() => this.goto('')}
        onAddClick={() => this.goto('addphoto')}
        onEditClick={() => this.goto('editphoto')}/>);
    } else {
      console.log('adding this model');
      photoPost = this.collection.add(id);
      photoPost.fetch().then( () => {
        this.render(<PhotoView 
          images={photoPost.toJSON()}
          onHomeClick={() => this.goto('')}
          onAddClick={() => this.goto('addphoto')}
          onEditClick={() => this.goto('editphoto')}/>);
      });
    }
  },

  addForm() {
    console.log('this is the add photo form view');
    this.render(<AddPost 
      images={this.collection.toJSON()}
      onHomeClick={() => this.goto('')}
      onAddClick={() => this.goto('addphoto')}
      onEditClick={() => this.goto('editphoto')}/>      
    );
  },

  editForm() {
    console.log('this is the edit photo form view');
    this.render(<EditPost
      images={this.collection.toJSON()}
      onHomeClick={() => this.goto('')}
      onAddClick={() => this.goto('addphoto')}
      onEditClick={() => this.goto('editphoto')}/>
    );
  }

});