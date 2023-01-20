$(document).ready(function(){
    // Get the modal
    var modal = $("#modal");
  
    // Get the button that opens the modal
    var btn = $("#modal-button");
  
    // Get the <span> element that closes the modal
    var span = $(".close-button");
  
    // When the user clicks the button, open the modal
    btn.click(function() {
      modal.show();
    });
  
    // When the user clicks on <span> (x), close the modal
    span.click(function() {
      modal.hide();
    });
  
    // When the user clicks anywhere outside of the modal, close it
    $(window).click(function(event) {
      if (event.target == modal) {
        modal.hide();
      }
    });
  });
  