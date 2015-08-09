'use strict';

angular.module('starter.services', ['ngResource'])

  .factory('testService', ['$resource', function($resource) {
    return {
      logOut: function(gtoken) {
        var url = 'https://icamping-prod.appspot.com/_ah/api/icamping_guest/v2/showallstores_lite';
        return $resource(url).get().$promise;
      },
    }
  }])


  