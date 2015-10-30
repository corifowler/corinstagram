import Backbone from 'backbone';
import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';

import {Gallery as GalleryCollection} from './resources';
import {Photo as PhotoModel} from './resources';

import {Gallery as GalleryView} from './views';
import {PhotoPost as PhotoView} from './views';

export default Backbone.Router.extend({

  routes: {
    "": "redirectToGallery",
    "gallery": "showGallery",
    "photopost/:id": "showPost"
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
      this.render(<GalleryView onClick={(event) => this.navigate(`photopost/${picId}`, {trigger: true})} images={this.collection.toJSON()}/>);
    });
  },

  showPost(id) {
    let photoPost = this.collection.get(id);

    if (photoPost) {
      this.render(<PhotoView/>);
    } else {
      photoPost = this.collection.add({objectId:id});
      photoPost.fetch().then( () => {
        this.render(<PhotoView/>);
      });
    }
  }


});