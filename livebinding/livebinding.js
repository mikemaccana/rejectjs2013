define(function(require){
  var Ractive = require('ractive');
  var template = require('text!template.mustache')

  var testData = {
    element: '.demo',
    _user: 'Dave',
    messages: { total: 11, unread: 4 }
  }

  Object.defineProperty(testData, "user", {
    get : function(){ return testData._user; },
    set : function(newValue){
      testData._user = newValue;
      binding.set('user', newValue)
    },
    enumerable : true,
    configurable : true
  });

  var binding = new Ractive({
    el: testData.element,
    template: template,
    data: testData
  });

  debugger;
})