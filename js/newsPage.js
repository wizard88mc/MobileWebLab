// JavaScript Document

$('document').ready(function() {
	
	$.ajax({
		async: true,
		type: 'GET',
		dataType: 'xml',
		url: 'xml_files/news.xml', 
		success: readXML
	});
});

function readXML(xml) {
	
	$(xml).find('News').each(function() {
		
		var title = $(this).find('Title').text();
		var author = $(this).find('Author').text();
		var text = $(this).find('Text').text();
		var startDateString = $(this).find('StartDate').text();
		var time = $(this).find('Time').text().substr(0, 5);
		var endDateString = $(this).find('EndDate').text();
		
		var startDate = new Date(startDateString.substr(0,4),startDateString.substr(5,2) - 1,startDateString.substr(8,2));
		var endDate = new Date(endDateString.substr(0,4),endDateString.substr(5,2) - 1,endDateString.substr(8,2));
		
		var article = $('<article>').text(text);
		$('<h1>').text(title).appendTo($('<header>').prependTo(article));
		$('<h2>').text('Writter by ' + author + ' on ' + startDateString + ' at ' + time)
			.appendTo(article.children('header'));
		
		var now = new Date();
		
		if (startDate <= now && endDate >= now) {
			
			article.appendTo('#activeNews');
		}
		else if (startDate <= now && endDate <= now) {
			
			article.appendTo('#expiredNews');
		}
	});
}