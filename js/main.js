(() => {
	//hook up the JS file
	console.log('fired! ready to jam out!');

	function playDrumSound(e) {
		// e in round brackets is the event object ->
		// gets generated with every event and apsses some data through
		let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

		// the return keyword stops javaScript from running any code below it
		if(!audio) {
			return;
		}

		// play the audio track
		audio.currentTime = 0;
		audio.play();
	}

	window.addEventListener('keydown', playDrumSound);
})();
