define([
  'angular',
  'sendmail/module',
  ], function (ng) {
  'use strict';

  return ng.module("acreations", ['acreations.sendmail']);
});