    $('#direitos, a[href^="#"]').on('click', function(e) {
    	e.preventDefault();
    	var id = $(this).attr('href'),
    			targetOffset = $(id).offset().top;

    	$('html, body').animate({
    		scrollTop: targetOffset - 10
    	}, 3000);
    });


    $('#indice, a[href^="#"]').on('click', function(e) {
    	e.preventDefault();
    	var id = $(this).attr('href'),
    			targetOffset = $(id).offset().top;
    
    	$('html, body').animate({
    		scrollTop: targetOffset - 10
    	}, 2000);
    });
