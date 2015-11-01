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
import {Spinner} from './views';

export default Backbone.Router.extend({

  routes: {
    "": "redirectToGallery",
    "gallery": "showGallery",
    "photopost/:id": "showPost",
    "addphoto": "addForm",
    "editphoto/:id": "editForm"
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

  spinner() {
    this.render(<Spinner/>);
  },

  showGallery() {
    this.spinner();
    this.collection.fetch().then( () => {
    this.render(<GalleryView 
      id={this.collection.objectId}
      onHomeClick={() => this.goto('')} 
      onAddClick={() => this.goto('addphoto')} 
      onEditClick={() => this.goto('editphoto/' + id)}
      onClick={(id) => this.goto('photopost/' + id)} 
      images={this.collection.toJSON()}/>);
    });
  },

  showPost(id) {
    this.spinner();
    let photoPost = this.collection.get(id);

    if (photoPost) {
      console.log(photoPost);
      this.render(<PhotoView 
        images={photoPost.toJSON()}
        onHomeClick={() => this.goto('')}
        onAddClick={() => this.goto('addphoto')}
        onEditClick={() => this.goto('editphoto/' + id)}/>);
    } else {
      console.log('adding this model');
      photoPost = this.collection.add(id);
      photoPost.fetch().then( () => {
        this.render(<PhotoView 
          images={photoPost.toJSON()}
          onHomeClick={() => this.goto('')}
          onAddClick={() => this.goto('addphoto')}
          onEditClick={() => this.goto('editphoto/' + id)}/>);
      });
    }
  },

  addForm() {
    this.spinner();
    this.render(<AddPost 
      images={this.collection.toJSON()}
      onHomeClick={() => this.goto('')}
      onAddClick={() => this.goto('addphoto')}
      onSubmitClick={() => {
        let newPhoto = document.querySelector('.photo').value;
        let newCaption = document.querySelector('.caption').value;

        let instaModel = new PhotoModel({
          photo: newPhoto,
          caption: newCaption
        });

        this.collection.add(instaModel);

        instaModel.save().then(() => {
          alert('Your post has been added!');
          this.goto('');
        });}}/>      
    );
  },

  editForm(id) {
    this.spinner();
    let editId = this.collection.get(id);
    this.render(<EditPost
      stored={editId.toJSON()}
      onHomeClick={() => this.goto('')}
      onAddClick={() => this.goto('addphoto')}
      onSubmitChangesClick={() => {
        let changedPhoto = document.querySelector('.photo').value;
        let changedCaption = document.querySelector('.caption').value;

        let instaChange = new PhotoModel({
          objectId: id,
          photo: changedPhoto,
          caption: changedCaption
        });

        this.collection.add(instaChange);

        instaChange.save().then(() => {
          alert('Your changes have been saved.');
          this.goto('');
        });}}/>
    );
  }

});