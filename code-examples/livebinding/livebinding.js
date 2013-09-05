define(function(require){
  "use strict"

  var Ractive = require('ractive');
  var livebind = function(object, binding, properties){
    properties.forEach(function(property){
      var hiddenProperty = '_'+property
      object[hiddenProperty] = object[property]
      console.log('Set', hiddenProperty, 'to', object[property])
      Object.defineProperty(object, property, {
        get : function(){
          return object[hiddenProperty];
        },
        set : function(newValue){
          object[hiddenProperty] = newValue;
          binding.set(property, newValue);
        },
        enumerable : true,
        configurable : true
      })
    })
  }



  var template = require('text!template.mustache')
  var testData = {
    user: 'Joe',
    messages: { total: 121, unread: 28 }
  }
  var demoBinding = new Ractive({
    el: '.demo',
    template: template,
    data: testData
  });
  livebind(testData, demoBinding, ['user', 'messages'])

  var arraytemplate = require('text!arraytemplate.mustache')
  var demoArray = ['one', 'two']
  var arrayDemoBinding = new Ractive({
    el: '.arraydemo',
    template: arraytemplate,
    data: { things: demoArray }
  });
  livebind(demoArray, arrayDemoBinding, [0])

  debugger;

  testData.user = 'steve'
  testData.messages = { total: 11, unread: 8 }

  demoArray[0] = 'newonenew'
  demoArray.push('wooo')

})