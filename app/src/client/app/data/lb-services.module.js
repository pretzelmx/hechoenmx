(function(window, angular, undefined) {'use strict';

var urlBase = "http://159.203.136.228:3000/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Post
 * @header lbServices.Post
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Post` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Post",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/posts/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Post.organization() instead.
        "prototype$__get__organization": {
          url: urlBase + "/posts/:id/organization",
          method: "GET"
        },

        // INTERNAL. Use Post.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/posts/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Post.images.findById() instead.
        "prototype$__findById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/posts/:id/images/:fk",
          method: "GET"
        },

        // INTERNAL. Use Post.images.destroyById() instead.
        "prototype$__destroyById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/posts/:id/images/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.images.updateById() instead.
        "prototype$__updateById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/posts/:id/images/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.images() instead.
        "prototype$__get__images": {
          isArray: true,
          url: urlBase + "/posts/:id/images",
          method: "GET"
        },

        // INTERNAL. Use Post.images.create() instead.
        "prototype$__create__images": {
          url: urlBase + "/posts/:id/images",
          method: "POST"
        },

        // INTERNAL. Use Post.images.destroyAll() instead.
        "prototype$__delete__images": {
          url: urlBase + "/posts/:id/images",
          method: "DELETE"
        },

        // INTERNAL. Use Post.images.count() instead.
        "prototype$__count__images": {
          url: urlBase + "/posts/:id/images/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#create
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/posts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#createMany
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/posts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#upsert
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/posts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#exists
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/posts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#findById
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/posts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#find
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/posts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#findOne
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/posts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#updateAll
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/posts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#deleteById
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/posts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#count
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/posts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#prototype$updateAttributes
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/posts/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#createChangeStream
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/posts/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Organization.posts.findById() instead.
        "::findById::Organization::posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/posts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.posts.destroyById() instead.
        "::destroyById::Organization::posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/posts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.posts.updateById() instead.
        "::updateById::Organization::posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/posts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.posts() instead.
        "::get::Organization::posts": {
          isArray: true,
          url: urlBase + "/organizations/:id/posts",
          method: "GET"
        },

        // INTERNAL. Use Organization.posts.create() instead.
        "::create::Organization::posts": {
          url: urlBase + "/organizations/:id/posts",
          method: "POST"
        },

        // INTERNAL. Use Organization.posts.createMany() instead.
        "::createMany::Organization::posts": {
          isArray: true,
          url: urlBase + "/organizations/:id/posts",
          method: "POST"
        },

        // INTERNAL. Use Organization.posts.destroyAll() instead.
        "::delete::Organization::posts": {
          url: urlBase + "/organizations/:id/posts",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.posts.count() instead.
        "::count::Organization::posts": {
          url: urlBase + "/organizations/:id/posts/count",
          method: "GET"
        },

        // INTERNAL. Use UserModel.posts.findById() instead.
        "::findById::UserModel::posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/posts/:fk",
          method: "GET"
        },

        // INTERNAL. Use UserModel.posts.destroyById() instead.
        "::destroyById::UserModel::posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/posts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.posts.updateById() instead.
        "::updateById::UserModel::posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/posts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use UserModel.posts() instead.
        "::get::UserModel::posts": {
          isArray: true,
          url: urlBase + "/users/:id/posts",
          method: "GET"
        },

        // INTERNAL. Use UserModel.posts.create() instead.
        "::create::UserModel::posts": {
          url: urlBase + "/users/:id/posts",
          method: "POST"
        },

        // INTERNAL. Use UserModel.posts.createMany() instead.
        "::createMany::UserModel::posts": {
          isArray: true,
          url: urlBase + "/users/:id/posts",
          method: "POST"
        },

        // INTERNAL. Use UserModel.posts.destroyAll() instead.
        "::delete::UserModel::posts": {
          url: urlBase + "/users/:id/posts",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.posts.count() instead.
        "::count::UserModel::posts": {
          url: urlBase + "/users/:id/posts/count",
          method: "GET"
        },

        // INTERNAL. Use CDN.post() instead.
        "::get::CDN::post": {
          url: urlBase + "/cdn/:id/post",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Post#updateOrCreate
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Post#update
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Post#destroyById
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Post#removeById
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Post#modelName
    * @propertyOf lbServices.Post
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Post`.
    */
    R.modelName = "Post";


        /**
         * @ngdoc method
         * @name lbServices.Post#organization
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Fetches belongsTo relation organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.organization = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::get::Post::organization"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post#user
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::get::Post::user"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Post.images
     * @header lbServices.Post.images
     * @object
     * @description
     *
     * The object `Post.images` groups methods
     * manipulating `CDN` instances related to `Post`.
     *
     * Call {@link lbServices.Post#images Post.images()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Post#images
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Queries images of Post.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::get::Post::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.images#count
         * @methodOf lbServices.Post.images
         *
         * @description
         *
         * Counts images of Post.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.images.count = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::count::Post::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.images#create
         * @methodOf lbServices.Post.images
         *
         * @description
         *
         * Creates a new instance in images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.create = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::create::Post::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.images#createMany
         * @methodOf lbServices.Post.images
         *
         * @description
         *
         * Creates a new instance in images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.createMany = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::createMany::Post::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.images#destroyAll
         * @methodOf lbServices.Post.images
         *
         * @description
         *
         * Deletes all images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.images.destroyAll = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::delete::Post::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.images#destroyById
         * @methodOf lbServices.Post.images
         *
         * @description
         *
         * Delete a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.images.destroyById = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::destroyById::Post::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.images#findById
         * @methodOf lbServices.Post.images
         *
         * @description
         *
         * Find a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.findById = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::findById::Post::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.images#updateById
         * @methodOf lbServices.Post.images
         *
         * @description
         *
         * Update a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.updateById = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::updateById::Post::images"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Organization
 * @header lbServices.Organization
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Organization` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Organization",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/organizations/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Organization.posts.findById() instead.
        "prototype$__findById__posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/posts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.posts.destroyById() instead.
        "prototype$__destroyById__posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/posts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.posts.updateById() instead.
        "prototype$__updateById__posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/posts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.projects.findById() instead.
        "prototype$__findById__projects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/projects/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.projects.destroyById() instead.
        "prototype$__destroyById__projects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/projects/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.projects.updateById() instead.
        "prototype$__updateById__projects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/projects/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.images.findById() instead.
        "prototype$__findById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/images/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.images.destroyById() instead.
        "prototype$__destroyById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/images/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.images.updateById() instead.
        "prototype$__updateById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/images/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.owners.findById() instead.
        "prototype$__findById__owners": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/owners/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.owners.destroyById() instead.
        "prototype$__destroyById__owners": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/owners/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.owners.updateById() instead.
        "prototype$__updateById__owners": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/owners/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.owners.link() instead.
        "prototype$__link__owners": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/owners/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.owners.unlink() instead.
        "prototype$__unlink__owners": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/owners/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.owners.exists() instead.
        "prototype$__exists__owners": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/owners/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Organization.team.findById() instead.
        "prototype$__findById__team": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/team/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.team.destroyById() instead.
        "prototype$__destroyById__team": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/team/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.team.updateById() instead.
        "prototype$__updateById__team": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/team/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.team.link() instead.
        "prototype$__link__team": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/team/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.team.unlink() instead.
        "prototype$__unlink__team": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/team/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.team.exists() instead.
        "prototype$__exists__team": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/team/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Organization.stack.findById() instead.
        "prototype$__findById__stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/stack/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.stack.destroyById() instead.
        "prototype$__destroyById__stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/stack/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.stack.updateById() instead.
        "prototype$__updateById__stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/stack/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.stack.link() instead.
        "prototype$__link__stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/stack/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.stack.unlink() instead.
        "prototype$__unlink__stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/stack/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.stack.exists() instead.
        "prototype$__exists__stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/stack/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Organization.posts() instead.
        "prototype$__get__posts": {
          isArray: true,
          url: urlBase + "/organizations/:id/posts",
          method: "GET"
        },

        // INTERNAL. Use Organization.posts.create() instead.
        "prototype$__create__posts": {
          url: urlBase + "/organizations/:id/posts",
          method: "POST"
        },

        // INTERNAL. Use Organization.posts.destroyAll() instead.
        "prototype$__delete__posts": {
          url: urlBase + "/organizations/:id/posts",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.posts.count() instead.
        "prototype$__count__posts": {
          url: urlBase + "/organizations/:id/posts/count",
          method: "GET"
        },

        // INTERNAL. Use Organization.projects() instead.
        "prototype$__get__projects": {
          isArray: true,
          url: urlBase + "/organizations/:id/projects",
          method: "GET"
        },

        // INTERNAL. Use Organization.projects.create() instead.
        "prototype$__create__projects": {
          url: urlBase + "/organizations/:id/projects",
          method: "POST"
        },

        // INTERNAL. Use Organization.projects.destroyAll() instead.
        "prototype$__delete__projects": {
          url: urlBase + "/organizations/:id/projects",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.projects.count() instead.
        "prototype$__count__projects": {
          url: urlBase + "/organizations/:id/projects/count",
          method: "GET"
        },

        // INTERNAL. Use Organization.images() instead.
        "prototype$__get__images": {
          isArray: true,
          url: urlBase + "/organizations/:id/images",
          method: "GET"
        },

        // INTERNAL. Use Organization.images.create() instead.
        "prototype$__create__images": {
          url: urlBase + "/organizations/:id/images",
          method: "POST"
        },

        // INTERNAL. Use Organization.images.destroyAll() instead.
        "prototype$__delete__images": {
          url: urlBase + "/organizations/:id/images",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.images.count() instead.
        "prototype$__count__images": {
          url: urlBase + "/organizations/:id/images/count",
          method: "GET"
        },

        // INTERNAL. Use Organization.owners() instead.
        "prototype$__get__owners": {
          isArray: true,
          url: urlBase + "/organizations/:id/owners",
          method: "GET"
        },

        // INTERNAL. Use Organization.owners.create() instead.
        "prototype$__create__owners": {
          url: urlBase + "/organizations/:id/owners",
          method: "POST"
        },

        // INTERNAL. Use Organization.owners.destroyAll() instead.
        "prototype$__delete__owners": {
          url: urlBase + "/organizations/:id/owners",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.owners.count() instead.
        "prototype$__count__owners": {
          url: urlBase + "/organizations/:id/owners/count",
          method: "GET"
        },

        // INTERNAL. Use Organization.team() instead.
        "prototype$__get__team": {
          isArray: true,
          url: urlBase + "/organizations/:id/team",
          method: "GET"
        },

        // INTERNAL. Use Organization.team.create() instead.
        "prototype$__create__team": {
          url: urlBase + "/organizations/:id/team",
          method: "POST"
        },

        // INTERNAL. Use Organization.team.destroyAll() instead.
        "prototype$__delete__team": {
          url: urlBase + "/organizations/:id/team",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.team.count() instead.
        "prototype$__count__team": {
          url: urlBase + "/organizations/:id/team/count",
          method: "GET"
        },

        // INTERNAL. Use Organization.stack() instead.
        "prototype$__get__stack": {
          isArray: true,
          url: urlBase + "/organizations/:id/stack",
          method: "GET"
        },

        // INTERNAL. Use Organization.stack.create() instead.
        "prototype$__create__stack": {
          url: urlBase + "/organizations/:id/stack",
          method: "POST"
        },

        // INTERNAL. Use Organization.stack.destroyAll() instead.
        "prototype$__delete__stack": {
          url: urlBase + "/organizations/:id/stack",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.stack.count() instead.
        "prototype$__count__stack": {
          url: urlBase + "/organizations/:id/stack/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#create
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/organizations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#createMany
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/organizations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#upsert
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/organizations",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#exists
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/organizations/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#findById
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/organizations/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#find
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/organizations",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#findOne
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/organizations/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#updateAll
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/organizations/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#deleteById
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/organizations/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#count
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/organizations/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#prototype$updateAttributes
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/organizations/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Organization#createChangeStream
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/organizations/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Post.organization() instead.
        "::get::Post::organization": {
          url: urlBase + "/posts/:id/organization",
          method: "GET"
        },

        // INTERNAL. Use UserModel.organizations.findById() instead.
        "::findById::UserModel::organizations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/organizations/:fk",
          method: "GET"
        },

        // INTERNAL. Use UserModel.organizations.destroyById() instead.
        "::destroyById::UserModel::organizations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/organizations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.organizations.updateById() instead.
        "::updateById::UserModel::organizations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/organizations/:fk",
          method: "PUT"
        },

        // INTERNAL. Use UserModel.organizations.link() instead.
        "::link::UserModel::organizations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/organizations/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use UserModel.organizations.unlink() instead.
        "::unlink::UserModel::organizations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/organizations/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.organizations.exists() instead.
        "::exists::UserModel::organizations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/organizations/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use UserModel.teams.findById() instead.
        "::findById::UserModel::teams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/teams/:fk",
          method: "GET"
        },

        // INTERNAL. Use UserModel.teams.destroyById() instead.
        "::destroyById::UserModel::teams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/teams/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.teams.updateById() instead.
        "::updateById::UserModel::teams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/teams/:fk",
          method: "PUT"
        },

        // INTERNAL. Use UserModel.teams.link() instead.
        "::link::UserModel::teams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/teams/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use UserModel.teams.unlink() instead.
        "::unlink::UserModel::teams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/teams/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.teams.exists() instead.
        "::exists::UserModel::teams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/teams/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use UserModel.organizations() instead.
        "::get::UserModel::organizations": {
          isArray: true,
          url: urlBase + "/users/:id/organizations",
          method: "GET"
        },

        // INTERNAL. Use UserModel.organizations.create() instead.
        "::create::UserModel::organizations": {
          url: urlBase + "/users/:id/organizations",
          method: "POST"
        },

        // INTERNAL. Use UserModel.organizations.createMany() instead.
        "::createMany::UserModel::organizations": {
          isArray: true,
          url: urlBase + "/users/:id/organizations",
          method: "POST"
        },

        // INTERNAL. Use UserModel.organizations.destroyAll() instead.
        "::delete::UserModel::organizations": {
          url: urlBase + "/users/:id/organizations",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.organizations.count() instead.
        "::count::UserModel::organizations": {
          url: urlBase + "/users/:id/organizations/count",
          method: "GET"
        },

        // INTERNAL. Use UserModel.teams() instead.
        "::get::UserModel::teams": {
          isArray: true,
          url: urlBase + "/users/:id/teams",
          method: "GET"
        },

        // INTERNAL. Use UserModel.teams.create() instead.
        "::create::UserModel::teams": {
          url: urlBase + "/users/:id/teams",
          method: "POST"
        },

        // INTERNAL. Use UserModel.teams.createMany() instead.
        "::createMany::UserModel::teams": {
          isArray: true,
          url: urlBase + "/users/:id/teams",
          method: "POST"
        },

        // INTERNAL. Use UserModel.teams.destroyAll() instead.
        "::delete::UserModel::teams": {
          url: urlBase + "/users/:id/teams",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.teams.count() instead.
        "::count::UserModel::teams": {
          url: urlBase + "/users/:id/teams/count",
          method: "GET"
        },

        // INTERNAL. Use Project.organization() instead.
        "::get::Project::organization": {
          url: urlBase + "/projects/:id/organization",
          method: "GET"
        },

        // INTERNAL. Use CDN.organization() instead.
        "::get::CDN::organization": {
          url: urlBase + "/cdn/:id/organization",
          method: "GET"
        },

        // INTERNAL. Use Owner.organization() instead.
        "::get::Owner::organization": {
          url: urlBase + "/owners/:id/organization",
          method: "GET"
        },

        // INTERNAL. Use Team.organization() instead.
        "::get::Team::organization": {
          url: urlBase + "/teams/:id/organization",
          method: "GET"
        },

        // INTERNAL. Use Stack.organization() instead.
        "::get::Stack::organization": {
          url: urlBase + "/stacks/:id/organization",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Organization#updateOrCreate
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Organization#update
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Organization#destroyById
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Organization#removeById
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Organization#modelName
    * @propertyOf lbServices.Organization
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Organization`.
    */
    R.modelName = "Organization";

    /**
     * @ngdoc object
     * @name lbServices.Organization.posts
     * @header lbServices.Organization.posts
     * @object
     * @description
     *
     * The object `Organization.posts` groups methods
     * manipulating `Post` instances related to `Organization`.
     *
     * Call {@link lbServices.Organization#posts Organization.posts()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Organization#posts
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Queries posts of Organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::get::Organization::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.posts#count
         * @methodOf lbServices.Organization.posts
         *
         * @description
         *
         * Counts posts of Organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.posts.count = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::count::Organization::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.posts#create
         * @methodOf lbServices.Organization.posts
         *
         * @description
         *
         * Creates a new instance in posts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts.create = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::create::Organization::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.posts#createMany
         * @methodOf lbServices.Organization.posts
         *
         * @description
         *
         * Creates a new instance in posts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts.createMany = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::createMany::Organization::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.posts#destroyAll
         * @methodOf lbServices.Organization.posts
         *
         * @description
         *
         * Deletes all posts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.posts.destroyAll = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::delete::Organization::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.posts#destroyById
         * @methodOf lbServices.Organization.posts
         *
         * @description
         *
         * Delete a related item by id for posts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for posts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.posts.destroyById = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::destroyById::Organization::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.posts#findById
         * @methodOf lbServices.Organization.posts
         *
         * @description
         *
         * Find a related item by id for posts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for posts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts.findById = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::findById::Organization::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.posts#updateById
         * @methodOf lbServices.Organization.posts
         *
         * @description
         *
         * Update a related item by id for posts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for posts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts.updateById = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::updateById::Organization::posts"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Organization.projects
     * @header lbServices.Organization.projects
     * @object
     * @description
     *
     * The object `Organization.projects` groups methods
     * manipulating `Project` instances related to `Organization`.
     *
     * Call {@link lbServices.Organization#projects Organization.projects()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Organization#projects
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Queries projects of Organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::get::Organization::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.projects#count
         * @methodOf lbServices.Organization.projects
         *
         * @description
         *
         * Counts projects of Organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.projects.count = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::count::Organization::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.projects#create
         * @methodOf lbServices.Organization.projects
         *
         * @description
         *
         * Creates a new instance in projects of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.create = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::create::Organization::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.projects#createMany
         * @methodOf lbServices.Organization.projects
         *
         * @description
         *
         * Creates a new instance in projects of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.createMany = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::createMany::Organization::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.projects#destroyAll
         * @methodOf lbServices.Organization.projects
         *
         * @description
         *
         * Deletes all projects of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.projects.destroyAll = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::delete::Organization::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.projects#destroyById
         * @methodOf lbServices.Organization.projects
         *
         * @description
         *
         * Delete a related item by id for projects.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.projects.destroyById = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::destroyById::Organization::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.projects#findById
         * @methodOf lbServices.Organization.projects
         *
         * @description
         *
         * Find a related item by id for projects.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.findById = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::findById::Organization::projects"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.projects#updateById
         * @methodOf lbServices.Organization.projects
         *
         * @description
         *
         * Update a related item by id for projects.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for projects
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.projects.updateById = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::updateById::Organization::projects"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Organization.images
     * @header lbServices.Organization.images
     * @object
     * @description
     *
     * The object `Organization.images` groups methods
     * manipulating `CDN` instances related to `Organization`.
     *
     * Call {@link lbServices.Organization#images Organization.images()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Organization#images
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Queries images of Organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::get::Organization::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.images#count
         * @methodOf lbServices.Organization.images
         *
         * @description
         *
         * Counts images of Organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.images.count = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::count::Organization::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.images#create
         * @methodOf lbServices.Organization.images
         *
         * @description
         *
         * Creates a new instance in images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.create = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::create::Organization::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.images#createMany
         * @methodOf lbServices.Organization.images
         *
         * @description
         *
         * Creates a new instance in images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.createMany = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::createMany::Organization::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.images#destroyAll
         * @methodOf lbServices.Organization.images
         *
         * @description
         *
         * Deletes all images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.images.destroyAll = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::delete::Organization::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.images#destroyById
         * @methodOf lbServices.Organization.images
         *
         * @description
         *
         * Delete a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.images.destroyById = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::destroyById::Organization::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.images#findById
         * @methodOf lbServices.Organization.images
         *
         * @description
         *
         * Find a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.findById = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::findById::Organization::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.images#updateById
         * @methodOf lbServices.Organization.images
         *
         * @description
         *
         * Update a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.updateById = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::updateById::Organization::images"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Organization.owners
     * @header lbServices.Organization.owners
     * @object
     * @description
     *
     * The object `Organization.owners` groups methods
     * manipulating `UserModel` instances related to `Organization`.
     *
     * Call {@link lbServices.Organization#owners Organization.owners()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Organization#owners
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Queries owners of Organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.owners = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::get::Organization::owners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.owners#count
         * @methodOf lbServices.Organization.owners
         *
         * @description
         *
         * Counts owners of Organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.owners.count = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::count::Organization::owners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.owners#create
         * @methodOf lbServices.Organization.owners
         *
         * @description
         *
         * Creates a new instance in owners of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.owners.create = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::create::Organization::owners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.owners#createMany
         * @methodOf lbServices.Organization.owners
         *
         * @description
         *
         * Creates a new instance in owners of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.owners.createMany = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::createMany::Organization::owners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.owners#destroyAll
         * @methodOf lbServices.Organization.owners
         *
         * @description
         *
         * Deletes all owners of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.owners.destroyAll = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::delete::Organization::owners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.owners#destroyById
         * @methodOf lbServices.Organization.owners
         *
         * @description
         *
         * Delete a related item by id for owners.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for owners
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.owners.destroyById = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::destroyById::Organization::owners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.owners#exists
         * @methodOf lbServices.Organization.owners
         *
         * @description
         *
         * Check the existence of owners relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for owners
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.owners.exists = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::exists::Organization::owners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.owners#findById
         * @methodOf lbServices.Organization.owners
         *
         * @description
         *
         * Find a related item by id for owners.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for owners
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.owners.findById = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::findById::Organization::owners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.owners#link
         * @methodOf lbServices.Organization.owners
         *
         * @description
         *
         * Add a related item by id for owners.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for owners
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.owners.link = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::link::Organization::owners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.owners#unlink
         * @methodOf lbServices.Organization.owners
         *
         * @description
         *
         * Remove the owners relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for owners
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.owners.unlink = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::unlink::Organization::owners"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.owners#updateById
         * @methodOf lbServices.Organization.owners
         *
         * @description
         *
         * Update a related item by id for owners.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for owners
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.owners.updateById = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::updateById::Organization::owners"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Organization.team
     * @header lbServices.Organization.team
     * @object
     * @description
     *
     * The object `Organization.team` groups methods
     * manipulating `UserModel` instances related to `Organization`.
     *
     * Call {@link lbServices.Organization#team Organization.team()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Organization#team
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Queries team of Organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.team = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::get::Organization::team"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.team#count
         * @methodOf lbServices.Organization.team
         *
         * @description
         *
         * Counts team of Organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.team.count = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::count::Organization::team"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.team#create
         * @methodOf lbServices.Organization.team
         *
         * @description
         *
         * Creates a new instance in team of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.team.create = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::create::Organization::team"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.team#createMany
         * @methodOf lbServices.Organization.team
         *
         * @description
         *
         * Creates a new instance in team of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.team.createMany = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::createMany::Organization::team"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.team#destroyAll
         * @methodOf lbServices.Organization.team
         *
         * @description
         *
         * Deletes all team of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.team.destroyAll = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::delete::Organization::team"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.team#destroyById
         * @methodOf lbServices.Organization.team
         *
         * @description
         *
         * Delete a related item by id for team.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for team
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.team.destroyById = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::destroyById::Organization::team"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.team#exists
         * @methodOf lbServices.Organization.team
         *
         * @description
         *
         * Check the existence of team relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for team
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.team.exists = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::exists::Organization::team"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.team#findById
         * @methodOf lbServices.Organization.team
         *
         * @description
         *
         * Find a related item by id for team.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for team
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.team.findById = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::findById::Organization::team"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.team#link
         * @methodOf lbServices.Organization.team
         *
         * @description
         *
         * Add a related item by id for team.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for team
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.team.link = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::link::Organization::team"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.team#unlink
         * @methodOf lbServices.Organization.team
         *
         * @description
         *
         * Remove the team relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for team
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.team.unlink = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::unlink::Organization::team"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.team#updateById
         * @methodOf lbServices.Organization.team
         *
         * @description
         *
         * Update a related item by id for team.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for team
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.team.updateById = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::updateById::Organization::team"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Organization.stack
     * @header lbServices.Organization.stack
     * @object
     * @description
     *
     * The object `Organization.stack` groups methods
     * manipulating `Technology` instances related to `Organization`.
     *
     * Call {@link lbServices.Organization#stack Organization.stack()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Organization#stack
         * @methodOf lbServices.Organization
         *
         * @description
         *
         * Queries stack of Organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.stack = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::get::Organization::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.stack#count
         * @methodOf lbServices.Organization.stack
         *
         * @description
         *
         * Counts stack of Organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.stack.count = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::count::Organization::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.stack#create
         * @methodOf lbServices.Organization.stack
         *
         * @description
         *
         * Creates a new instance in stack of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.stack.create = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::create::Organization::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.stack#createMany
         * @methodOf lbServices.Organization.stack
         *
         * @description
         *
         * Creates a new instance in stack of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.stack.createMany = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::createMany::Organization::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.stack#destroyAll
         * @methodOf lbServices.Organization.stack
         *
         * @description
         *
         * Deletes all stack of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stack.destroyAll = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::delete::Organization::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.stack#destroyById
         * @methodOf lbServices.Organization.stack
         *
         * @description
         *
         * Delete a related item by id for stack.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stack
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stack.destroyById = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::destroyById::Organization::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.stack#exists
         * @methodOf lbServices.Organization.stack
         *
         * @description
         *
         * Check the existence of stack relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stack
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.stack.exists = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::exists::Organization::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.stack#findById
         * @methodOf lbServices.Organization.stack
         *
         * @description
         *
         * Find a related item by id for stack.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stack
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.stack.findById = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::findById::Organization::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.stack#link
         * @methodOf lbServices.Organization.stack
         *
         * @description
         *
         * Add a related item by id for stack.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stack
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.stack.link = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::link::Organization::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.stack#unlink
         * @methodOf lbServices.Organization.stack
         *
         * @description
         *
         * Remove the stack relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stack
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stack.unlink = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::unlink::Organization::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Organization.stack#updateById
         * @methodOf lbServices.Organization.stack
         *
         * @description
         *
         * Update a related item by id for stack.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stack
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.stack.updateById = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::updateById::Organization::stack"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.UserModel
 * @header lbServices.UserModel
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `UserModel` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "UserModel",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.UserModel#prototype$__findById__accessTokens
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#prototype$__destroyById__accessTokens
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#prototype$__updateById__accessTokens
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use UserModel.posts.findById() instead.
        "prototype$__findById__posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/posts/:fk",
          method: "GET"
        },

        // INTERNAL. Use UserModel.posts.destroyById() instead.
        "prototype$__destroyById__posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/posts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.posts.updateById() instead.
        "prototype$__updateById__posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/posts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use UserModel.images.findById() instead.
        "prototype$__findById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/images/:fk",
          method: "GET"
        },

        // INTERNAL. Use UserModel.images.destroyById() instead.
        "prototype$__destroyById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/images/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.images.updateById() instead.
        "prototype$__updateById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/images/:fk",
          method: "PUT"
        },

        // INTERNAL. Use UserModel.notifications.findById() instead.
        "prototype$__findById__notifications": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/notifications/:fk",
          method: "GET"
        },

        // INTERNAL. Use UserModel.notifications.destroyById() instead.
        "prototype$__destroyById__notifications": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/notifications/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.notifications.updateById() instead.
        "prototype$__updateById__notifications": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/notifications/:fk",
          method: "PUT"
        },

        // INTERNAL. Use UserModel.organizations.findById() instead.
        "prototype$__findById__organizations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/organizations/:fk",
          method: "GET"
        },

        // INTERNAL. Use UserModel.organizations.destroyById() instead.
        "prototype$__destroyById__organizations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/organizations/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.organizations.updateById() instead.
        "prototype$__updateById__organizations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/organizations/:fk",
          method: "PUT"
        },

        // INTERNAL. Use UserModel.organizations.link() instead.
        "prototype$__link__organizations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/organizations/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use UserModel.organizations.unlink() instead.
        "prototype$__unlink__organizations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/organizations/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.organizations.exists() instead.
        "prototype$__exists__organizations": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/organizations/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use UserModel.teams.findById() instead.
        "prototype$__findById__teams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/teams/:fk",
          method: "GET"
        },

        // INTERNAL. Use UserModel.teams.destroyById() instead.
        "prototype$__destroyById__teams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/teams/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.teams.updateById() instead.
        "prototype$__updateById__teams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/teams/:fk",
          method: "PUT"
        },

        // INTERNAL. Use UserModel.teams.link() instead.
        "prototype$__link__teams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/teams/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use UserModel.teams.unlink() instead.
        "prototype$__unlink__teams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/teams/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.teams.exists() instead.
        "prototype$__exists__teams": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/teams/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use UserModel.skills.findById() instead.
        "prototype$__findById__skills": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/skills/:fk",
          method: "GET"
        },

        // INTERNAL. Use UserModel.skills.destroyById() instead.
        "prototype$__destroyById__skills": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/skills/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.skills.updateById() instead.
        "prototype$__updateById__skills": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/skills/:fk",
          method: "PUT"
        },

        // INTERNAL. Use UserModel.skills.link() instead.
        "prototype$__link__skills": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/skills/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use UserModel.skills.unlink() instead.
        "prototype$__unlink__skills": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/skills/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.skills.exists() instead.
        "prototype$__exists__skills": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/skills/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#prototype$__get__accessTokens
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Queries accessTokens of UserModel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#prototype$__create__accessTokens
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#prototype$__delete__accessTokens
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#prototype$__count__accessTokens
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Counts accessTokens of UserModel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/users/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use UserModel.posts() instead.
        "prototype$__get__posts": {
          isArray: true,
          url: urlBase + "/users/:id/posts",
          method: "GET"
        },

        // INTERNAL. Use UserModel.posts.create() instead.
        "prototype$__create__posts": {
          url: urlBase + "/users/:id/posts",
          method: "POST"
        },

        // INTERNAL. Use UserModel.posts.destroyAll() instead.
        "prototype$__delete__posts": {
          url: urlBase + "/users/:id/posts",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.posts.count() instead.
        "prototype$__count__posts": {
          url: urlBase + "/users/:id/posts/count",
          method: "GET"
        },

        // INTERNAL. Use UserModel.images() instead.
        "prototype$__get__images": {
          isArray: true,
          url: urlBase + "/users/:id/images",
          method: "GET"
        },

        // INTERNAL. Use UserModel.images.create() instead.
        "prototype$__create__images": {
          url: urlBase + "/users/:id/images",
          method: "POST"
        },

        // INTERNAL. Use UserModel.images.destroyAll() instead.
        "prototype$__delete__images": {
          url: urlBase + "/users/:id/images",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.images.count() instead.
        "prototype$__count__images": {
          url: urlBase + "/users/:id/images/count",
          method: "GET"
        },

        // INTERNAL. Use UserModel.notifications() instead.
        "prototype$__get__notifications": {
          isArray: true,
          url: urlBase + "/users/:id/notifications",
          method: "GET"
        },

        // INTERNAL. Use UserModel.notifications.create() instead.
        "prototype$__create__notifications": {
          url: urlBase + "/users/:id/notifications",
          method: "POST"
        },

        // INTERNAL. Use UserModel.notifications.destroyAll() instead.
        "prototype$__delete__notifications": {
          url: urlBase + "/users/:id/notifications",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.notifications.count() instead.
        "prototype$__count__notifications": {
          url: urlBase + "/users/:id/notifications/count",
          method: "GET"
        },

        // INTERNAL. Use UserModel.organizations() instead.
        "prototype$__get__organizations": {
          isArray: true,
          url: urlBase + "/users/:id/organizations",
          method: "GET"
        },

        // INTERNAL. Use UserModel.organizations.create() instead.
        "prototype$__create__organizations": {
          url: urlBase + "/users/:id/organizations",
          method: "POST"
        },

        // INTERNAL. Use UserModel.organizations.destroyAll() instead.
        "prototype$__delete__organizations": {
          url: urlBase + "/users/:id/organizations",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.organizations.count() instead.
        "prototype$__count__organizations": {
          url: urlBase + "/users/:id/organizations/count",
          method: "GET"
        },

        // INTERNAL. Use UserModel.teams() instead.
        "prototype$__get__teams": {
          isArray: true,
          url: urlBase + "/users/:id/teams",
          method: "GET"
        },

        // INTERNAL. Use UserModel.teams.create() instead.
        "prototype$__create__teams": {
          url: urlBase + "/users/:id/teams",
          method: "POST"
        },

        // INTERNAL. Use UserModel.teams.destroyAll() instead.
        "prototype$__delete__teams": {
          url: urlBase + "/users/:id/teams",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.teams.count() instead.
        "prototype$__count__teams": {
          url: urlBase + "/users/:id/teams/count",
          method: "GET"
        },

        // INTERNAL. Use UserModel.skills() instead.
        "prototype$__get__skills": {
          isArray: true,
          url: urlBase + "/users/:id/skills",
          method: "GET"
        },

        // INTERNAL. Use UserModel.skills.create() instead.
        "prototype$__create__skills": {
          url: urlBase + "/users/:id/skills",
          method: "POST"
        },

        // INTERNAL. Use UserModel.skills.destroyAll() instead.
        "prototype$__delete__skills": {
          url: urlBase + "/users/:id/skills",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.skills.count() instead.
        "prototype$__count__skills": {
          url: urlBase + "/users/:id/skills/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#create
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#createMany
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#upsert
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#exists
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#findById
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#find
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#findOne
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#updateAll
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#deleteById
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#count
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#prototype$updateAttributes
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#createChangeStream
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#login
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#logout
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#confirm
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#resetPassword
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/users/reset",
          method: "POST"
        },

        // INTERNAL. Use Post.user() instead.
        "::get::Post::user": {
          url: urlBase + "/posts/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Organization.owners.findById() instead.
        "::findById::Organization::owners": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/owners/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.owners.destroyById() instead.
        "::destroyById::Organization::owners": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/owners/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.owners.updateById() instead.
        "::updateById::Organization::owners": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/owners/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.owners.link() instead.
        "::link::Organization::owners": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/owners/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.owners.unlink() instead.
        "::unlink::Organization::owners": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/owners/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.owners.exists() instead.
        "::exists::Organization::owners": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/owners/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Organization.team.findById() instead.
        "::findById::Organization::team": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/team/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.team.destroyById() instead.
        "::destroyById::Organization::team": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/team/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.team.updateById() instead.
        "::updateById::Organization::team": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/team/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.team.link() instead.
        "::link::Organization::team": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/team/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.team.unlink() instead.
        "::unlink::Organization::team": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/team/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.team.exists() instead.
        "::exists::Organization::team": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/team/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Organization.owners() instead.
        "::get::Organization::owners": {
          isArray: true,
          url: urlBase + "/organizations/:id/owners",
          method: "GET"
        },

        // INTERNAL. Use Organization.owners.create() instead.
        "::create::Organization::owners": {
          url: urlBase + "/organizations/:id/owners",
          method: "POST"
        },

        // INTERNAL. Use Organization.owners.createMany() instead.
        "::createMany::Organization::owners": {
          isArray: true,
          url: urlBase + "/organizations/:id/owners",
          method: "POST"
        },

        // INTERNAL. Use Organization.owners.destroyAll() instead.
        "::delete::Organization::owners": {
          url: urlBase + "/organizations/:id/owners",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.owners.count() instead.
        "::count::Organization::owners": {
          url: urlBase + "/organizations/:id/owners/count",
          method: "GET"
        },

        // INTERNAL. Use Organization.team() instead.
        "::get::Organization::team": {
          isArray: true,
          url: urlBase + "/organizations/:id/team",
          method: "GET"
        },

        // INTERNAL. Use Organization.team.create() instead.
        "::create::Organization::team": {
          url: urlBase + "/organizations/:id/team",
          method: "POST"
        },

        // INTERNAL. Use Organization.team.createMany() instead.
        "::createMany::Organization::team": {
          isArray: true,
          url: urlBase + "/organizations/:id/team",
          method: "POST"
        },

        // INTERNAL. Use Organization.team.destroyAll() instead.
        "::delete::Organization::team": {
          url: urlBase + "/organizations/:id/team",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.team.count() instead.
        "::count::Organization::team": {
          url: urlBase + "/organizations/:id/team/count",
          method: "GET"
        },

        // INTERNAL. Use CDN.user() instead.
        "::get::CDN::user": {
          url: urlBase + "/cdn/:id/user",
          method: "GET"
        },

        // INTERNAL. Use Message.sender() instead.
        "::get::Message::sender": {
          url: urlBase + "/messages/:id/sender",
          method: "GET"
        },

        // INTERNAL. Use Message.receiver() instead.
        "::get::Message::receiver": {
          url: urlBase + "/messages/:id/receiver",
          method: "GET"
        },

        // INTERNAL. Use Owner.userModel() instead.
        "::get::Owner::userModel": {
          url: urlBase + "/owners/:id/userModel",
          method: "GET"
        },

        // INTERNAL. Use Team.userModel() instead.
        "::get::Team::userModel": {
          url: urlBase + "/teams/:id/userModel",
          method: "GET"
        },

        // INTERNAL. Use Stack.userModel() instead.
        "::get::Stack::userModel": {
          url: urlBase + "/stacks/:id/userModel",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserModel#getCurrent
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.UserModel#updateOrCreate
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.UserModel#update
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.UserModel#destroyById
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.UserModel#removeById
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.UserModel#getCachedCurrent
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.UserModel#login} or
         * {@link lbServices.UserModel#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A UserModel instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel#isAuthenticated
         * @methodOf lbServices.UserModel
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel#getCurrentId
         * @methodOf lbServices.UserModel
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.UserModel#modelName
    * @propertyOf lbServices.UserModel
    * @description
    * The name of the model represented by this $resource,
    * i.e. `UserModel`.
    */
    R.modelName = "UserModel";

    /**
     * @ngdoc object
     * @name lbServices.UserModel.posts
     * @header lbServices.UserModel.posts
     * @object
     * @description
     *
     * The object `UserModel.posts` groups methods
     * manipulating `Post` instances related to `UserModel`.
     *
     * Call {@link lbServices.UserModel#posts UserModel.posts()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.UserModel#posts
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Queries posts of UserModel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::get::UserModel::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.posts#count
         * @methodOf lbServices.UserModel.posts
         *
         * @description
         *
         * Counts posts of UserModel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.posts.count = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::count::UserModel::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.posts#create
         * @methodOf lbServices.UserModel.posts
         *
         * @description
         *
         * Creates a new instance in posts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts.create = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::create::UserModel::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.posts#createMany
         * @methodOf lbServices.UserModel.posts
         *
         * @description
         *
         * Creates a new instance in posts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts.createMany = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::createMany::UserModel::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.posts#destroyAll
         * @methodOf lbServices.UserModel.posts
         *
         * @description
         *
         * Deletes all posts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.posts.destroyAll = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::delete::UserModel::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.posts#destroyById
         * @methodOf lbServices.UserModel.posts
         *
         * @description
         *
         * Delete a related item by id for posts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for posts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.posts.destroyById = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::destroyById::UserModel::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.posts#findById
         * @methodOf lbServices.UserModel.posts
         *
         * @description
         *
         * Find a related item by id for posts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for posts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts.findById = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::findById::UserModel::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.posts#updateById
         * @methodOf lbServices.UserModel.posts
         *
         * @description
         *
         * Update a related item by id for posts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for posts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts.updateById = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::updateById::UserModel::posts"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.UserModel.images
     * @header lbServices.UserModel.images
     * @object
     * @description
     *
     * The object `UserModel.images` groups methods
     * manipulating `CDN` instances related to `UserModel`.
     *
     * Call {@link lbServices.UserModel#images UserModel.images()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.UserModel#images
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Queries images of UserModel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::get::UserModel::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.images#count
         * @methodOf lbServices.UserModel.images
         *
         * @description
         *
         * Counts images of UserModel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.images.count = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::count::UserModel::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.images#create
         * @methodOf lbServices.UserModel.images
         *
         * @description
         *
         * Creates a new instance in images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.create = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::create::UserModel::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.images#createMany
         * @methodOf lbServices.UserModel.images
         *
         * @description
         *
         * Creates a new instance in images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.createMany = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::createMany::UserModel::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.images#destroyAll
         * @methodOf lbServices.UserModel.images
         *
         * @description
         *
         * Deletes all images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.images.destroyAll = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::delete::UserModel::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.images#destroyById
         * @methodOf lbServices.UserModel.images
         *
         * @description
         *
         * Delete a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.images.destroyById = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::destroyById::UserModel::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.images#findById
         * @methodOf lbServices.UserModel.images
         *
         * @description
         *
         * Find a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.findById = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::findById::UserModel::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.images#updateById
         * @methodOf lbServices.UserModel.images
         *
         * @description
         *
         * Update a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.updateById = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::updateById::UserModel::images"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.UserModel.notifications
     * @header lbServices.UserModel.notifications
     * @object
     * @description
     *
     * The object `UserModel.notifications` groups methods
     * manipulating `Message` instances related to `UserModel`.
     *
     * Call {@link lbServices.UserModel#notifications UserModel.notifications()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.UserModel#notifications
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Queries notifications of UserModel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.notifications = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::get::UserModel::notifications"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.notifications#count
         * @methodOf lbServices.UserModel.notifications
         *
         * @description
         *
         * Counts notifications of UserModel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.notifications.count = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::count::UserModel::notifications"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.notifications#create
         * @methodOf lbServices.UserModel.notifications
         *
         * @description
         *
         * Creates a new instance in notifications of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.notifications.create = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::create::UserModel::notifications"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.notifications#createMany
         * @methodOf lbServices.UserModel.notifications
         *
         * @description
         *
         * Creates a new instance in notifications of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.notifications.createMany = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::createMany::UserModel::notifications"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.notifications#destroyAll
         * @methodOf lbServices.UserModel.notifications
         *
         * @description
         *
         * Deletes all notifications of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.notifications.destroyAll = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::delete::UserModel::notifications"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.notifications#destroyById
         * @methodOf lbServices.UserModel.notifications
         *
         * @description
         *
         * Delete a related item by id for notifications.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for notifications
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.notifications.destroyById = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::destroyById::UserModel::notifications"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.notifications#findById
         * @methodOf lbServices.UserModel.notifications
         *
         * @description
         *
         * Find a related item by id for notifications.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for notifications
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.notifications.findById = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::findById::UserModel::notifications"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.notifications#updateById
         * @methodOf lbServices.UserModel.notifications
         *
         * @description
         *
         * Update a related item by id for notifications.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for notifications
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.notifications.updateById = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::updateById::UserModel::notifications"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.UserModel.organizations
     * @header lbServices.UserModel.organizations
     * @object
     * @description
     *
     * The object `UserModel.organizations` groups methods
     * manipulating `Organization` instances related to `UserModel`.
     *
     * Call {@link lbServices.UserModel#organizations UserModel.organizations()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.UserModel#organizations
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Queries organizations of UserModel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.organizations = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::get::UserModel::organizations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.organizations#count
         * @methodOf lbServices.UserModel.organizations
         *
         * @description
         *
         * Counts organizations of UserModel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.organizations.count = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::count::UserModel::organizations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.organizations#create
         * @methodOf lbServices.UserModel.organizations
         *
         * @description
         *
         * Creates a new instance in organizations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.organizations.create = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::create::UserModel::organizations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.organizations#createMany
         * @methodOf lbServices.UserModel.organizations
         *
         * @description
         *
         * Creates a new instance in organizations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.organizations.createMany = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::createMany::UserModel::organizations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.organizations#destroyAll
         * @methodOf lbServices.UserModel.organizations
         *
         * @description
         *
         * Deletes all organizations of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.organizations.destroyAll = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::delete::UserModel::organizations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.organizations#destroyById
         * @methodOf lbServices.UserModel.organizations
         *
         * @description
         *
         * Delete a related item by id for organizations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for organizations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.organizations.destroyById = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::destroyById::UserModel::organizations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.organizations#exists
         * @methodOf lbServices.UserModel.organizations
         *
         * @description
         *
         * Check the existence of organizations relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for organizations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.organizations.exists = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::exists::UserModel::organizations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.organizations#findById
         * @methodOf lbServices.UserModel.organizations
         *
         * @description
         *
         * Find a related item by id for organizations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for organizations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.organizations.findById = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::findById::UserModel::organizations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.organizations#link
         * @methodOf lbServices.UserModel.organizations
         *
         * @description
         *
         * Add a related item by id for organizations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for organizations
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.organizations.link = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::link::UserModel::organizations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.organizations#unlink
         * @methodOf lbServices.UserModel.organizations
         *
         * @description
         *
         * Remove the organizations relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for organizations
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.organizations.unlink = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::unlink::UserModel::organizations"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.organizations#updateById
         * @methodOf lbServices.UserModel.organizations
         *
         * @description
         *
         * Update a related item by id for organizations.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for organizations
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.organizations.updateById = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::updateById::UserModel::organizations"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.UserModel.teams
     * @header lbServices.UserModel.teams
     * @object
     * @description
     *
     * The object `UserModel.teams` groups methods
     * manipulating `Organization` instances related to `UserModel`.
     *
     * Call {@link lbServices.UserModel#teams UserModel.teams()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.UserModel#teams
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Queries teams of UserModel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.teams = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::get::UserModel::teams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.teams#count
         * @methodOf lbServices.UserModel.teams
         *
         * @description
         *
         * Counts teams of UserModel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.teams.count = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::count::UserModel::teams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.teams#create
         * @methodOf lbServices.UserModel.teams
         *
         * @description
         *
         * Creates a new instance in teams of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.teams.create = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::create::UserModel::teams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.teams#createMany
         * @methodOf lbServices.UserModel.teams
         *
         * @description
         *
         * Creates a new instance in teams of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.teams.createMany = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::createMany::UserModel::teams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.teams#destroyAll
         * @methodOf lbServices.UserModel.teams
         *
         * @description
         *
         * Deletes all teams of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.teams.destroyAll = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::delete::UserModel::teams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.teams#destroyById
         * @methodOf lbServices.UserModel.teams
         *
         * @description
         *
         * Delete a related item by id for teams.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for teams
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.teams.destroyById = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::destroyById::UserModel::teams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.teams#exists
         * @methodOf lbServices.UserModel.teams
         *
         * @description
         *
         * Check the existence of teams relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for teams
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.teams.exists = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::exists::UserModel::teams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.teams#findById
         * @methodOf lbServices.UserModel.teams
         *
         * @description
         *
         * Find a related item by id for teams.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for teams
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.teams.findById = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::findById::UserModel::teams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.teams#link
         * @methodOf lbServices.UserModel.teams
         *
         * @description
         *
         * Add a related item by id for teams.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for teams
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.teams.link = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::link::UserModel::teams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.teams#unlink
         * @methodOf lbServices.UserModel.teams
         *
         * @description
         *
         * Remove the teams relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for teams
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.teams.unlink = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::unlink::UserModel::teams"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.teams#updateById
         * @methodOf lbServices.UserModel.teams
         *
         * @description
         *
         * Update a related item by id for teams.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for teams
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.teams.updateById = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::updateById::UserModel::teams"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.UserModel.skills
     * @header lbServices.UserModel.skills
     * @object
     * @description
     *
     * The object `UserModel.skills` groups methods
     * manipulating `Technology` instances related to `UserModel`.
     *
     * Call {@link lbServices.UserModel#skills UserModel.skills()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.UserModel#skills
         * @methodOf lbServices.UserModel
         *
         * @description
         *
         * Queries skills of UserModel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.skills = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::get::UserModel::skills"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.skills#count
         * @methodOf lbServices.UserModel.skills
         *
         * @description
         *
         * Counts skills of UserModel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.skills.count = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::count::UserModel::skills"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.skills#create
         * @methodOf lbServices.UserModel.skills
         *
         * @description
         *
         * Creates a new instance in skills of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.skills.create = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::create::UserModel::skills"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.skills#createMany
         * @methodOf lbServices.UserModel.skills
         *
         * @description
         *
         * Creates a new instance in skills of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.skills.createMany = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::createMany::UserModel::skills"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.skills#destroyAll
         * @methodOf lbServices.UserModel.skills
         *
         * @description
         *
         * Deletes all skills of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.skills.destroyAll = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::delete::UserModel::skills"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.skills#destroyById
         * @methodOf lbServices.UserModel.skills
         *
         * @description
         *
         * Delete a related item by id for skills.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for skills
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.skills.destroyById = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::destroyById::UserModel::skills"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.skills#exists
         * @methodOf lbServices.UserModel.skills
         *
         * @description
         *
         * Check the existence of skills relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for skills
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.skills.exists = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::exists::UserModel::skills"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.skills#findById
         * @methodOf lbServices.UserModel.skills
         *
         * @description
         *
         * Find a related item by id for skills.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for skills
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.skills.findById = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::findById::UserModel::skills"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.skills#link
         * @methodOf lbServices.UserModel.skills
         *
         * @description
         *
         * Add a related item by id for skills.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for skills
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.skills.link = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::link::UserModel::skills"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.skills#unlink
         * @methodOf lbServices.UserModel.skills
         *
         * @description
         *
         * Remove the skills relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for skills
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.skills.unlink = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::unlink::UserModel::skills"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.UserModel.skills#updateById
         * @methodOf lbServices.UserModel.skills
         *
         * @description
         *
         * Update a related item by id for skills.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for skills
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.skills.updateById = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::updateById::UserModel::skills"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Technology
 * @header lbServices.Technology
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Technology` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Technology",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/technologies/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Technology.images.findById() instead.
        "prototype$__findById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/technologies/:id/images/:fk",
          method: "GET"
        },

        // INTERNAL. Use Technology.images.destroyById() instead.
        "prototype$__destroyById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/technologies/:id/images/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Technology.images.updateById() instead.
        "prototype$__updateById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/technologies/:id/images/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Technology.images() instead.
        "prototype$__get__images": {
          isArray: true,
          url: urlBase + "/technologies/:id/images",
          method: "GET"
        },

        // INTERNAL. Use Technology.images.create() instead.
        "prototype$__create__images": {
          url: urlBase + "/technologies/:id/images",
          method: "POST"
        },

        // INTERNAL. Use Technology.images.destroyAll() instead.
        "prototype$__delete__images": {
          url: urlBase + "/technologies/:id/images",
          method: "DELETE"
        },

        // INTERNAL. Use Technology.images.count() instead.
        "prototype$__count__images": {
          url: urlBase + "/technologies/:id/images/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Technology#create
         * @methodOf lbServices.Technology
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/technologies",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Technology#createMany
         * @methodOf lbServices.Technology
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/technologies",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Technology#upsert
         * @methodOf lbServices.Technology
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/technologies",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Technology#exists
         * @methodOf lbServices.Technology
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/technologies/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Technology#findById
         * @methodOf lbServices.Technology
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/technologies/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Technology#find
         * @methodOf lbServices.Technology
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/technologies",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Technology#findOne
         * @methodOf lbServices.Technology
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/technologies/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Technology#updateAll
         * @methodOf lbServices.Technology
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/technologies/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Technology#deleteById
         * @methodOf lbServices.Technology
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/technologies/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Technology#count
         * @methodOf lbServices.Technology
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/technologies/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Technology#prototype$updateAttributes
         * @methodOf lbServices.Technology
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/technologies/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Technology#createChangeStream
         * @methodOf lbServices.Technology
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/technologies/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Organization.stack.findById() instead.
        "::findById::Organization::stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/stack/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.stack.destroyById() instead.
        "::destroyById::Organization::stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/stack/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.stack.updateById() instead.
        "::updateById::Organization::stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/stack/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.stack.link() instead.
        "::link::Organization::stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/stack/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.stack.unlink() instead.
        "::unlink::Organization::stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/stack/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.stack.exists() instead.
        "::exists::Organization::stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/stack/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Organization.stack() instead.
        "::get::Organization::stack": {
          isArray: true,
          url: urlBase + "/organizations/:id/stack",
          method: "GET"
        },

        // INTERNAL. Use Organization.stack.create() instead.
        "::create::Organization::stack": {
          url: urlBase + "/organizations/:id/stack",
          method: "POST"
        },

        // INTERNAL. Use Organization.stack.createMany() instead.
        "::createMany::Organization::stack": {
          isArray: true,
          url: urlBase + "/organizations/:id/stack",
          method: "POST"
        },

        // INTERNAL. Use Organization.stack.destroyAll() instead.
        "::delete::Organization::stack": {
          url: urlBase + "/organizations/:id/stack",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.stack.count() instead.
        "::count::Organization::stack": {
          url: urlBase + "/organizations/:id/stack/count",
          method: "GET"
        },

        // INTERNAL. Use UserModel.skills.findById() instead.
        "::findById::UserModel::skills": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/skills/:fk",
          method: "GET"
        },

        // INTERNAL. Use UserModel.skills.destroyById() instead.
        "::destroyById::UserModel::skills": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/skills/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.skills.updateById() instead.
        "::updateById::UserModel::skills": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/skills/:fk",
          method: "PUT"
        },

        // INTERNAL. Use UserModel.skills.link() instead.
        "::link::UserModel::skills": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/skills/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use UserModel.skills.unlink() instead.
        "::unlink::UserModel::skills": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/skills/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.skills.exists() instead.
        "::exists::UserModel::skills": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/skills/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use UserModel.skills() instead.
        "::get::UserModel::skills": {
          isArray: true,
          url: urlBase + "/users/:id/skills",
          method: "GET"
        },

        // INTERNAL. Use UserModel.skills.create() instead.
        "::create::UserModel::skills": {
          url: urlBase + "/users/:id/skills",
          method: "POST"
        },

        // INTERNAL. Use UserModel.skills.createMany() instead.
        "::createMany::UserModel::skills": {
          isArray: true,
          url: urlBase + "/users/:id/skills",
          method: "POST"
        },

        // INTERNAL. Use UserModel.skills.destroyAll() instead.
        "::delete::UserModel::skills": {
          url: urlBase + "/users/:id/skills",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.skills.count() instead.
        "::count::UserModel::skills": {
          url: urlBase + "/users/:id/skills/count",
          method: "GET"
        },

        // INTERNAL. Use Project.stack.findById() instead.
        "::findById::Project::stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/projects/:id/stack/:fk",
          method: "GET"
        },

        // INTERNAL. Use Project.stack.destroyById() instead.
        "::destroyById::Project::stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/projects/:id/stack/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.stack.updateById() instead.
        "::updateById::Project::stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/projects/:id/stack/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.stack.link() instead.
        "::link::Project::stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/projects/:id/stack/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.stack.unlink() instead.
        "::unlink::Project::stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/projects/:id/stack/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.stack.exists() instead.
        "::exists::Project::stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/projects/:id/stack/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Project.stack() instead.
        "::get::Project::stack": {
          isArray: true,
          url: urlBase + "/projects/:id/stack",
          method: "GET"
        },

        // INTERNAL. Use Project.stack.create() instead.
        "::create::Project::stack": {
          url: urlBase + "/projects/:id/stack",
          method: "POST"
        },

        // INTERNAL. Use Project.stack.createMany() instead.
        "::createMany::Project::stack": {
          isArray: true,
          url: urlBase + "/projects/:id/stack",
          method: "POST"
        },

        // INTERNAL. Use Project.stack.destroyAll() instead.
        "::delete::Project::stack": {
          url: urlBase + "/projects/:id/stack",
          method: "DELETE"
        },

        // INTERNAL. Use Project.stack.count() instead.
        "::count::Project::stack": {
          url: urlBase + "/projects/:id/stack/count",
          method: "GET"
        },

        // INTERNAL. Use CDN.technology() instead.
        "::get::CDN::technology": {
          url: urlBase + "/cdn/:id/technology",
          method: "GET"
        },

        // INTERNAL. Use Stack.technology() instead.
        "::get::Stack::technology": {
          url: urlBase + "/stacks/:id/technology",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Technology#updateOrCreate
         * @methodOf lbServices.Technology
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Technology#update
         * @methodOf lbServices.Technology
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Technology#destroyById
         * @methodOf lbServices.Technology
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Technology#removeById
         * @methodOf lbServices.Technology
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Technology#modelName
    * @propertyOf lbServices.Technology
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Technology`.
    */
    R.modelName = "Technology";

    /**
     * @ngdoc object
     * @name lbServices.Technology.images
     * @header lbServices.Technology.images
     * @object
     * @description
     *
     * The object `Technology.images` groups methods
     * manipulating `CDN` instances related to `Technology`.
     *
     * Call {@link lbServices.Technology#images Technology.images()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Technology#images
         * @methodOf lbServices.Technology
         *
         * @description
         *
         * Queries images of Technology.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::get::Technology::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Technology.images#count
         * @methodOf lbServices.Technology.images
         *
         * @description
         *
         * Counts images of Technology.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.images.count = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::count::Technology::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Technology.images#create
         * @methodOf lbServices.Technology.images
         *
         * @description
         *
         * Creates a new instance in images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.create = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::create::Technology::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Technology.images#createMany
         * @methodOf lbServices.Technology.images
         *
         * @description
         *
         * Creates a new instance in images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.createMany = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::createMany::Technology::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Technology.images#destroyAll
         * @methodOf lbServices.Technology.images
         *
         * @description
         *
         * Deletes all images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.images.destroyAll = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::delete::Technology::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Technology.images#destroyById
         * @methodOf lbServices.Technology.images
         *
         * @description
         *
         * Delete a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.images.destroyById = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::destroyById::Technology::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Technology.images#findById
         * @methodOf lbServices.Technology.images
         *
         * @description
         *
         * Find a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.findById = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::findById::Technology::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Technology.images#updateById
         * @methodOf lbServices.Technology.images
         *
         * @description
         *
         * Update a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.updateById = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::updateById::Technology::images"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Project
 * @header lbServices.Project
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Project` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Project",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/projects/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Project.organization() instead.
        "prototype$__get__organization": {
          url: urlBase + "/projects/:id/organization",
          method: "GET"
        },

        // INTERNAL. Use Project.images.findById() instead.
        "prototype$__findById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/projects/:id/images/:fk",
          method: "GET"
        },

        // INTERNAL. Use Project.images.destroyById() instead.
        "prototype$__destroyById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/projects/:id/images/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.images.updateById() instead.
        "prototype$__updateById__images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/projects/:id/images/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.stack.findById() instead.
        "prototype$__findById__stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/projects/:id/stack/:fk",
          method: "GET"
        },

        // INTERNAL. Use Project.stack.destroyById() instead.
        "prototype$__destroyById__stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/projects/:id/stack/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.stack.updateById() instead.
        "prototype$__updateById__stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/projects/:id/stack/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.stack.link() instead.
        "prototype$__link__stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/projects/:id/stack/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.stack.unlink() instead.
        "prototype$__unlink__stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/projects/:id/stack/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.stack.exists() instead.
        "prototype$__exists__stack": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/projects/:id/stack/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Project.images() instead.
        "prototype$__get__images": {
          isArray: true,
          url: urlBase + "/projects/:id/images",
          method: "GET"
        },

        // INTERNAL. Use Project.images.create() instead.
        "prototype$__create__images": {
          url: urlBase + "/projects/:id/images",
          method: "POST"
        },

        // INTERNAL. Use Project.images.destroyAll() instead.
        "prototype$__delete__images": {
          url: urlBase + "/projects/:id/images",
          method: "DELETE"
        },

        // INTERNAL. Use Project.images.count() instead.
        "prototype$__count__images": {
          url: urlBase + "/projects/:id/images/count",
          method: "GET"
        },

        // INTERNAL. Use Project.stack() instead.
        "prototype$__get__stack": {
          isArray: true,
          url: urlBase + "/projects/:id/stack",
          method: "GET"
        },

        // INTERNAL. Use Project.stack.create() instead.
        "prototype$__create__stack": {
          url: urlBase + "/projects/:id/stack",
          method: "POST"
        },

        // INTERNAL. Use Project.stack.destroyAll() instead.
        "prototype$__delete__stack": {
          url: urlBase + "/projects/:id/stack",
          method: "DELETE"
        },

        // INTERNAL. Use Project.stack.count() instead.
        "prototype$__count__stack": {
          url: urlBase + "/projects/:id/stack/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#create
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/projects",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#createMany
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/projects",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#upsert
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/projects",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#exists
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/projects/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#findById
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/projects/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#find
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/projects",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#findOne
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/projects/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#updateAll
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/projects/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#deleteById
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/projects/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#count
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/projects/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#prototype$updateAttributes
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/projects/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Project#createChangeStream
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/projects/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Organization.projects.findById() instead.
        "::findById::Organization::projects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/projects/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.projects.destroyById() instead.
        "::destroyById::Organization::projects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/projects/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.projects.updateById() instead.
        "::updateById::Organization::projects": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/projects/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.projects() instead.
        "::get::Organization::projects": {
          isArray: true,
          url: urlBase + "/organizations/:id/projects",
          method: "GET"
        },

        // INTERNAL. Use Organization.projects.create() instead.
        "::create::Organization::projects": {
          url: urlBase + "/organizations/:id/projects",
          method: "POST"
        },

        // INTERNAL. Use Organization.projects.createMany() instead.
        "::createMany::Organization::projects": {
          isArray: true,
          url: urlBase + "/organizations/:id/projects",
          method: "POST"
        },

        // INTERNAL. Use Organization.projects.destroyAll() instead.
        "::delete::Organization::projects": {
          url: urlBase + "/organizations/:id/projects",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.projects.count() instead.
        "::count::Organization::projects": {
          url: urlBase + "/organizations/:id/projects/count",
          method: "GET"
        },

        // INTERNAL. Use CDN.project() instead.
        "::get::CDN::project": {
          url: urlBase + "/cdn/:id/project",
          method: "GET"
        },

        // INTERNAL. Use Stack.project() instead.
        "::get::Stack::project": {
          url: urlBase + "/stacks/:id/project",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Project#updateOrCreate
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Project#update
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Project#destroyById
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Project#removeById
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Project#modelName
    * @propertyOf lbServices.Project
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Project`.
    */
    R.modelName = "Project";


        /**
         * @ngdoc method
         * @name lbServices.Project#organization
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Fetches belongsTo relation organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.organization = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::get::Project::organization"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Project.images
     * @header lbServices.Project.images
     * @object
     * @description
     *
     * The object `Project.images` groups methods
     * manipulating `CDN` instances related to `Project`.
     *
     * Call {@link lbServices.Project#images Project.images()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Project#images
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Queries images of Project.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::get::Project::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.images#count
         * @methodOf lbServices.Project.images
         *
         * @description
         *
         * Counts images of Project.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.images.count = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::count::Project::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.images#create
         * @methodOf lbServices.Project.images
         *
         * @description
         *
         * Creates a new instance in images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.create = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::create::Project::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.images#createMany
         * @methodOf lbServices.Project.images
         *
         * @description
         *
         * Creates a new instance in images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.createMany = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::createMany::Project::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.images#destroyAll
         * @methodOf lbServices.Project.images
         *
         * @description
         *
         * Deletes all images of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.images.destroyAll = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::delete::Project::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.images#destroyById
         * @methodOf lbServices.Project.images
         *
         * @description
         *
         * Delete a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.images.destroyById = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::destroyById::Project::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.images#findById
         * @methodOf lbServices.Project.images
         *
         * @description
         *
         * Find a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.findById = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::findById::Project::images"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.images#updateById
         * @methodOf lbServices.Project.images
         *
         * @description
         *
         * Update a related item by id for images.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for images
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R.images.updateById = function() {
          var TargetResource = $injector.get("CDN");
          var action = TargetResource["::updateById::Project::images"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Project.stack
     * @header lbServices.Project.stack
     * @object
     * @description
     *
     * The object `Project.stack` groups methods
     * manipulating `Technology` instances related to `Project`.
     *
     * Call {@link lbServices.Project#stack Project.stack()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Project#stack
         * @methodOf lbServices.Project
         *
         * @description
         *
         * Queries stack of Project.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.stack = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::get::Project::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.stack#count
         * @methodOf lbServices.Project.stack
         *
         * @description
         *
         * Counts stack of Project.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.stack.count = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::count::Project::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.stack#create
         * @methodOf lbServices.Project.stack
         *
         * @description
         *
         * Creates a new instance in stack of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.stack.create = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::create::Project::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.stack#createMany
         * @methodOf lbServices.Project.stack
         *
         * @description
         *
         * Creates a new instance in stack of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.stack.createMany = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::createMany::Project::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.stack#destroyAll
         * @methodOf lbServices.Project.stack
         *
         * @description
         *
         * Deletes all stack of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stack.destroyAll = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::delete::Project::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.stack#destroyById
         * @methodOf lbServices.Project.stack
         *
         * @description
         *
         * Delete a related item by id for stack.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stack
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stack.destroyById = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::destroyById::Project::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.stack#exists
         * @methodOf lbServices.Project.stack
         *
         * @description
         *
         * Check the existence of stack relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stack
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.stack.exists = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::exists::Project::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.stack#findById
         * @methodOf lbServices.Project.stack
         *
         * @description
         *
         * Find a related item by id for stack.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stack
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.stack.findById = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::findById::Project::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.stack#link
         * @methodOf lbServices.Project.stack
         *
         * @description
         *
         * Add a related item by id for stack.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stack
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.stack.link = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::link::Project::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.stack#unlink
         * @methodOf lbServices.Project.stack
         *
         * @description
         *
         * Remove the stack relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stack
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stack.unlink = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::unlink::Project::stack"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Project.stack#updateById
         * @methodOf lbServices.Project.stack
         *
         * @description
         *
         * Update a related item by id for stack.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stack
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.stack.updateById = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::updateById::Project::stack"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CDN
 * @header lbServices.CDN
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CDN` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CDN",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/cdn/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use CDN.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/cdn/:id/user",
          method: "GET"
        },

        // INTERNAL. Use CDN.organization() instead.
        "prototype$__get__organization": {
          url: urlBase + "/cdn/:id/organization",
          method: "GET"
        },

        // INTERNAL. Use CDN.post() instead.
        "prototype$__get__post": {
          url: urlBase + "/cdn/:id/post",
          method: "GET"
        },

        // INTERNAL. Use CDN.project() instead.
        "prototype$__get__project": {
          url: urlBase + "/cdn/:id/project",
          method: "GET"
        },

        // INTERNAL. Use CDN.technology() instead.
        "prototype$__get__technology": {
          url: urlBase + "/cdn/:id/technology",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CDN#create
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/cdn",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CDN#createMany
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/cdn",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CDN#upsert
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/cdn",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CDN#exists
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/cdn/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CDN#findById
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/cdn/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CDN#find
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/cdn",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CDN#findOne
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/cdn/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CDN#updateAll
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/cdn/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CDN#deleteById
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/cdn/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CDN#count
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/cdn/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CDN#prototype$updateAttributes
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/cdn/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CDN#createChangeStream
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/cdn/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Post.images.findById() instead.
        "::findById::Post::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/posts/:id/images/:fk",
          method: "GET"
        },

        // INTERNAL. Use Post.images.destroyById() instead.
        "::destroyById::Post::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/posts/:id/images/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.images.updateById() instead.
        "::updateById::Post::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/posts/:id/images/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.images() instead.
        "::get::Post::images": {
          isArray: true,
          url: urlBase + "/posts/:id/images",
          method: "GET"
        },

        // INTERNAL. Use Post.images.create() instead.
        "::create::Post::images": {
          url: urlBase + "/posts/:id/images",
          method: "POST"
        },

        // INTERNAL. Use Post.images.createMany() instead.
        "::createMany::Post::images": {
          isArray: true,
          url: urlBase + "/posts/:id/images",
          method: "POST"
        },

        // INTERNAL. Use Post.images.destroyAll() instead.
        "::delete::Post::images": {
          url: urlBase + "/posts/:id/images",
          method: "DELETE"
        },

        // INTERNAL. Use Post.images.count() instead.
        "::count::Post::images": {
          url: urlBase + "/posts/:id/images/count",
          method: "GET"
        },

        // INTERNAL. Use Organization.images.findById() instead.
        "::findById::Organization::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/images/:fk",
          method: "GET"
        },

        // INTERNAL. Use Organization.images.destroyById() instead.
        "::destroyById::Organization::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/images/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.images.updateById() instead.
        "::updateById::Organization::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/organizations/:id/images/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Organization.images() instead.
        "::get::Organization::images": {
          isArray: true,
          url: urlBase + "/organizations/:id/images",
          method: "GET"
        },

        // INTERNAL. Use Organization.images.create() instead.
        "::create::Organization::images": {
          url: urlBase + "/organizations/:id/images",
          method: "POST"
        },

        // INTERNAL. Use Organization.images.createMany() instead.
        "::createMany::Organization::images": {
          isArray: true,
          url: urlBase + "/organizations/:id/images",
          method: "POST"
        },

        // INTERNAL. Use Organization.images.destroyAll() instead.
        "::delete::Organization::images": {
          url: urlBase + "/organizations/:id/images",
          method: "DELETE"
        },

        // INTERNAL. Use Organization.images.count() instead.
        "::count::Organization::images": {
          url: urlBase + "/organizations/:id/images/count",
          method: "GET"
        },

        // INTERNAL. Use UserModel.images.findById() instead.
        "::findById::UserModel::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/images/:fk",
          method: "GET"
        },

        // INTERNAL. Use UserModel.images.destroyById() instead.
        "::destroyById::UserModel::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/images/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.images.updateById() instead.
        "::updateById::UserModel::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/images/:fk",
          method: "PUT"
        },

        // INTERNAL. Use UserModel.images() instead.
        "::get::UserModel::images": {
          isArray: true,
          url: urlBase + "/users/:id/images",
          method: "GET"
        },

        // INTERNAL. Use UserModel.images.create() instead.
        "::create::UserModel::images": {
          url: urlBase + "/users/:id/images",
          method: "POST"
        },

        // INTERNAL. Use UserModel.images.createMany() instead.
        "::createMany::UserModel::images": {
          isArray: true,
          url: urlBase + "/users/:id/images",
          method: "POST"
        },

        // INTERNAL. Use UserModel.images.destroyAll() instead.
        "::delete::UserModel::images": {
          url: urlBase + "/users/:id/images",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.images.count() instead.
        "::count::UserModel::images": {
          url: urlBase + "/users/:id/images/count",
          method: "GET"
        },

        // INTERNAL. Use Technology.images.findById() instead.
        "::findById::Technology::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/technologies/:id/images/:fk",
          method: "GET"
        },

        // INTERNAL. Use Technology.images.destroyById() instead.
        "::destroyById::Technology::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/technologies/:id/images/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Technology.images.updateById() instead.
        "::updateById::Technology::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/technologies/:id/images/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Technology.images() instead.
        "::get::Technology::images": {
          isArray: true,
          url: urlBase + "/technologies/:id/images",
          method: "GET"
        },

        // INTERNAL. Use Technology.images.create() instead.
        "::create::Technology::images": {
          url: urlBase + "/technologies/:id/images",
          method: "POST"
        },

        // INTERNAL. Use Technology.images.createMany() instead.
        "::createMany::Technology::images": {
          isArray: true,
          url: urlBase + "/technologies/:id/images",
          method: "POST"
        },

        // INTERNAL. Use Technology.images.destroyAll() instead.
        "::delete::Technology::images": {
          url: urlBase + "/technologies/:id/images",
          method: "DELETE"
        },

        // INTERNAL. Use Technology.images.count() instead.
        "::count::Technology::images": {
          url: urlBase + "/technologies/:id/images/count",
          method: "GET"
        },

        // INTERNAL. Use Project.images.findById() instead.
        "::findById::Project::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/projects/:id/images/:fk",
          method: "GET"
        },

        // INTERNAL. Use Project.images.destroyById() instead.
        "::destroyById::Project::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/projects/:id/images/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Project.images.updateById() instead.
        "::updateById::Project::images": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/projects/:id/images/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Project.images() instead.
        "::get::Project::images": {
          isArray: true,
          url: urlBase + "/projects/:id/images",
          method: "GET"
        },

        // INTERNAL. Use Project.images.create() instead.
        "::create::Project::images": {
          url: urlBase + "/projects/:id/images",
          method: "POST"
        },

        // INTERNAL. Use Project.images.createMany() instead.
        "::createMany::Project::images": {
          isArray: true,
          url: urlBase + "/projects/:id/images",
          method: "POST"
        },

        // INTERNAL. Use Project.images.destroyAll() instead.
        "::delete::Project::images": {
          url: urlBase + "/projects/:id/images",
          method: "DELETE"
        },

        // INTERNAL. Use Project.images.count() instead.
        "::count::Project::images": {
          url: urlBase + "/projects/:id/images/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CDN#updateOrCreate
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CDN` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CDN#update
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CDN#destroyById
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CDN#removeById
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CDN#modelName
    * @propertyOf lbServices.CDN
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CDN`.
    */
    R.modelName = "CDN";


        /**
         * @ngdoc method
         * @name lbServices.CDN#user
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::get::CDN::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CDN#organization
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Fetches belongsTo relation organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.organization = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::get::CDN::organization"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CDN#post
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Fetches belongsTo relation post.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.post = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::get::CDN::post"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CDN#project
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Fetches belongsTo relation project.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.project = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::get::CDN::project"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CDN#technology
         * @methodOf lbServices.CDN
         *
         * @description
         *
         * Fetches belongsTo relation technology.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.technology = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::get::CDN::technology"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Message
 * @header lbServices.Message
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Message` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Message",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/messages/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Message.sender() instead.
        "prototype$__get__sender": {
          url: urlBase + "/messages/:id/sender",
          method: "GET"
        },

        // INTERNAL. Use Message.receiver() instead.
        "prototype$__get__receiver": {
          url: urlBase + "/messages/:id/receiver",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#create
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/messages",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#createMany
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/messages",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#upsert
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/messages",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#exists
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/messages/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#findById
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/messages/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#find
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/messages",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#findOne
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/messages/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#updateAll
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/messages/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#deleteById
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/messages/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#count
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/messages/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#prototype$updateAttributes
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/messages/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#createChangeStream
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/messages/change-stream",
          method: "POST"
        },

        // INTERNAL. Use UserModel.notifications.findById() instead.
        "::findById::UserModel::notifications": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/notifications/:fk",
          method: "GET"
        },

        // INTERNAL. Use UserModel.notifications.destroyById() instead.
        "::destroyById::UserModel::notifications": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/notifications/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.notifications.updateById() instead.
        "::updateById::UserModel::notifications": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/users/:id/notifications/:fk",
          method: "PUT"
        },

        // INTERNAL. Use UserModel.notifications() instead.
        "::get::UserModel::notifications": {
          isArray: true,
          url: urlBase + "/users/:id/notifications",
          method: "GET"
        },

        // INTERNAL. Use UserModel.notifications.create() instead.
        "::create::UserModel::notifications": {
          url: urlBase + "/users/:id/notifications",
          method: "POST"
        },

        // INTERNAL. Use UserModel.notifications.createMany() instead.
        "::createMany::UserModel::notifications": {
          isArray: true,
          url: urlBase + "/users/:id/notifications",
          method: "POST"
        },

        // INTERNAL. Use UserModel.notifications.destroyAll() instead.
        "::delete::UserModel::notifications": {
          url: urlBase + "/users/:id/notifications",
          method: "DELETE"
        },

        // INTERNAL. Use UserModel.notifications.count() instead.
        "::count::UserModel::notifications": {
          url: urlBase + "/users/:id/notifications/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Message#updateOrCreate
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Message#update
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Message#destroyById
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Message#removeById
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Message#modelName
    * @propertyOf lbServices.Message
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Message`.
    */
    R.modelName = "Message";


        /**
         * @ngdoc method
         * @name lbServices.Message#sender
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Fetches belongsTo relation sender.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.sender = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::get::Message::sender"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Message#receiver
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Fetches belongsTo relation receiver.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.receiver = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::get::Message::receiver"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Owner
 * @header lbServices.Owner
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Owner` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Owner",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/owners/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Owner.userModel() instead.
        "prototype$__get__userModel": {
          url: urlBase + "/owners/:id/userModel",
          method: "GET"
        },

        // INTERNAL. Use Owner.organization() instead.
        "prototype$__get__organization": {
          url: urlBase + "/owners/:id/organization",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Owner#create
         * @methodOf lbServices.Owner
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Owner` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/owners",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Owner#createMany
         * @methodOf lbServices.Owner
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Owner` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/owners",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Owner#upsert
         * @methodOf lbServices.Owner
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Owner` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/owners",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Owner#exists
         * @methodOf lbServices.Owner
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/owners/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Owner#findById
         * @methodOf lbServices.Owner
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Owner` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/owners/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Owner#find
         * @methodOf lbServices.Owner
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Owner` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/owners",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Owner#findOne
         * @methodOf lbServices.Owner
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Owner` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/owners/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Owner#updateAll
         * @methodOf lbServices.Owner
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/owners/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Owner#deleteById
         * @methodOf lbServices.Owner
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/owners/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Owner#count
         * @methodOf lbServices.Owner
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/owners/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Owner#prototype$updateAttributes
         * @methodOf lbServices.Owner
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Owner` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/owners/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Owner#createChangeStream
         * @methodOf lbServices.Owner
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/owners/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Owner#updateOrCreate
         * @methodOf lbServices.Owner
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Owner` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Owner#update
         * @methodOf lbServices.Owner
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Owner#destroyById
         * @methodOf lbServices.Owner
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Owner#removeById
         * @methodOf lbServices.Owner
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Owner#modelName
    * @propertyOf lbServices.Owner
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Owner`.
    */
    R.modelName = "Owner";


        /**
         * @ngdoc method
         * @name lbServices.Owner#userModel
         * @methodOf lbServices.Owner
         *
         * @description
         *
         * Fetches belongsTo relation userModel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.userModel = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::get::Owner::userModel"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Owner#organization
         * @methodOf lbServices.Owner
         *
         * @description
         *
         * Fetches belongsTo relation organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.organization = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::get::Owner::organization"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Team
 * @header lbServices.Team
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Team` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Team",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/teams/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Team.userModel() instead.
        "prototype$__get__userModel": {
          url: urlBase + "/teams/:id/userModel",
          method: "GET"
        },

        // INTERNAL. Use Team.organization() instead.
        "prototype$__get__organization": {
          url: urlBase + "/teams/:id/organization",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#create
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/teams",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#createMany
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/teams",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#upsert
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/teams",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#exists
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/teams/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#findById
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/teams/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#find
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/teams",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#findOne
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/teams/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#updateAll
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/teams/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#deleteById
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/teams/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#count
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/teams/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#prototype$updateAttributes
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/teams/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#createChangeStream
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/teams/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Team#updateOrCreate
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Team#update
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Team#destroyById
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Team#removeById
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Team#modelName
    * @propertyOf lbServices.Team
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Team`.
    */
    R.modelName = "Team";


        /**
         * @ngdoc method
         * @name lbServices.Team#userModel
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Fetches belongsTo relation userModel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.userModel = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::get::Team::userModel"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Team#organization
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Fetches belongsTo relation organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.organization = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::get::Team::organization"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Stack
 * @header lbServices.Stack
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Stack` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Stack",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/stacks/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Stack.userModel() instead.
        "prototype$__get__userModel": {
          url: urlBase + "/stacks/:id/userModel",
          method: "GET"
        },

        // INTERNAL. Use Stack.organization() instead.
        "prototype$__get__organization": {
          url: urlBase + "/stacks/:id/organization",
          method: "GET"
        },

        // INTERNAL. Use Stack.project() instead.
        "prototype$__get__project": {
          url: urlBase + "/stacks/:id/project",
          method: "GET"
        },

        // INTERNAL. Use Stack.technology() instead.
        "prototype$__get__technology": {
          url: urlBase + "/stacks/:id/technology",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Stack#create
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Stack` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/stacks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Stack#createMany
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Stack` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/stacks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Stack#upsert
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Stack` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/stacks",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Stack#exists
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/stacks/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Stack#findById
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Stack` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/stacks/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Stack#find
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Stack` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/stacks",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Stack#findOne
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Stack` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/stacks/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Stack#updateAll
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/stacks/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Stack#deleteById
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/stacks/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Stack#count
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/stacks/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Stack#prototype$updateAttributes
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Stack` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/stacks/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Stack#createChangeStream
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/stacks/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Stack#updateOrCreate
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Stack` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Stack#update
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Stack#destroyById
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Stack#removeById
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Stack#modelName
    * @propertyOf lbServices.Stack
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Stack`.
    */
    R.modelName = "Stack";


        /**
         * @ngdoc method
         * @name lbServices.Stack#userModel
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Fetches belongsTo relation userModel.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserModel` object.)
         * </em>
         */
        R.userModel = function() {
          var TargetResource = $injector.get("UserModel");
          var action = TargetResource["::get::Stack::userModel"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Stack#organization
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Fetches belongsTo relation organization.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Organization` object.)
         * </em>
         */
        R.organization = function() {
          var TargetResource = $injector.get("Organization");
          var action = TargetResource["::get::Stack::organization"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Stack#project
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Fetches belongsTo relation project.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Project` object.)
         * </em>
         */
        R.project = function() {
          var TargetResource = $injector.get("Project");
          var action = TargetResource["::get::Stack::project"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Stack#technology
         * @methodOf lbServices.Stack
         *
         * @description
         *
         * Fetches belongsTo relation technology.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Technology` object.)
         * </em>
         */
        R.technology = function() {
          var TargetResource = $injector.get("Technology");
          var action = TargetResource["::get::Stack::technology"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
