document.addEventListener('DOMContentLoaded', () => {
  fetch('levels.json')
      .then(response => response.json())
      .then(data => {
          const gameContainer = document.getElementById('game-container');
          data.forEach(level => {
              const levelDiv = document.createElement('div');
              level.layout.forEach(row => {
                  const rowDiv = document.createElement('div');
                  row.forEach(cell => {
                      const cellDiv = document.createElement('div');
                      cellDiv.className = cell === 1 ? 'wall' : cell === 2 ? 'player' : 'empty';
                      rowDiv.appendChild(cellDiv);
                  });
                  levelDiv.appendChild(rowDiv);
              });
              gameContainer.appendChild(levelDiv);
          });
      });
});


