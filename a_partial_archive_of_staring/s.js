$(document).ready(function() {
	window.alert("The human eye can sometimes be mistaken, but the photographic print put under the magnifying glass or projected into the screen mercilessly reveals every detail\n—René Fonck,Ace of Aces,1933\n\nThe webcam at the Neumayer station provides a current picture every 10 minutes – the time-lapse video shows the images of the last 24 hours. At night the camera switches over to black and white images. During a snowstorm it is possible that you cannot see the station at all.\n\nA PARTIAL ARCHIVE OF STARING:\ntotal number of pictures: 927\nnumber of days observed: 600\nlast updated: 13/10/2016\ncurrently on display: 19");

	var array = [

		'<p>Neumayer Station III, Antartica<br> 2015-09-30 GMT 06:39:09 <br> 640 × 480 pixels<br>RGB</p><br> The Neumayer Station, a white long rectangular building propped up in a series of black pillars sits on a thick bed of ice covered with fresh snow at the right far back corner of the picture. The foreground is completely filled by the tight packed snow, a few ridges are visible pointing out that the wind has been blowing from the east. The rest of image is taken up by a gloomy yet peaceful cloudy sky, besides a narrow vertical strip on the upper left side where the clouds give way to a peach and golden patch of sunset. ',

		'<p>Neumayer Station III, Antartica <br>2015-09-30 GMT 06:50:07<br>640 × 480 pixels<br>RGB</p><br>The Neumayer Station, a white long rectangular building propped up in a series of black pillars sits on a thick bed of ice covered with fresh snow at the right far back corner of the picture. The foreground is completely filled by the tight packed snow, a few ridges are visible pointing out that the wind has been blowing from the east. The rest of image is taken up by a thick cloudy sky, the ice and sky are separated by horizontal strip of clear orange sky.',

		'<p>Neumayer Station III, Antartica <br>2015-10-04 GMT 07:20:07<br>640 × 480 pixels<br>RGB</p><br>The Neumayer Station, a white long rectangular building propped up in a series of black pillars sits on a thick bed of ice at the right far back corner of the picture. The foreground is completely filled by the tight packed snow, that looks like a solid blank mass. The rest of image is taken up by thick white clouds, making it almost impossible to separate land and sky.',

		'<p>Neumayer Station III, Antartica<br>2015-10-07 GMT 07:49:09<br>640 × 480 pixels<br>RGB</p><br>The Neumayer Station, a white long rectangular building propped up in a series of black pillars sits on a thick bed of ice at the right far back corner of the picture. A white ramp extends outwards at the base of the building. The sun shines brightly. The snow in the foreground looks as if it has been chiselled by hand. The clear blue sky serves as the background.',

		'<p>Neumayer Station III, Antartica <br>2015-10-12 GMT 08:39:14<br>640 × 480 pixels<br>RGB</p><br>The Neumayer Station, a white long rectangular building propped up in a series of black pillars sits on a thick bed of ice at the right far back corner of the picture. A white ramp extends outwards at the base of the building. A small cloud of smoke floats in the middle of the facade. The sun shines brightly. The snow in the foreground looks as if it has been chiselled by hand. The clear blue sky serves as the background.',

		'<p>Neumayer Station III, Antartica <br>2015-10-13 GMT 08:49:16<br>640 × 480 pixels<br>RGB</p><br>The Neumayer Station, a white long rectangular building propped up in a series of black pillars sits on a thick bed of ice at the right far back corner of the picture. A white ramp extends outwards at the base of the building. A small cloud of smoke has risen slightly above the facade of the station. The sun shines brightly. The snow in the foreground looks as if it has been chiselled by hand. The clear blue sky serves as the background.',

		'<p>Neumayer Station III, Antartica <br>2015-10-14 GMT 08:59:09<br>640 × 480 pixels<br>RGB</p><br>The Neumayer Station, a white long rectangular building propped up in a series of black pillars sits on a thick bed of ice at the right far back corner of the picture. A white ramp extends outwards at the base of the building. A small cloud of smoke floats north of the facade of the station. The sun shines brightly. The snow in the foreground looks as if it has been chiselled by hand. The clear blue sky serves as the background. ',

		'<p>Neumayer Station III, Antartica <br>2015-10-31 GMT 15:40:09<br>640 × 480 pixels<br>RGB</p><br>Field of Grey.',

		'<p>Neumayer Station III, Antartica <br>2015-10-31 GMT 15:50:06<br>640 × 480 pixels<br>RGB</p><br>Field of Grey. The upper right corner speckled with small white dots.',

		'<p>Neumayer Station III, Antartica <br>2015-10-31 GMT 16:00:07<br>640 × 480 pixels<br>RGB</p><br>Field of Grey.',

		'<p>Neumayer Station III, Antartica <br>2015-10-31 GMT 16:09:15<br>640 × 480 pixels<br>RGB</p><br>Field of Grey. All four corners speckled with small white dots.',

		'<p>Neumayer Station III, Antartica <br>2015-10-31 GMT 16:19:16<br>640 × 480 pixels<br>RGB</p><br>Field of Grey. The upper right and left corner are speckled with small white dots.',

		'<p>Neumayer Station III, Antartica <br>2015-10-31 GMT 16:30:09<br>640 × 480 pixels<br>RGB</p><br>In a field of grey gradients, a curved grey shape in the middle surrounded by white dots.',

		'<p>Neumayer Station III, Antartica <br>2015-10-31 GMT 16:40:06<br>640 × 480 pixels<br>RGB</p><br>In a field of grey gradients. A curved grey shape stands in the middle surrounded by white dots containing a white doted trace of the top of the Neumayer Station. In the upper right corner a few clouds.',

		'<p>Neumayer Station III, Antartica <br>2015-10-31 GMT 16:40:06<br>640 × 480 pixels<br>RGB</p><br>In the middle an irregular grey shape surrounded by white dots that increase towards the bottom. A faded Neumayer Station, sits on a thick bed of grey at the right far back corner of the picture. The top is covered by clouds.',

		'<p>Neumayer Station III, Antartica <br>2015-10-31 GMT 16:59:15<br>640 × 480 pixels<br>RGB</p><br>A faded Neumayer Station, sits on a thick bed of grey at the right far back corner of the picture. The top is covered by clouds. In the middle, a curved grey shape surrounded by white dots.',

		'<p>Neumayer Station III, Antartica <br>2015-10-31 GMT 17:09:16<br>640 × 480 pixels<br>RGB</p><br>In the middle, a curved grey shape surrounded by white dots contains a white doted trace of the top of the Neumayer Station. The shape stands in a field of grey gradients taking up the majority of the picture. The top is covered by clouds.',

		'<p>Neumayer Station III, Antartica <br>2015-11-03 GMT 12:20:07<br>640 × 480 pixels<br>RGB</p><br>The Neumayer Station, sits on a thick bed of ice at the right far back corner of the picture. A white ramp extends outwards at the base of the building. The sun shines brightly. The snow in the foreground looks as if it has been chiselled by hand. The clear blue sky serves as the background.',

		'<p>Neumayer Station III, Antartica <br>2015-12-08 GMT 16:10:08<br>640 × 480 pixels<br>RGB</p><br>The Neumayer Station, sits on a thick bed of ice at the right far back corner of the picture. A white ramp extends outwards at the base of the building. The sun shines brightly. The thick bed of ice in the foreground is covered with tracks. A human figure dressed in dark clothes holding something walks towards the camera. The clear blue sky serves as the background.'
	];

	var i = 0;
	play_text();

	var lengthplusone = array.length + 1

	function play_text() {
		if (typeof array[i] != 'undefined') {
				document.getElementsByTagName('span')[0].innerHTML = array[i];
		}

		// console.log(array[i]);

		if (i <= array.length) {
			console.log(i);
			if (i === array.length) {
				console.log(array.length);
				// i = 1;
				document.getElementsByTagName('span')[0].innerHTML = " ";
				setTimeout(goHome, 19000);
				function goHome() {
					window.location.href = '../index.html'
				}
			};
			if (i <= 7) {
				setTimeout(play_text, 10000);
			} else {
				setTimeout(play_text, 5000);
			}

		};
		i++;
	};
});
