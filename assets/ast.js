const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Game Variables
let ship;
let asteroids = [];
let bullets = [];
let score = 0;
let lives = 3;
let keys = {};

// Game Setup
function init() {
  ship = new Ship();
  spawnAsteroids(5);
  gameLoop();
}

// Player Ship
class Ship {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.radius = 15;
    this.angle = 90 / 180 * Math.PI; // Pointing up
    this.rotation = 0;
    this.thrusting = false;
    this.thrust = { x: 0, y: 0 };
  }

  draw() {
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo( // Nose of the ship
      this.x + this.radius * Math.cos(this.angle),
      this.y - this.radius * Math.sin(this.angle)
    );
    ctx.lineTo( // Rear left
      this.x - this.radius * (Math.cos(this.angle) + Math.sin(this.angle)),
      this.y + this.radius * (Math.sin(this.angle) - Math.cos(this.angle))
    );
    ctx.lineTo( // Rear right
      this.x - this.radius * (Math.cos(this.angle) - Math.sin(this.angle)),
      this.y + this.radius * (Math.sin(this.angle) + Math.cos(this.angle))
    );
    ctx.closePath();
    ctx.stroke();
  }

  update() {
    this.angle += this.rotation;

    if (this.thrusting) {
      this.thrust.x += 0.1 * Math.cos(this.angle);
      this.thrust.y -= 0.1 * Math.sin(this.angle);
    }

    this.x += this.thrust.x;
    this.y += this.thrust.y;

    // Screen wrapping
    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
    if (this.y < 0) this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;

    this.draw();
  }
}

// Asteroids
class Asteroid {
  constructor(x, y, radius) {
    this.x = x || Math.random() * canvas.width;
    this.y = y || Math.random() * canvas.height;
    this.radius = radius || 50;
    this.speed = Math.random() * 2 + 1;
    this.angle = Math.random() * Math.PI * 2;
    this.vertices = Math.floor(Math.random() * 6 + 5);
  }

  draw() {
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < this.vertices; i++) {
      ctx.lineTo(
        this.x + this.radius * Math.cos(this.angle + i * Math.PI * 2 / this.vertices),
        this.y + this.radius * Math.sin(this.angle + i * Math.PI * 2 / this.vertices)
      );
    }
    ctx.closePath();
    ctx.stroke();
  }

  update() {
    this.x += this.speed * Math.cos(this.angle);
    this.y += this.speed * Math.sin(this.angle);

    // Screen wrapping
    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
    if (this.y < 0) this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;

    this.draw();
  }
}

// Bullets
class Bullet {
  constructor(ship) {
    this.x = ship.x + ship.radius * Math.cos(ship.angle);
    this.y = ship.y - ship.radius * Math.sin(ship.angle);
    this.speed = 10;
    this.angle = ship.angle;
    this.radius = 3;
  }

  draw() {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.x += this.speed * Math.cos(this.angle);
    this.y -= this.speed * Math.sin(this.angle);
    this.draw();
  }
}

// Game Controls
document.addEventListener('keydown', (e) => {
  keys[e.key] = true;
  if (e.key === ' ') {
    bullets.push(new Bullet(ship));
  }
});

document.addEventListener('keyup', (e) => {
  keys[e.key] = false;
});

function handleInput() {
  ship.rotation = 0;
  ship.thrusting = false;
  if (keys['ArrowLeft']) {
    ship.rotation = -0.05;
  }
  if (keys['ArrowRight']) {
    ship.rotation = 0.05;
  }
  if (keys['ArrowUp']) {
    ship.thrusting = true;
  }
}

// Collision Detection
function checkCollisions() {
  // Bullets and Asteroids
  for (let i = bullets.length - 1; i >= 0; i--) {
    for (let j = asteroids.length - 1; j >= 0; j--) {
      const dist = Math.hypot(bullets[i].x - asteroids[j].x, bullets[i].y - asteroids[j].y);
      if (dist < bullets[i].radius + asteroids[j].radius) {
        if (asteroids[j].radius > 20) {
          asteroids.push(new Asteroid(asteroids[j].x, asteroids[j].y, asteroids[j].radius / 2));
          asteroids.push(new Asteroid(asteroids[j].x, asteroids[j].y, asteroids[j].radius / 2));
        }
        asteroids.splice(j, 1);
        bullets.splice(i, 1);
        score += 10;
        break;
      }
    }
  }

  // Ship and Asteroids
  for (let i = asteroids.length - 1; i >= 0; i--) {
    const dist = Math.hypot(ship.x - asteroids[i].x, ship.y - asteroids[i].y);
    if (dist < ship.radius + asteroids[i].radius) {
      lives--;
      ship = new Ship();
      if (lives === 0) {
        alert('Game Over! Your score: ' + score);
        document.location.reload();
      }
    }
  }
}

function spawnAsteroids(count) {
  for (let i = 0; i < count; i++) {
    asteroids.push(new Asteroid());
  }
}

function drawUI() {
  ctx.fillStyle = 'white';
  ctx.font = '24px Arial';
  ctx.fillText('Score: ' + score, 20, 30);
  ctx.fillText('Lives: ' + lives, canvas.width - 100, 30);
}

// Game Loop
function gameLoop() {
  requestAnimationFrame(gameLoop);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  handleInput();
  ship.update();

  for (let i = bullets.length - 1; i >= 0; i--) {
    bullets[i].update();
    if (bullets[i].x < 0 || bullets[i].x > canvas.width || bullets[i].y < 0 || bullets[i].y > canvas.height) {
      bullets.splice(i, 1);
    }
  }

  for (const asteroid of asteroids) {
    asteroid.update();
  }

  checkCollisions();
  drawUI();

  if (asteroids.length === 0) {
    spawnAsteroids(5);
  }
}

init();
