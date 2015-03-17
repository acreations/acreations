define(['jquery'], function ($) {
  'use strict';

  return ['$http', function ($http) {
    return {
      restrict: 'C',
      link: function (scope, element) {

        scope.updateToken = function(token) {
          scope.token = token;
        };

        scope.send = function() {
          scope.hasErrors = !scope.sendmail.$valid && scope.token;

          if (!scope.hasErrors) {
            $http.post('http://acreations-sendmail.herokuapp.com/send_mail', {
                name: 'Aaron Wong',
                email: 'aaron.wong@jamsprint.com',
                subject: 'Ping',
                message: 'Pong',
                recaptcha_response_field: 'afafas' }).
              success(function(data, status, headers, config) {
                console.log(data);
              }).
              error(function(data, status, headers, config) {
                console.log(data);
              });
          }
        }
      }
    };
  }];
});