const container = document.getElementById('container');
const btn = document.getElementById('resetBtn');

// Function to create grid
function makeGrid(size) {
  container.innerHTML = ''; // remove old grid
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;
    div.dataset.opacity = 0; // track darkening level

    div.addEventListener('mouseover', () => {
      // Random rainbow color
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

      // Darkening effect (10% each time)
      let currentOpacity = parseFloat(div.dataset.opacity);
      if (currentOpacity < 1) {
        currentOpacity += 0.1;
        div.dataset.opacity = currentOpacity;
        div.style.opacity = currentOpacity;
      }
    });

    container.appendChild(div);
  }
}

// Default grid
makeGrid(16);

// Button click for new grid
btn.addEventListener('click', () => {
  let newSize = prompt('Enter new grid size (max 100):');
  newSize = parseInt(newSize);
  if (newSize > 0 && newSize <= 100) {
    makeGrid(newSize);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});
