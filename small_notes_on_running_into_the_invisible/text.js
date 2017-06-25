$(document).ready(function() {
	console.log("a project by Victoria Douka-Doukopoulou, made in 2017");
	$('.type-it').on('DOMSubtreeModified', function() {
		window.scrollTo(0, document.body.scrollHeight);
	})

	$('.type-it').typeIt({
		strings: [
			'<span class="title">SMALL NOTES</span>',
			'<span class="title">ON RUNNING</span>',
			'<span class="title">INTO THE</span>',
			'<span class="title">INVISIBLE</span>',
			' ',
			'<span class="quote">On the morning of March 5, 1969</span>',
			'<span class="quote">somewhere in the Mojave Desert </span>',
			'<span class="quote">in California, 2 cubic feet of </span>',
			'<span class="quote">Helium was returned to the atmosphere.</span>',
			' ',
			'<span class="paragraph">In 1969, Robert Barry released 2 cubic feet of Helium in the Californian desert. To be more precise, on </span>', '<span class="paragraph">Wednesday the 5th March of 1969, sponsored by the local art patron Stanley Grinstein, Robert Barry travelled</span>','<span class="paragraph">to Southern California, in the Mojave desert, and sometime in the early morning released 2 cubic meters of</span>','<span class="paragraph">helium into the atmosphere, that were previously contained in a commercial helium tank.</span>',
			' ',
			'<span class="paragraph">In the meantime the March 1969 nor&apos;easter, an extratropical cyclone, moved into the Gulf of Mexico on March 5. It continued into the US before swinging wide of New England and into the Atlantic on March 10. Although</span>','<span class="paragraph">California was not directly effected by the cyclone, the passage of the cyclone through the US resulted in a</span>','<span class="paragraph">general drop of temperature and extremely high levels of precipitation throughout the country.</span>',
			' ',
			'<span class="paragraph">When one becomes interested in the invisible, one starts to look for it, and then all becomes problematic, since</span>','<span class="paragraph">the invisible tends to be non-visible, and one tends to look for things.</span>',
			' ',
			'<span class="paragraph">When one spends enough time with the invisible, one learns to non-look, yet remains motivated in</span>','<span class="paragraph">the possibility of capturing it.</span>',
			' ',
			'<span class="paragraph">When one non-looks at the invisible, one might accidentally run into it.</span>',
			' ',
			'<span class="quote">On the morning of March 5, 1969</span>',
			'<span class="quote">somewhere in the Mojave Desert </span>',
			'<span class="quote">in California, 2 cubic feet of </span>',
			'<span class="quote">Helium was returned to the atmosphere.</span>',
			' ',
			'<span class="paragraph">With a temperature somewhere between 7 and 9 degree celsius, and wind speed of 6 to 10 km/h. Robert Barry opened the valve of the helium tank to return the noble gas into the atmosphere, proceeded to step away and</span>','<span class="paragraph">photograph his action, to document what he would later call &apos;a kind of large environmental sculpture&apos;.</span>',
			' ',
			'<span class="paragraph">Once the valve was open, the pure helium would leave the tank and dilute. The favourable weather conditions</span>','<span class="paragraph">due to the March 1969 nor&apos;easter made the helium tank, the helium itself and the atmosphere cold, in such way that the helium would rise slower into the greater atmosphere, giving Barry enough time to walk away, pick up</span>','<span class="paragraph">the camera, and take a picture, at most within 13 min and at least within 5 min, before the whole helium tank</span>','<span class="paragraph">would be fully empty and the helium so diluted that it would be untraceable.</span>',
			' ',
			'<span class="paragraph">Meaning that as Barry would take the photograph of this piece, the light that will later on collide with the</span>','<span class="paragraph">photosensitive film in his camera would pass through the cold, diluted helium gas, and atoms in the gas would</span>','<span class="paragraph">be absorbed in characteristic frequencies. Since the re-emitted light that would have passed through the helium sculpture was unlikely to be emitted in the same direction as the absorbed photon, the light finally captured by Barry&apos;s analog film would have a dissentingly pale yellow glow, altering how the final picture would look.</span>',
			' ',
			'<span class="paragraph">Further, it is possible to speculate that if Barry took several consecutive pictures, they would have completely</span>','<span class="paragraph">different and distinct light characteristics, as the helium would dissolve more and more into the atmosphere and make the light captured less and less yellow.</span>',
			' ',
			'<span class="paragraph">Robert Barry would then leave the Mojave Desert, and eventually process the roll of film, resulting in the</span>','<span class="paragraph">documentation of his piece &quot;Inert Gasses Series: Helium&quot;, a single photograph and poster for an exhibition.</span>','<span class="paragraph">He would exhibit the piece 4 times; 3 by displaying the poster and once by displaying the photographic print.</span>',
			' ',
			'<span class="quote">On the morning of March 5, 1969</span>',
			'<span class="quote">somewhere in the Mojave Desert </span>',
			'<span class="quote">in California, 2 cubic feet of </span>',
			'<span class="quote">Helium was returned to the atmosphere.</span>',
			' ',
			'<span class="paragraph">The original print now is archived somewhere. Not having seen it myself, not even an accurate digital copy of it, I go by collecting versions that exist online. It is hard to determine which one is closer to the original print. They</spa>','<span class="paragraph">are mere digital copies, perhaps reproductions of copies; scanned or at best re-photographed, translated</span>','<span class="paragraph"> between several digital formats; making it so that the information the original could possibly possess might</span>','<span class="paragraph">have been discarded.</span>',
			' ',
			'<span class="paragraph">Yet Barry&apos;s piece stands first, into non-looking for the invisible and seeing it. As images participate in forming</span>','<span class="paragraph">worlds, they have become forms of thought constituting a new kind of knowledge &mdash; one that is grounded in</span>','<span class="paragraph">visual communication, and thereby dependent on perception, demanding the development of the optical mind.</span>',
			' ',
			'<span class="paragraph">The original print and the digital copies or reproductions ask for an optical mind, capable of extending a</span>','<span class="paragraph">sensitivity into seeing beyond what is merely there or stated at the image&apos;s caption there &mdash; where &mdash; what</span>','<span class="paragraph">could possibly seem as a technical error, is perhaps a &apos;large scale environmental sculpture&apos;, a non-human, a</span>','<span class="paragraph">computer program, the greatest and most powerful nor&apos;easter in the American history or the invisible, when</span>','<span class="paragraph">exercising such an optical mind it is possible to non-look and see the invisible.</span>'
		],
		cursor: false,
		speed: 70,
		breakLines: true,
		breakDelay: 0,
		callback: function() {
			console.log("done");
			setTimeout(function() {
				window.location.href = '../dont_forget_your_belongings/i.html'
			},3000);
		}

	});

});
