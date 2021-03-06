//Check off specific todos by clicking
$("ul").on("click", "li", function() {
	//if li is gray turn it black
	// else turn it gray

	$(this).toggleClass("completed");

});

//Click on X to delete
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation(); //To keep the effect only on this, not on parents
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) { //13 is code for enter key
		//grabbing new todo text from input
		let todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});