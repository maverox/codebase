var canvas = document.querySelector('#canvas');
var c = canvas.getContext('2d');
window.addEventListener('resize', () => {
   canvas.width = innerWidth;
   canvas.height = innerHeight;
   init();
});
let hop;
addEventListener('click', (e) => {
   init();
   mouse.x = e.x;
   mouse.y = e.y;
});
addEventListener('keydown', (e) => {
   if (e.key === ' ') hop = true;
});
addEventListener('keyup', (e) => hop = false);
canvas.width = innerWidth;
canvas.height = innerHeight;
var w = canvas.width;
var h = canvas.height;
var g = 1.5;
var fric = 0.85;
var mouse = {
   x: undefined,
   y: undefined
}

function Ball(x, y, dx, dy, r, col) {
   this.x = x;
   this.y = y;
   this.dx = dx;
   this.dy = dy;
   this.r = r;
   this.col = col;
   this.draw = function () {
      c.beginPath();
      c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
      c.fillStyle = col;
      c.fill();
      c.strokeStyle = '#333';
      c.strokeWidth = '2px';
      c.stroke();
   };
   this.update = function () {
      if (hop) {
         this.dy = -(200 / this.r);
         if (this.y - this.r <= 0) this.y = this.r;
      }
      if ((this.r + this.y + this.dy) < h) {
         this.dy += g;
      } else {
         this.dy *= -(fric + (this.r / 10000));
      }

      this.y += this.dy;

      if (this.x - this.r + this.dx <= 0 || this.x + this.r + this.dx >= w) {
         this.dx *= -(fric / 2 + (this.r / 10000));
      }
      this.x += this.dx;
   };
}
var colours = ['#11171c', '#ea4228', '#3e9db3', '#462938', '#d4d955'];
var balls;
var ballCount = 100;

function init() {
   balls = [];
   for (var i = 0; i <= ballCount; i++) {
      var x = rangeRand(rad, w - rad);
      var y = rangeRand(rad, mouse.y - rad);
      var dx = 8 * rangeRand(-1, 1);
      var dy = rangeRand(-1, 1);
      var rad = rangeRand(15, 45);
      var color = colours[Math.floor(Math.random() * 5)];
      balls.push(new Ball(x, y, dx, dy, rad, color));
   }

}
init();

function animate() {
   requestAnimationFrame(animate);
   c.clearRect(0, 0, w, h);
   if (balls.length) {
      balls.forEach((ball) => {
         ball.draw();
         ball.update();
      });
   }

}
animate();
// utility function
function rangeRand(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}