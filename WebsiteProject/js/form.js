console.log("JS running");

$(document).ready(function() {
  $('.submit').click(function(event) {
    event.preventDefault();
    console.log("clicked");

    var email = $('.email').val();
    var name = $('.name').val();
    var statusEln = $('.status')
    statusEln.empty();

    var valName = false;
    var valEmail = false;

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      statusEln.append('<div>Email is valid</div>');
      valName = true;
    } else {
      statusEln.append('<div>Email is not valid</div>');
    }

    if(name.length >= 2){
      statusEln.append('<div>Name is valid</div>');
      valEmail = true;
    }else{
      statusEln.append('<div>Name is not valid</div>');
    }
  })
})
