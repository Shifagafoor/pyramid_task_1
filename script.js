document.addEventListener('DOMContentLoaded', () => {
    const drawButton = document.querySelector('.draw');
    const startButton = document.querySelector('.start');
    const stopButton = document.querySelector('.stop');
    const restartButton = document.querySelector('.restart');
    const displayOutput = document.querySelector('.display_output');
    let interval;
    let isStopped = false;
  
    drawButton.addEventListener('click', () => {
      const rows = parseInt(document.querySelector('.pyramid .input').value);
      drawPyramid(rows);
    });
  
    startButton.addEventListener('click', () => {
      const delay = parseInt(document.querySelector('.delay-input .input').value);
      startPyramid(delay);
    });
  
    stopButton.addEventListener('click', () => {
      clearInterval(interval);
      isStopped = true;
    });
  
    restartButton.addEventListener('click', () => {
      clearInterval(interval);
      isStopped = false;
      const delay = parseInt(document.querySelector('.delay-input .input').value);
      startPyramid(delay);
    });
  
    function drawPyramid(rows) {
      displayOutput.innerHTML = ''; 
      for (let i = 1; i <= rows; i++) {
        const row = document.createElement('div');
        row.style.textAlign = 'center';
        row.style.margin = '5px';
        row.style.fontSize = `${20 + i}px`; 
        row.textContent = '▲'.repeat(i);
        displayOutput.appendChild(row);
      }
    }
  
    function startPyramid(delay) {
      if (!displayOutput.children.length) return;
      let currentRow = 0;
  
      interval = setInterval(() => {
        if (isStopped) return;
        if (currentRow < displayOutput.children.length) {
          displayOutput.children[currentRow].style.color = '#0ff';
          currentRow++;
        } else {
          clearInterval(interval);
        }
      }, delay);
    }
  });
  