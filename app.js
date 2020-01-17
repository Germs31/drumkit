const kick = document.querySelector('#kick');
const snare = document.querySelector('#snare');
const hats = document.querySelector('#hats');
const crash = document.querySelector('#crash');

kick.addEventListener('click', () => {
    const kickDrum = new Audio('sounds/kick.wav');
    kickDrum.play();
})

snare.addEventListener('click', () => {
    const snareDrum = new Audio('sounds/snare.wav');
    snareDrum.play();
})

hats.addEventListener('click', () => {
    const hat = new Audio('sounds/hihat.wav');
    hat.play();
})

crash.addEventListener('click', () => {
    const openhats = new Audio('sounds/openhat.wav');
    openhats.play();
})