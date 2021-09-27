let pos = 0;
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];
let direction = 0;
// This array holds all the pacmen
const pacMen = [];

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);

  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 100;
 
  // sets the position
  newimg.style.left = position.x;
  newimg.style.top = position.y;

  // adds a new pacman
  game.appendChild(newimg);

  // returns details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loop over pacmen array to move each one and move its image in the DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

function checkCollisions(item) {
  if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
    item.position.x + item.velocity.x < 0) item.velocity.x = -item.velocity.x;
  
  if (item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
    item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
}

function makeOne() {
  // adds a new pacman
  pacMen.push(makePac()); 
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen };
}
