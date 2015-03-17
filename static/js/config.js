require.config({

  baseUrl: "/static/js",

  paths: {
    "angular": "//ajax.googleapis.com/ajax/libs/angularjs/1.3.10/angular.min",
    "bootstrap": "//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min",
    "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min",
    "recaptcha": "//www.google.com/recaptcha/api",
    "tween-max": "//cdnjs.cloudflare.com/ajax/libs/gsap/1.15.1/TweenMax.min",
  },

  shim: {
    'angular': {
      exports: "angular",
      deps: ['bootstrap']
    },
    'bootstrap': {
      deps: ["jquery"]
    }
  }
});

require(['angular', 'app'], function (ng, app) {
  ng.bootstrap(document, [app.name]);
});