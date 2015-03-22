define(['jquery'], function ($) {
  'use strict';

  return ['$http', function ($http) {
    return {
      restrict: 'C',
      link: function (scope, element) {

        scope.updateToken = function(token) {
          scope.token = token;
        };

        scope.send = function(form) {
          scope.hasErrors = !form.$valid && !scope.token;

          if (!scope.hasErrors) {
            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $http.post('http://acreations-sendmail.herokuapp.com/send_mail', {
                'name': form.name.$modelValue,
                'email': form.mail.$modelValue,
                'subject': form.subject.$modelValue,
                'message': form.message.$modelValue,
                'recaptcha_response_field': scope.token
              }).
              success(function(data, status, headers, config) {
                switch (data.message) {
                  case 'success':
                    scope.success = true;
                    break;
                  default:
                    scope.error = true;
                }
              }).
              error(function(data, status, headers, config) {
                scope.error = true;
              });
          }
        }
      }
    };
  }];
});