define(function(require){
  var message = document.querySelector('.message')
  var bands = ['Apparat', 'Boy', 'Kraftklub'];
  for (var i = 0; i < bands.length; i++) {
    var band = bands[i],
      button = document.createElement('button')
      button.classList.add(band);
    (function(band){
      button.addEventListener('click', function(){
        message.textContent = "Let's go see "+band;
        message.classList.add('new');
        setTimeout(function(){
          message.classList.remove('new')
        }, 2 * 1000)
      });
    })(band);
    document.body.appendChild(button);
  }
})
