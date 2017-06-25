$(window).load(function() {
	$("html, body").animate({scrollTop: "0px"});;
	$("html, body").animate({
		scrollTop: $(document).height()
	}, 500000, "linear" );
});
$(document).ready(function() {
	setTimeout(function() {
		window.location.href = '../index.html'
	}, 240000);
	});
