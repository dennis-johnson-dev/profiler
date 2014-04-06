// Validate.js
// Validation for upload form that checks for empty items

$('form').on('submit', function(e) {
  // Format email so it can be correctly hashed
  var email = $('#email').val();
  email = $.trim(email).toLowerCase().toString(); 

  // Reset input value to be formatted string
  $('#email').val(email); 

  // Purge old error msgs
  if ($('.error').length == 1) {
    $('.error').remove(); 
  }

  // Check if empty or is of the wrong file extension
  if (email == "" || isEmail(email)) {
    e.preventDefault();
    addErrorToDOM('*Please enter a valid e-mail address');
  } 

  if ($('#file').length == 0) {
    var file = $('#file').val().toString();
    var fileCodes = /.jpg|.JPG|.png|.jpeg|.JPEG/; 
    if (file === "" || !fileCodes.test(file)) {
      e.preventDefault();
      addErrorToDOM('*Please enter a valid image file');
    }
  }

});

function isEmail(email) { 
  var regex = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
  return !regex.test(email);
}

function addErrorToDOM(error) {
  if ($('.error').length == 0) {  
    $('form').prepend("<p class='error'>" + error + "</p>") 
  }
}
