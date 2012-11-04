$(document).ready(function(){

	var slideshow = $('.carousel-inner');

	var slides = [];

	$("#gallery img").each(function(){

		// Create slideshow carousel images
		var img = $(this);
		var anchor = img.parent('a');
		var lrgImg = img.clone().attr('src', anchor.attr('href'));
		var slide = $('<div>').addClass('item').append(lrgImg);

		slides.push(slide);

		// Show modal on click
		anchor.on('click', function(){
			$('.carousel-inner .item').removeClass('active');
			slide.addClass('active');
			$('#modal').modal('show');
			return false;
		});
	});

	slideshow.append(slides);

});
