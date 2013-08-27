

var users = ['Apparat', 'Boy', 'Kraftklub']
for (var i = 0; i < users.length; i++) {
  var user = users[i],
    button = document.createElement('button');
  button.addEventListener('click', function(event){
    alert(user);
  });
  button.appendChild(document.createTextNode(user));
  document.body.appendChild(button);
}



var users = ['Apparat', 'Boy', 'Kraftklub']
for (var i = 0; i < users.length; i++) {
  var user = users[i],
    button = document.createElement('button');
  (function(user){
    button.addEventListener('click', function(event){
      alert(user);
    });
  })(user);
  button.appendChild(document.createTextNode(user));
  document.body.appendChild(button);
}




['Apparat', 'Boy', 'Kraftklub'].forEach(function(user){
  var button = document.createElement('button');
  button.appendChild(document.createTextNode(user));
  button.addEventListener('click', function(event){
    alert(user);
  });
  document.body.appendChild(button);
})

