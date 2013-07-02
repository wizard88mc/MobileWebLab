
$('document').ready(function(e) {
	
	$('dd.infoPeople').css('display', 'none');
    
	$('.showInfo').on('click', function() {
		
		$(this).parent('dt').next('dd').fadeIn();
		$(this).fadeOut();
	});
	
	$('.hideInfo').on('click', function() {
		
		$(this).parent().fadeOut();
		$(this).parent().prev('dt').children('span').fadeIn();
	});
});