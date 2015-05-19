
$(document).ready(function(){

	function showDropdown (e){
	 	var dropdown = $("ul.sub-menu");
		$(this).find( dropdown ).fadeToggle("fast");
	 }

	$("#menu-container nav > ul > li").hover(showDropdown);




	function clickResaltado (e){
		e.preventDefault();
		$('li.current-menu-item').removeClass('current-menu-item');
	 	$(this).parent().addClass('current-menu-item');
	}

	$('#menu-container nav > ul > li > a').click(clickResaltado);




	



	var hamburguesa = $('#mobile-button')
	var menu = $('#menu-container')
	var cruz = $('#mobile-close')

	hamburguesa.click(function(e) {
		e.preventDefault();
		menu.show();
		hamburguesa.hide();
		cruz.show();
	});

	cruz.click(function(e) {
		e.preventDefault();
		cruz.hide();
		menu.hide();
		hamburguesa.show();	
	});


	$(window).resize(function(){

		if ($(window).width() <= 990) {
			if(!cruz.is(':visible')) {
				hamburguesa.show();
			}
		}else{
			cruz.hide();
			hamburguesa.hide();
		};
	});

});

