/**
 * Module for handle sendmail
 */
define(['angular', 'sendmail/sendmail-directive', 'sendmail/recaptcha-directive'], function (ng, sendmail, recaptcha) {
  'use strict';

  var module = ng.module("acreations.sendmail", ['acreations']);

  return module
    .config(['$httpProvider', function($httpProvider) {
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }])
    .directive('sendmail', sendmail)
    .directive('recaptcha', recaptcha)
});