/* global $ */ 'use strict';

var Application = window.Application = (function() {
  var mods = require('./controllers/mods');
  return {
    run: function() {
      console.log('running...');
      mods.create();
    },
    controllers: {
      mods: require('./controllers/mods')
    }
  };
})();

$(function() {
  Application.run();
});
