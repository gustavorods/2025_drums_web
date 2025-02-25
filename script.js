document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if(song != "") {
        let songArray = song.split('');
        playComposition(songArray);
    }

})


let elementsArray = document.querySelectorAll('.key');
elementsArray.forEach(function(elem) {
    elem.addEventListener('click', (event) => {
        let key = `key${event.target.value}`.toLowerCase();
        playSound(key);
    })
})


function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300)
    }
}

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
            /*
            Whenever the user inputs an invalid key or presses the spacebar (which has the same effect), the system will ignore that input. 
            However, in the user interface, this will create the impression that, when the user presses the spacebar to separate a set of keys, 
            the system is indeed playing each set individually, with a noticeable delay between them. This happens because, when an invalid key is 
            pressed, the system not only ignores the input but also applies a wait time.
            */
        }, wait);

        wait += 250
        
    }
}