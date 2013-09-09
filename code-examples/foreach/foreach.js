define(function(require){
  var bands = ['Apparat', 'Boy', 'Kraftklub'];
  for (var i = 0; i < bands.length; i++) {
    var band = bands[i],
      button = document.createElement('button')
      button.classList.add(band);
      button.appendChild(document.createTextNode(band));
    (function(band){
      button.addEventListener('click', function(){
        alert(band);
      });
    })(band);
    document.body.appendChild(button);
  }
})
