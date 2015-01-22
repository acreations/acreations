require.config({

  baseUrl: "/static/js",

  paths: {
    "bootstrap": "//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min",
    "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min",
  },

  shim: {
    'bootstrap': {
      deps: ["jquery"]
    }
  }
});

require(['bootstrap'], function () {
});