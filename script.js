const container = document.getElementById('container');
const resetBtn = document.getElementById('resetBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const darkBtn = document.getElementById('darkBtn');

let mode = 'rainbow'; // default mode

// Function to make grid
function makeGrid(size) {
  container.innerHTML = ''; // clear old grid
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;
    div.style.backgroundColor = 'white';
    div.dataset.darkness = 0; // for dark effect tracking

    div.addEventListener('mouseover', () => {
      if (mode === 'rainbow') {
        // Rainbow Mode
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        div.style.backgroundColor = `rgb(${r},${g},${b})`;
        div.style.opacity = 1;
      } else if (mode === 'dark') {
        // Dark Mode (10% darker each hover)
        let current = parseFloat(div.dataset.darkness);
        if (current < 1) {
          current += 0.1;
          div.dataset.darkness = current;
          div.style.backgroundColor = 'black';
          div.style.opacity = current;
        }
      }
    });

    container.appendChild(div);
  }
}

makeGrid(16); // default 16x16

// Reset grid with prompt
resetBtn.addEventListener('click', () => {
  let newSize = prompt('Enter grid size (1-100):');
  newSize = parseInt(newSize);
  if (newSize > 0 && newSize <= 100) {
    makeGrid(newSize);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

// Mode buttons
rainbowBtn.addEventListener('click', () => {
  mode = 'rainbow';
  rainbowBtn.style.background = 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)';
  darkBtn.style.background = '#333';
});

darkBtn.addEventListener('click', () => {
  mode = 'dark';
  darkBtn.style.background = 'black';
  rainbowBtn.style.background = '#333';
});
