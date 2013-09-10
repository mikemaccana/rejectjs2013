define(function(require){
  var agave = require('agave'),
    Ractive = require('ractive'),
    html = require('text!extensiontemplate.mustache')

  agave.enable('rj');

  var mockObject = {
    foo: 'bar',
    baz: {
      bam:'boo',
      zar:{
        zog:'something useful'
      }
    }
  }

  var ractive = new Ractive({
    el: '.extension',
    template: html,
    data: {
      result: 'None',
      size: 'unknown',
      keys: null
    }
  });

  var keys = [];
  for ( var key in mockObject ) {
    keys.push(key)
  }

  ractive.set( 'result', mockObject.rjgetPath('/baz/zar/zog') );
  ractive.set( 'count', mockObject.rjgetSize() );
  ractive.set( 'keys', keys );
})


