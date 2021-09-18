const count = document.getElementById('count');
const ninja = document.getElementById('ninja');
const suriken = document.getElementById('suriken');

document.addEventListener('keydown', function(event) {
    jump();
});

function jump () {
    if (ninja.classList != 'jump') {
        ninja.classList.add('jump')
    }
    setTimeout( function() {
        ninja.classList.remove('jump')
    }, 300)
}
let GameOverFalse = setInterval( function() {
    let ninjaPlay = parseInt(window.getComputedStyle(ninja).getPropertyValue('top'))
    let surikenKill = parseInt(window.getComputedStyle(suriken).getPropertyValue('left'))

    if (surikenKill < 50 && surikenKill > 0 && ninjaPlay >= 140) {
        alert('Твой ниндзя умер!!');
        count.innerHTML++;
    }
}, 10)
