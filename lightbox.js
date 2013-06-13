		function lightBox(w, title, description, content) {

			innerdata = '<div class="hoverboxtitle">' + title + '</div><div class="hoverboxtext">' + description + '</div><div class="spacer"><div class="badgebox">' + content + '</div></div>';

			$('#lightbox, #lightboxcore').remove(); //Destroy old lightboxes. There can only be one.

			$('body').prepend('<div id="lightboxcore">'+innerdata+'</div>'); //Append inner box
			h = $('#lightboxcore').height(); //Get Height of box used for centering, height is set dynamically.
			$('#lightboxcore').css({'width': w}); //Set width of lightboxcore

			$('html').prepend('<div id="lightbox"></div>').fadeIn(400); //Add outer box
			$('#lightbox').css({'height': $(document).height(), 'width': $(document).width()}); //Set size of backdrop
			$("#lightbox").click(function() {
				closeLightbox(); //Bind close event to backdrop
			});

			//Center the box on page
			$('#lightboxcore').css("top", (($(window).height() - $('#lightboxcore').outerHeight()) / 2) + $(window).scrollTop() + "px");
			$('#lightboxcore').css("left", (($(window).width() - $('#lightboxcore').outerWidth()) / 2) + $(window).scrollLeft() + "px");
			
			$('#lightboxcore').hide().fadeIn(500); //Fade in core
			enableAwesomeToolTips(); //Enable Tool tips for visible badges
		}
		function closeLightbox() {
			$('#lightbox').fadeOut(500);
			$('#lightboxcore').fadeOut(300);
			$('#hoverbox').fadeOut(300); //Hover boxes also get killed No lingering boxes.
			disableAwesomeToolTips(); //Turns off tool tips on lightbox close
		}
