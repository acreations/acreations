define([], function () {
  'use strict';

  return ['$window', function (window) {
    return {
      restrict: 'C',
      scope: {
        callback: '&onUpdateToken'
      },
      link: function (scope, element, attrs) {

        if (attrs.sitekey) {
          element.addClass("g-recaptcha");

          element.attr("data-callback", "successCallback");
          element.attr("data-expired-callback", "expiredCallback");

          window.successCallback = function (token) {
            scope.$apply(function() {
              scope.callback({
                token: token
              });
            });
          };

          window.expiredCallback = function () {
            scope.callback({
              token: ''
            })
          };

          // Trigger recaptcha
          require(['recaptcha']);

        } else {
          console.log('Attribute sitekey does not exist, must be provided');
        }
      }
    };
  }];
});