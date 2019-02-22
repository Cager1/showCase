$(document).ready(function() {

	// Prevents multiple openings
	var counter = 0;

	// setWidth = Set width of element which will be shown after event
	// setHeight = Set height of element which will be shown after event
	// classRemoval = remove classes which can disturb width/height (Bootstrap classes exc.)
	// speed = animation speed
	$.fn.showCase = function(setWidth, setHeight, classRemoval, speed) {

		// clones item
		var clone = $(this).clone().prependTo($(this).parent()).addClass("center display-to-none").removeClass(classRemoval).removeAttr("id");
		// makes sure no other item is displayed
		if (counter === 0) {

			// Element growing animation
			clone.removeClass("display-to-none");
			clone.css({
				width: "0",
				height: "0",
				zIndex: "1000"
			});
			clone.find("*").removeClass("display-to-none");
			close = clone.prepend("<div class='close'>X</div");
			clone.animate({
				width: setWidth, // Set width of element
				height: setHeight, // Set height of element
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