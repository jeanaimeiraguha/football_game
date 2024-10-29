// script.js
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const player1 = { x: 50, y: canvas.height / 2 - 25, width: 20, height: 50, color: 'blue' };
const player2 = { x: canvas.width - 70, y: canvas.height / 2 - 25, width: 20, height: 50, color: 'red' };
const ball = { x: canvas.width / 2, y: canvas.height / 2, radius: 10, color: 'white' };

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'z': // Player 1 up
            player1.y -= 5;
            break;
        case 's': // Player 1 down
            player1.y += 5;
            break;
        case 'ArrowUp': // Player 2 up
            player2.y -= 5;
            break;
        case 'ArrowDown': // Player 2 down
            player2.y += 5;
            break;
    }
});

function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw players
    ctx.fillStyle = player1.color;
    ctx.fillRect(player1.x, player1.y, player1.width, player1.height);

    ctx.fillStyle = player2.color;
    ctx.fillRect(player2.x, player2.y, player2.width, player2.height);

    // Draw ball
    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();

    // Request to animate the next frame
    requestAnimationFrame(draw);
}

// Start the game
draw();
