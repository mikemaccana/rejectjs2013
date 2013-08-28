define(function(require){
  var Ractive = require('ractive');
  var template = require('text!template.mustache')

  var testData = {
    _user: 'Dave',
    _messages: { total: 11, unread: 4 }
  }

  var demoBinding = new Ractive({
    el: '.demo',
    template: template,
    data: testData
  });

  var livebind = function(object, binding, properties){
    properties.forEach(function(property){
      var hiddenProperty = '_'+property
      Object.defineProperty(object, property, {
        get : function(){ return testData[hiddenProperty]; },
        set : function(newValue){
          testData[hiddenProperty] = newValue;
          binding.set(property, newValue)
        },
        enumerable : true,
        configurable : true
      });
    })
  }

  livebind(testData, demoBinding, ['user', 'messages'])

  // testData.user = 'steve'
  // testData.messages = { total: 11, unread: 8 }
  debugger;
})