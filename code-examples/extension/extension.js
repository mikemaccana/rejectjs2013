define(function(require){
  var agave = require('agave')

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

  console.log(mockObject.rjgetPath('/baz/zar/zog'))
  for ( var key in mockObject ) { console.log(key)}

    debugger
})


