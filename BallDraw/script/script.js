const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;


function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function Ball(x, y, vectorX, vectorY, color, size) {
  this.x = x;
  this.y = y;
  this.vectorX = vectorX;
  this.vectorY = vectorY;
  this.color = color;
  this.size = size;

  this.draw = function () {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    context.fill();
  }
  this.update = function() {
    if(this.x + this.size > width || this.x - this.size < 0) {
        this.vectorX = -(this.vectorX);
      }
    if(this.y + this.size > height || this.y - this.size < 0) {
        this.vectorY = -(this.vectorY)
    }
    this.x += this.vectorX;
    this.y += this.vectorY;
  }
  this.detect = function() {
    for(let j = 0; j < balls.length; j++) {
        if(!(this === balls[j])) {
          const dx = this.x - balls[j].x;
          const dy = this.y - balls[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
    
          if (distance < this.size + balls[j].size) {
            balls[j].color = this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')';
          }
        }
      }
  }
}



let balls = [];


while(balls.length < 100) {
  const size = random(10,20);
  var ball = new Ball(
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-7,7),
    random(-7,7),
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    size
  );
  balls.push(ball);
}



function loop() {
  context.fillStyle = 'rgba(0,0,0,0.25)';
  context.fillRect(0,0,width,height);

  for(let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].detect();
  }

  requestAnimationFrame(loop);
}

loop();