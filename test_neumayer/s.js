$(window).load(function() {
	$("html, body").animate({scrollTop: "0px"});
	$("html, body").animate({
		scrollTop: "3000px" // height of header + interlude check this on the big screen. (check in the "inspect element thingy") and add both the height of the header and interlude + the margins on the bottom + top together.
	}, 60000, "linear"); // this the time and the speed to do the distance above. but it needs finetuning on the big screen.
	$("html, body").animate({
		scrollTop: $(document).height()
	}, 500000, "linear");
});
$(document).ready(function() {
	setTimeout(function() {
		window.location.href = '../index.html'
	}, 240000);
});
