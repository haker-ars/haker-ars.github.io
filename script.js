const dino = document.getElementById('ninja')
const cactus = document.getElementById('suriken')

document.addEventListener('keydown', function(event) {
    jump();
});

function jump () {
    if (dino.classList != 'jump') {
        dino.classList.add('jump')
    }
    setTimeout( function() {
        dino.classList.remove('jump')
    }, 300)
}
let GameOverFalse = setInterval( function() {
    let dinoPlay = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusKill = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

    if (cactusKill < 50 && cactusKill > 0 && dinoPlay >= 140) {
        alert('Твой ниндзя умер!!')
    }
}, 10)
