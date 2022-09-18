let canvas = document.querySelector('#canvas');
let c = canvas.getContext('2d');
const mouse = {
   x: innerWidth / 2,
   y: innerHeight / 2
}
window.addEventListener('mouseout', () => {
   mouse.x = innerWidth / 2;
   mouse.y = innerHeight / 2;
})
window.addEventListener('mousemove', e => {
   mouse.x = e.clientX;
   mouse.y = e.clientY;
})
window.addEventListener('resize', () => {
   canvas.width = innerWidth;
   canvas.height = innerHeight;
});
// declaration 
canvas.width = innerWidth;
canvas.height = innerHeight;
let w = canvas.width;
let h = canvas.height;
let colours = ['#11171c', '#ea4228', '#3e9db3', '#462938', '#d4d955'];

function Particle(x, y, r, colour) {
   this.x = x;
   this.y = y;
   this.r = r;
   this.drad = 0.07;
   this.rad = Math.random() * 2 * Math.PI;
   this.centreDist = rangeRand(75, 250);
   this.lastMouse ={
      x: this.x,
      y: this.y
   }
   this.draw = last => {
      c.beginPath();
      c.strokeStyle = colour;
      c.lineWidth = this.r;
      c.moveTo(last.x, last.y);
      c.lineTo(this.x, this.y);
      c.stroke();
      c.closePath();
   };
   this.update = function () {
      const last = {
         x: this.x,
         y: this.y
      }
      this.drad = this.centreDist / 100 * 0.05; 
      this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.1;
      this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.1;
      this.rad += this.drad;
      this.x = this.lastMouse.x + this.centreDist * Math.cos(this.rad);
      this.y = this.lastMouse.y + this.centreDist * Math.sin(this.rad);
      this.draw(last);
   }
}
let particles = [];
for (let i = 0; i < 100; i++) {
   let x = w / 2;
   let y = h / 2;
   let r = Math.random() * 10 + 5;
   col = colours[Math.floor(Math.random() * 3)];
   particles[i] = new Particle(x, y, r, col);
}

function animate() {
   requestAnimationFrame(animate);
   c.fillStyle = 'rgba(97, 221, 173, 0.3)';
   c.fillRect(0, 0, w, h)
   particles.forEach((particle) => {
      particle.update();
   });
}
animate();
//interacting


// Praactice Code
// line
// c.beginPath();
// c.moveTo(w/2, h/2);
// c.lineTo(w/2, h/2+500);   
// c.strokeStyle = "#ff3366";
// c.stroke();
// arc
// for (let i = 1; i <= 300; i+=1) {
//    let x = Math.random() * w;
//    let y = Math.random() * h;
//    let r = Math.random() * 255;
//    let g = Math.random() * 255;
//    let b = Math.random() * 255;
//    let a = Math.random();
//    c.beginPath();
//    c.arc(x, y, Math.random() * 60, 0, Math.PI*2, false);
//    
//    c.fill();
// }
function rangeRand(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}