require.config({
  paths: {
    jquery: "../../bower_components/jquery/jquery",
    underscore: "../../bower_components/underscore-amd/underscore",
    backbone: "../../bower_components/backbone-amd/backbone",
    "backbone.babysitter": "../../bower_components/backbone.babysitter/lib/amd/backbone.babysitter",
    "backbone.wreqr": "../../bower_components/backbone.wreqr/lib/amd/backbone.wreqr",
    "backbone.syphon": "../../bower_components/backbone.syphon/lib/amd/backbone.syphon",
    marionette: "../../bower_components/marionette/lib/core/amd/backbone.marionette",
    moment: "../../bower_components/moment/moment",
    globalize: "../../bower_components/globalize/lib/globalize",
    text: "../../bower_components/requirejs-text/text",
    d3: "../../bower_components/d3/d3",
    swf: "../../bower_components/swfobject-amd/swfobject",
    spin: "../../bower_components/spin.js/spin",
    jqueryspin: "../../bower_components/spin.js/jquery.spin",
    bootstrap: "../../bower_components/bootstrap/dist/js/bootstrap"
  },
  shim: {
    bootstrap: ["jquery"]
  }
});

require(["config/load"], function(_config, app) {
  app.start();
  return console.log('awesome');
});