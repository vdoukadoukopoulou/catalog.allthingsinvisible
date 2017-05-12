$(document).ready(function() {
	var a = [
		// Testing 9/5/2017
		// [day of month, hour, min, sec]
	  [10, 13, 45, 0],
	  [10, 20, 22, 0],
		[11, 23, 07, 0],

		// Friday 12/5/2017
		[12, 12, 02, 0],
		[12, 18, 30, 0],
		[12, 20, 00, 0],

		// Saturday 13/5/2017
		[13, 13, 30, 0],
		[13, 16, 30, 0],
		[13, 18, 20, 0],

		// Sunday 14/5/2017
		[14, 13, 45, 0],
		[14, 15, 30, 0],
		[14, 17, 30, 0],
	];

	currentTime();
	nextShow(a);
	removeIfTimesAreEmpty();

	// Testing 9/5/2017
	refreshAt(a[0][0], a[0][1], a[0][2], a[0][3]);
	refreshAt(a[1][0], a[1][1], a[1][2], a[1][3]);
	refreshAt(a[2][0], a[2][1], a[2][2], a[2][3]);

	// Friday 12/5/2017
	refreshAt(a[3][0], a[3][1], a[3][2], a[3][3]);
	refreshAt(a[4][0], a[4][1], a[4][2], a[4][3]);
	refreshAt(a[5][0], a[5][1], a[5][2], a[5][3]);

	// Saturday 13/5/2017
	refreshAt(a[6][0], a[6][1], a[6][2], a[6][3]);
	refreshAt(a[7][0], a[7][1], a[7][2], a[7][3]);
	refreshAt(a[8][0], a[8][1], a[8][2], a[8][3]);

	// Sunday 14/5/2017
	refreshAt(a[9][0], a[9][1], a[9][2], a[9][3]);
	refreshAt(a[10][0], a[10][1], a[10][2], a[10][3]);
	refreshAt(a[11][0], a[11][1], a[11][2], a[11][3]);

});

function refreshAt(day, hours, minutes, seconds) {
	var now = new Date();
	var then = new Date();

	if (now.getHours() > hours || (now.getHours() == hours && now.getMinutes() > minutes) || now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
		then.setDate(now.getDate() + 1);
	}
	then.setUTCDate(day);
	then.setHours(hours);
	then.setMinutes(minutes);
	then.setSeconds(seconds);

	var diff_days = Math.floor((Date.parse(then) - Date.parse(now)) / 86400000);
	var diff_hours = Math.floor((Date.parse(then) - Date.parse(now)) / 3600000);
	var diff_min = Math.floor((Date.parse(then) - Date.parse(now)) / 60000);

	if (diff_days == -1) {
		diff_days == 0;
	}

	diff_min = diff_min - diff_hours * 60;
	diff_min = n(diff_min)
	diff_hours = diff_hours - diff_days * 24;
	diff_hours = n(diff_hours);

	time_until = diff_hours + ":" + diff_min;

	setInterval(time_print, 1000 * 2);
	function time_print() {
		// $('#time').html(time_until);
	}

	var timeout = (then.getTime() - now.getTime());

	if ((then - now) > 0) {
		// console.log(time_until);
		setTimeout(function() {
			window.location.replace('small_notes_of_running_into_the_invisible/index.html');
		}, timeout);
	}
}

function currentTime() {
	var now = new Date();
	var hours = now.getHours();
	var min = now.getMinutes();
	var time = hours + ":" + n(min);
	$('#time').html(time);
	setTimeout(currentTime, 400);
}

function nextShow(a) {
	var now = new Date();
	var current_day = now.getUTCDate();
	var hour;
	var min;
	var time;
	for (var i = 0; i < a.length; i++) {

		if (current_day == a[i][0]) {
			// console.log(a[i][0]);
			hour = a[i][1];
			min = n(a[i][2]);
			time = "<span class='timelist'>" + "<span class='line'>" + hour + ":" + min + "</span>" + "</span>";

			if (hour > now.getHours() || min >= now.getMinutes() ) {
				console.log(time);
				if ($('#time_show').is(':empty')) {
					$('#time_show').append(time);

				} else {
					$('#showingslist').append(time);

				}
			}
		}
	}
}

function removeIfTimesAreEmpty() {
	if ($('#showingslist').is(':empty')) {

	}
}

function n(n) {
	return n > 9
		? "" + n
		: "0" + n;
}
