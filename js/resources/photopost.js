import Backbone from 'backbone';

export default Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/corinstagram',

  idAttribute: 'objectId'

});