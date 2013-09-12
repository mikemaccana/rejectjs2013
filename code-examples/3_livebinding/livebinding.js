define(function(require){
  "use strict"

  var Ractive = require('ractive');
  var livebind = function(object, binding, properties){
    properties.forEach(function(property){
      var hiddenProperty = '_'+property
      Object.defineProperty(object, hiddenProperty, {
        enumerable : false,
        writable: true,
        value: object[property]
      })
      Object.defineProperty(object, property, {
        get : function(){
          return object[hiddenProperty];
        },
        set : function(newValue){
          console.log('Setting', property, 'to', newValue)
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
    user: 'Hello friend',
    messages: { total: 121, unread: 28 }
  }
  var demoBinding = new Ractive({
    el: '.demo',
    template: template,
    data: testData
  });
  livebind(testData, demoBinding, ['user', 'messages'])

  var arraytemplate = require('text!arraytemplate.mustache')
  var demoArray = ['Drink Club Mate', 'Meet friendly strangers']
  var arrayDemoBinding = new Ractive({
    el: '.arraydemo',
    template: arraytemplate,
    data: { things: demoArray }
  });
  livebind(demoArray, arrayDemoBinding, [0, 1])

  setTimeout(function(){
    debugger;

    testData.user = 'Volle Kanne, Hoschi'
    testData.messages = { total: 11, unread: 8 }

    demoArray[0] = 'Drink Vodka Mate'
    demoArray[1] = 'Meet friendly strangers in the dark room at Berghain'
    demoArray.push('Be cool and minimal. And minimalcool.')
  }, 5000)


})