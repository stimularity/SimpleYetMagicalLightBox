	//Max's custom animated lightbox plugin. Quite magical.
	function lightBox(w, h, content) {
		$('#lightbox, #lightboxcore').remove(); //Destroy old lightboxes. There can only be one.
		$('body').prepend('<div id="lightboxcore">'+content+'</div>'); //Append inner box

		//Default values if none are set.
		marginsize = 200;
		width = $(window).width() - marginsize; 
		height = $(window).height() - marginsize;

		if(w != 0 && h == 0){ //Width is set, but not height, get height from content.	
			height = $('#lightboxcore').height(); //Get Height of box used for centering, height is set dynamically.
			width = w;
		}
		if(w == 0 && h != 0){ //Width is set, use default height. 
			height = h;
		}
		if(w != 0 && h != 0){ //Use user inputs. 
			width = w;
			height = h;
		}
		
		$('#lightboxcore').css({'width': width, 'height':height}); //Set width of lightboxcore

		//Add backdrop to DOm
		$('html').prepend('<div id="lightbox"></div>').fadeIn(400); 
		$('#lightbox').css({'height': $(document).height(), 'width': $(document).width()}); //Set proper size
		$("#lightbox").click(function() {
			closeLightbox(); //Bind close event to backdrop
		});
		//Center the core on page
		$('#lightboxcore').css("top", (($(window).height() - $('#lightboxcore').outerHeight()) / 2) + $(window).scrollTop() + "px");
		$('#lightboxcore').css("left", (($(window).width() - $('#lightboxcore').outerWidth()) / 2) + $(window).scrollLeft() + "px");
		//Make it visible. 
		$('#lightboxcore').hide().fadeIn(500);
	}
	function closeLightbox(){
		$('#lightbox').fadeOut(500);
		$('#lightboxcore').fadeOut(300);
	}
