// переменные и объекты
const score = document.querySelector('.score'),
      start = document.querySelector('.start'),
      gameArea = document.querySelector('.gameArea'),
      car = document.createElement('div');

car.classList.add('car');

const settings = {
    start: false,
    score: 0,
    speed: 3
};

const keys = {
    ArrowDown: false,
    ArrowUp: false,
    ArrowLeft: false,
    ArrowRight: false
};

// Функции
function startGame () { 
    start.classList.add('hide');
    settings.start = true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame);
};

function playGame () {
    console.log('play game');
    if (settings.start) {
        requestAnimationFrame(playGame);
    }    
}

function startRun (event) {
    event.preventDefault(); 
    keys[event.key] = true;
};

function stopRun (event) {
    event.preventDefault(); 
    keys[event.key] = false;
};

// прослушивальщики событий
    
start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);