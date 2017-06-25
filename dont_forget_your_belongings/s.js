$(document).ready(function() {
  var array = ['I found a shore',

    '3km away from Rovaniemi, on a hill',

    'it has been there for a while ',

    '[PAUSE]',

    'for a long while',

    'but not many have noticed',

    'DON’T FORGET YOUR BELONGINGS [title]',

    'It is hard to account fot a large mass of water',

    'when you have nothing to show for it. ',

    'I mean there is pollen trapped in fossils and ',

    'a few ripples on rocks signifying that waves used to crash on them.',

    'But there are no paintings, no poems, ',

    'no epics and definitely no footage of it.',

    '[fossil image]',

    'but there was once a limpet,',

    'not this particular one, but one just like this one.',

    'Gerard de Geer found it in sediments and',

    'named the lake that existed 9,500 years ago after it.',

    'Ancylus lake covered a large part of what today',

    'we consider the east coast of Sweden and the west coast of Finland.',

    'Everything we know in the area was under water. ',

    'The local KMART,my student housing,',

    'everything besides Ounasvaara. ',

    'More precisely besides 93 meters of the top of Ounasvaara.',

    '[PAUSE]',

    'Ounasvaara was once an island ',

    '[PAUSE]',

    'let me help you picture that.',

    'Because there are so many large bodies of water you haven’t seen. ',

    'The freshwater Baltic Ice lake that drained ',

    'into the brackish Yolidia Sea that was cornered off,',

    'and turned into the fresh water Ancylus lake ',

    'that reached the level of global seas of the time ',

    'and by that made for a brief glimpse of time, ',

    'the Mastogloia sea. ',

    'Before the rising oceanic levels broke through ',

    'and created the Littorina Sea,',

    'the saltiest sea to exist,ever. ',

    'That diminished by giving half of its volume ',

    'and surface to become the Baltic sea, ',

    'which you may have seen with your own eyes.',

    '[PAUSE]',

    'there stood, through it all, Ounasvaara, ',

    'watching the water come and go, until there was no more.',

    '[PAUSE]',

    'Today Ounasvaara ranks as one of the best spots ',

    'to watch the northern lights in the area. ',

    'People on trip advisor and instagram advise future pilgrims,',

    'to watch where they step and wear proper footwear.',

    'flipflops (?) I find myself asking.',

    'Today people correct others when they call ',

    'Ounasvaara a mountain. ',

    '“not tall enough” they say, “just a hill”',

    'island (?) I find myself wanting to say.',

    '[PAUSE]',

    'somehow Ounasvaara’s beach aesthetic is missed. ',

    'Perhaps because the locals haven’t been around beaches ',

    'as much as I have, perhaps because the weather ',

    'isn’t exactly what you would picture as beach climate ',

    'or maybe because they don’t see traces of the past',

    'everywhere like I do.',

    '[PAUSE]',

    'It is logical.',

    'It is rather inconvenient going around ',

    'dealing with everything and its individual history.',

    'Because noticing is a slow and careful practice that',

    'takes time and patience, unlike stumbling upon a discovery.',

    'It involves allowing things to be greater',

    'and more complex than your understanding of them.',

    'It demands you to be present ',

    'and actively choose the long hard way over the simplified one.',

    'simplifications act as explosions, ',

    'and noticing takes place when all is left is fragments.',

    '[PAUSE]',

    'To see the island you have to notice the cobblestones ',

    'when you hike up Ounasvaara to see the northern lights.',

     'And to remember them when you head back down, ',

    'to take the time to look them up when you finally get home, ',

    'and to google translate all the pages you find ',

    'because they are in Finnish.',

    'To accept that you don’t understand everything ',

    'about the geological history of the area, ',

    'and yet to continue.',

    'To collect what seems important and to be able ',

    'to imagine the sea when all you read about is raised beaches.',

    'To keep in mind the sea and to understand that it ',

    'in itself is a plurality, and to extend it the same sensitivity,',

    'as you did with the cobblestones.',

    'To be ok with the fact that you know ',

    'the fragments you choose to collect may not always',

    'be the ones needed to assemble the “correct picture”.',

    'To put together the most complex picture ',

    'and to proceed discussing it as intricately ',

    'as you can and the situation allows you.',

    'to proceed, to notice, to repeat.',

    '  '
  ];


  var i = 0;
  play_text();

  function play_text() {
    if (typeof array[i] !== 'undefined') {
      document.getElementsByTagName('span')[0].innerHTML = array[i];
      console.log("linenumber: " + i + " = " + array[i]);
      i++
    }
    if (i <= array.length) {
      if (i === array.length) {
        setTimeout(function() {
          window.location.href = '../here_now_look/index.html'
        }, 7000);
      };
      setTimeout(play_text, 4000);
    };
  };
});
