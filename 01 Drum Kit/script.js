/*
	Plays an audio file once a key is pressed via playAudio()
	Once the animation/transistion effect ends the removeTransistion() function is called which returns it to it's inital state.
*/

function playAudio(e) {
	const AUDIO = document.querySelector(`audio[data-key="${e.keyCode}"]`); //	Using ES6 Template strings.  ${ }
	const KEY = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!AUDIO) return; 		//	Kills the function ( only for keys that are not presently required )
	AUDIO.currentTime = 0;	// Resets the currently played audio back to zero, so that the currently playing audio does not have to completely finish.
	AUDIO.play();
	KEY.classList.add('playing');
}


function removeTransistion(e) {
	if(e.propertyName !== 'transform') return;
	e.target.classList.remove('playing');
};


const KEYS = document.querySelectorAll('.key');
KEYS.forEach(key => key.addEventListener('transitionend', removeTransistion));


window.addEventListener('keydown', playAudio);