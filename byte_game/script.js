const board = document.getElementById('game-board');
const grid = Array(5).fill().map(() => Array(5).fill(''));
let robot = { x: 0, y: 0 };
let goal = { x: 4, y: 4 };

// Render Grid
function render() {
  board.innerHTML = '';
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      if (x === robot.x && y === robot.y) cell.classList.add('robot');
      if (x === goal.x && y === goal.y) cell.classList.add('goal');
      board.appendChild(cell);
    }
  }
}

// Move Robot
function moveForward() {
  if (robot.x < 4) robot.x++;
}

function turnLeft() {
  if (robot.y < 4) robot.y++;
}

// Run Code
function runCode() {
  const code = document.getElementById('code-input').value.split('\n');
  code.forEach((line) => {
    if (line.trim() === 'moveForward()') moveForward();
    if (line.trim() === 'turnLeft()') turnLeft();
  });
  render();
  checkWin();
}

// Check Win
function checkWin() {
  if (robot.x === goal.x && robot.y === goal.y) {
    alert('You Win! Great job!');
  }
}

render();
