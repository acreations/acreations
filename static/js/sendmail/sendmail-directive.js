define(['jquery'], function ($) {
  'use strict';

  return ['$http', function ($http) {
    return {
      restrict: 'C',
      link: function (scope) {

        scope.updateToken = function (token) {
          scope.token = token;
        };

        scope.send = function (form) {
          scope.hasErrors = !form.$valid && !scope.token;

          if (!scope.hasErrors) {
            //$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

            var data = $.param(
              JSON.stringify({
                name: form.name.$modelValue,
                _replyto: form.mail.$modelValue,
                _subject: '[WEBBEN] ' + form.subject.$modelValue,
                message: form.message.$modelValue
                //'g-recaptcha-response': scope.token
              })
            );

            $http.post('//formspree.io/webben@aaronwong.se', data).
              success(function () {
                scope.success = true;
              }).
              error(function () {
                scope.error = true;
              });
          }
        };
      }
    };
  }];
});