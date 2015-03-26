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
            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $http({
              method: 'POST',
              url: '//acreations-sendmail.herokuapp.com/send_mail',
              data: $.param({
                name: form.name.$modelValue,
                email: form.mail.$modelValue,
                subject: form.subject.$modelValue,
                message: form.message.$modelValue
                //'g-recaptcha-response': scope.token}),
              }),
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
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