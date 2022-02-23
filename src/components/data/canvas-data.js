// Home page bouncing ball data
let ctx, gravity, ball, friction, d;

export const heroInit = (canvas) => {
  d = 10
  gravity = 0.25
  friction = 0.98
  
  ball = {
    bounce: 0.75,
    radius: 30,
    x: canvas.width / 2,
    y: canvas.height / 2,
    velX: (Math.random() * 15 + 5) * (Math.floor(Math.random() * 2) || -1),
    velY: (Math.random() * 15 + 5) * (Math.floor(Math.random() * 2) || -1)
  }
}

export const heroDraw = (ctx, canvas) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // draw the ball
  ctx.beginPath()
  ctx.fillStyle = 'darkgoldenrod' //steelblue
  ctx.arc(
    ball.x, ball.y,
    ball.radius,
    0, Math.PI * 2
  )
  ctx.fill()

  if (ball.velX > 0 || ball.velX < 0) {
    // bottom
    if (ball.y + ball.radius >= canvas.height) {
      ball.velY *= -ball.bounce
      ball.y = canvas.height - ball.radius
      ball.velX *= friction
    }
    // top
    if (ball.y - ball.radius <= 0) {
      ball.velY *= -ball.bounce
      ball.y = ball.radius
      ball.velX *= friction
    }
    // left
    if (ball.x - ball.radius <= 0) {
      ball.velX *= -ball.bounce
      ball.x = ball.radius
    }
    // right
    if (ball.x + ball.radius >= canvas.width) {
      ball.velX *= -ball.bounce
      ball.x = canvas.width - ball.radius
    }

    // reset insignificant amounts to 0
    if (ball.velX < 0.01 && ball.velX > -0.01) {
      ball.velX = 0
    }
    if (ball.velY < 0.01 && ball.velY > -0.01) {
      ball.velY = 0
    }

    // add gravity
    ball.velY += gravity

    // update ball position
    ball.x += ball.velX
    ball.y += ball.velY
  } else {
    ball.x += d;
    if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= canvas.width) {
      d *= -1;
    }
  }
}
