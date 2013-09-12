define(function(require){
  var agave = require('agave'),
    Ractive = require('ractive'),
    html = require('text!extensiontemplate.mustache')

  agave.enable('rj');

  var mockObject = {
    some: 'times',
    REST: 'JSON',
    APIs: 'have a',
    really: {
      contrived: 'and',
      long:{
        paths:'something useful',
        is:{
          there:'but',
          finding:'it',
          can:'totally'
        },
      }
    },
    suck: ['bummer', 'dude']
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
  ractive.set( 'result', mockObject.rjgetPath('/really/long/paths') );
  ractive.set( 'count', mockObject.rjgetSize() );
  var keys = [];
  for ( var key in mockObject ) {
    keys.push(key)
  }
  ractive.set( 'keys', keys );

  window.setTimeout(function(){
    window.document.querySelector('.results').classList.add('shown')
  }, 5 * 1000)


})


