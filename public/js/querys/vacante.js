$(document).ready(function() {
  var intputElements = document.getElementsByTagName("SELECT");

  for (var i = 0; i < intputElements.length; i++) {
    intputElements[i].oninvalid = function(e) {
      e.target.setCustomValidity("Elige una Categoría");
      if (!e.target.validity.valid) {
        if (e.target.name == "categoria") {
          e.target.setCustomValidity("Debe seleccionar un opcion valida!");
        } else {
          e.target.setCustomValidity("The field 'Password' cannot be left blank");
        }
      }
    };
  }
});