$(document).ready(function() {

  // Prevents multiple openings
  var counter = 0;

  // speed = animation speed
  $.fn.showCase = function(speed) {

    // clones item
    // upon cloning removes all classes so it will not interfere with final positioning - Use all positioning CSS on classes and styling on ID's
    var clone = $(this).clone().prependTo($(this).parent()).removeAttr("class").addClass("center display-to-none");
    // makes sure no other element is displayed
    if (counter === 0) {

      // Element growing animation
      clone.removeClass("display-to-none");
      clone.css({
        width: "0",
        height: "0",
        zIndex: "1000"
      });

      // shows all hidden elements inside parent element. 
      clone.find("*").removeClass("display-to-none");
      close = clone.prepend("<div class='close'>X</div");
      clone.animate({
        width: $(this).parent().width() - 50, // Set width of element based on width of parent element

        height: $(this).parent().height() - 50, // Set height of elementbased on height of parent element

      }, speed);
      counter = 1;
    }
    // On X click close cloned element and remove it
    $(".close").click(function() {
      clone.animate({
        width: "0",
        height: "0",
      }, speed);
      setTimeout(function() {
        clone.remove();
      }, speed);
      counter = 0;
    });
    return this;
  };
});
