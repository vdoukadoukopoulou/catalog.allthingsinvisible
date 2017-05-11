$(document).ready(function() {
	console.log("a project by Victoria Douka-Doukopoulou, made in 2017");
	$('.element').on('DOMSubtreeModified', function() {
		window.scrollTo(0, document.body.scrollHeight);
	})
	
		$(function() {
			$(".element").typed({

			strings: ['<div class="title"> <p>         </p><p>         </p><p>         </p><p>SMALL NOTES</p> <p>ON RUNNING</p> <p>INTO THE</p> <p>INVISIBLE</p> </div> <div class="quote"> <p>On the morning of March 5, 1969</p> <p>somewhere in the Mojave Desert</p> <p>in California, 2 cubic feet of</p> <p>Helium was returned to the atmosphere.</p> </div> <div class="paragraph part_one"> <p>In 1969, Robert Barry released 2 cubic feet of Helium in the Californian desert. To be more precise, on Wednesday the 5th March of 1969, sponsored by the local art patron Stanley Grinstein, Robert Barry travelled to Southern California, in the Mojave desert, and sometime in the early morning released 2 cubic meters of helium into the atmosphere, that were previously contained in a commercial helium tank.</p> <p>In the meantime the March 1969 nor’easter, an extratropical cyclone, moved into the Gulf of Mexico on March 5. It continued into the US before swinging wide of New England and the Atlantic Canada on March 10 and dissolving into two low pressure areas. Although California was not directly effected by the cyclone, the passage of the cyclone through the US resulted in a general drop of temperature and extremely high levels of precipitation throughout the country. </p> <p>When one becomes interested in the invisible, one starts to look for it, and then all becomes problematic, since the invisible tends to be non-visible, and one tends to look for things.</p> <p>When one spends enough time with the invisible, one learns to non-look, yet remains motivated in the possibility of capturing it.</p> <p>When one non-looks at the invisible, one might accidentally run into it.</p> </div> <div class="quote"> <p>On the morning of March 5, 1969</p> <p>somewhere in the Mojave Desert</p> <p>in California, 2 cubic feet of</p> <p>Helium was returned to the atmosphere.</p> </div> <div class="paragraph part_two"> <p>With a temperature somewhere between 7 and 9 degree celsius, and wind speed of 6 to 10 km/h. Robert Barry opened the valve of the helium tank to return the noble gas into the atmosphere, proceeded to step away and photograph his action, to document what he would later call ‘a kind of large environmental sculpture’.</p> <p>Once the valve was open, the pure helium would leave the tank and dilute. The favourable weather conditions due to the March 1969 nor’easter made the helium tank, the helium itself and the atmosphere cold, in such way that the helium would rise slower into the greater atmosphere, giving Barry enough time to walk away, pick up the camera, and take a picture, at most within 13 min and at least within 5 min, before the whole helium tank would be fully empty and the helium so diluted that it would be untraceable.</p> <p>Meaning that as Barry would take the photograph of this piece, the light that will later on collide with the photosensitive film in his camera would pass through the cold, diluted helium gas, and atoms in the gas would be absorbed in characteristic frequencies. Since the re-emitted light that would have passed through the helium sculpture was unlikely to be emitted in the same direction as the absorbed photon, the light finally captured by Barry’s analog film would have a dissentingly pale yellow glow, altering how the final picture would look. </p> <p>Further, it is possible to speculate that if Barry took several consecutive pictures, they would most probably have completely different and distinct light characteristics from each other, as the helium would dissolve more and more into the atmosphere and make the light captured less and less yellow.</p> <p>Robert Barry would then leave the Mojave Desert, and eventually process the roll of film, resulting in the documentation of his piece “Inert Gasses Series : Helium”, a single photograph and poster for an exhibition.  He would exhibit the piece 4 times; 3 by displaying the poster, which remains as the only physically tangible evidence of the work and once just by displaying the photographic print.</p> </div> <div class="quote"> <p>On the morning of March 5, 1969</p> <p>somewhere in the Mojave Desert</p> <p>in California, 2 cubic feet of</p> <p>Helium was returned to the atmosphere.</p> </div> <div class="paragraph part_three"> <p>The original print now is archived somewhere. Not having seen it myself, not even an accurate digital copy of it, I go by collecting versions that exist online. It is hard to determine which one is closer to the original print. They are mere digital copies, perhaps reproductions of copies; scanned or at best re-photographed, translated between several digital formats; and somewhere there in the realm of digital processing and the material parameters that got standardised by human organisation, the information the original could possibly possess might have been discarded.</p> <p>Yet Barry’s piece stands first, into non-looking for the invisible and seeing it. As images participate in forming worlds, they have become forms of thought constituting a new kind of knowledge — one that is grounded in visual communication, and thereby dependent on perception, demanding the development of the optical mind.</p> <p>The original print and the digital copies or reproductions ask for an optical mind, capable of extending a sensitivity into seeing beyond what is merely there or stated at the image’s capture there — where — what could possibly seem as a technical error, is perhaps a ‘large scale environmental sculpture’ , a non-human, a computer program, the greatest and most powerful nor’easter in the American history or the invisible, when exercising such an optical mind it is possible to non-look and see the invisible.</p>', ' </div>', '<p>This is the end</p>'],

				typeSpeed: 20, // === 5 minutes ish
				loop: false,
				loopCount: false,
				callback: function() {
					location.reload();
					console.log("callback");
				},
				// starting callback function before each string
				preStringTyped: function() {
					location.reload();
					console.log("preStringTyped");
				},
				//callback for every typed string
				onStringTyped: function() {
					location.reload();
					console.log("onStringTyped");
				},
				// callback for reset
				resetCallback: function() {
					location.reload();
					console.log("resetCallback");
				}
			});
		});
		setTimeout(function() {
			window.location.href = '../dont_forget_your_belongings/i.html'
		}, 330000);

});






//
