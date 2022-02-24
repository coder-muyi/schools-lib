// Home page bouncing ball data
let ctx, gravity, ball, friction, balls = [];

class Ball {
  constructor(radius, x, y, velX, velY, l) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.linear = l;
    this.bounce = 0.75;
  }
  
  draw(ctx) {
    ctx.beginPath()
    ctx.fillStyle = 'grey'//'darkgoldenrod' //steelblue
    ctx.strokeStyle = 'steelblue'
    ctx.strokeWidth = '100px'
    ctx.arc(
      this.x, this.y,
      this.radius,
      0,
      Math.PI * 2
    )
    ctx.stroke()
    ctx.fill()
  }
  
  bounceDetection(canvas) {
    if (this.velX > 0 || this.velX < 0) {
      // bottom
      if (this.y + this.radius >= canvas.height) {
        this.velY *= -this.bounce
        this.y = canvas.height - this.radius
        this.velX *= friction
      }
      // top
      if (this.y - this.radius <= 0) {
        this.velY *= -this.bounce
        this.y = this.radius
        this.velX *= friction
      }
      // left
      if (this.x - this.radius <= 0) {
        this.velX *= -this.bounce
        this.x = this.radius
      }
      // right
      if (this.x + this.radius >= canvas.width) {
        this.velX *= -this.bounce
        this.x = canvas.width - this.radius
      }
    
      // reset insignificant amounts to 0
      if (this.velX < 0.01 && this.velX > -0.01) {
        this.velX = 0
      }
      if (this.velY < 0.01 && this.velY > -0.01) {
        this.velY = 0
      }
    
      // add gravity
      this.velY += gravity
    
      // update ball position
      this.x += this.velX
      this.y += this.velY
    } else {
      this.x += this.linear;
      if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width) {
        this.linear *= -1;
      }
    }
  }
}

export const heroInit = (canvas) => {
  gravity = 0.25;
  friction = 0.98;
  
  for (let n = 0; n < 20; n++) {
    balls.push(new Ball(
      Math.random() * 30 + 5, 
      canvas.width / 2, 
      canvas.height / 2,
      (Math.random() * 15 + 5) * (Math.floor(Math.random() * 2) || -1),
      (Math.random() * 15 + 5) * (Math.floor(Math.random() * 2) || -1),
      Math.random() * 5
    ));
  }
  
}

export const heroDraw = (ctx, canvas) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw the ball
  for (let ball of balls) {
    ball.draw(ctx);
    ball.bounceDetection(canvas);
  }
}


