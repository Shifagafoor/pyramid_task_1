const draw_button = document.querySelector('.draw');
const display_output = document.querySelector('.display_output');
const start_button = document.querySelector('.start');
const stop_button = document.querySelector('.stop');
const restart_button = document.querySelector('.restart');
const colors = document.querySelector('.color')

let color = true;
let colorPalet = ''

colors.addEventListener('input',(event) => {
  const colorPalet = event.target.value;
  
  circle.style.backgroundColor = colorPalet;
  console.log(colorPalet);  
});



let isAnimating = false;


draw_button.addEventListener('click', () => {
    const numRows = parseInt(document.querySelector('.pyramid .input').value);
    display_output.innerHTML = ''; 
    for (let i = 1; i <= numRows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.display = 'flex';
        rowDiv.style.justifyContent = 'center';

        for (let j = 0; j < i; j++) {
            const circle = document.createElement('div');
            circle.style.width = '20px';
            circle.style.height = '20px';
            circle.style.border = '2px solid white';
            circle.style.borderRadius = '50%';
            circle.style.margin = '5px';

            rowDiv.appendChild(circle);
        }

        display_output.appendChild(rowDiv);
    }
    });

    let animationTimeouts = []; 

    start_button.addEventListener('click', () => {
        start_button.disabled = true;
        stop_button.disabled = false;
    
        const rows = display_output.querySelectorAll('div'); 
        
        rows.forEach((row, index) => {
            const timeout = setTimeout(() => {
                row.style.opacity = 1;
                animateRow(row); 
            }, index * 100); 
            animationTimeouts.push(timeout); 
        });
    
        function animateRow(row) {
            const circles = row.querySelectorAll('div');
            circles.forEach((circle, index) => {
                const timeout = setTimeout(() => {
                    circle.style.transition = 'transform 1s ease, opacity 0.3s ease';
                    circle.style.transform = 'scale(1.1)'; 
                    circle.style.opacity = 1; 
                    // circle.style.backgroundColor = 'green'; 
                });
                animationTimeouts.push(timeout);
            });
        }
    });
    
    stop_button.addEventListener('click', () => {
        start_button.disabled = false;
        stop_button.disabled = true;
    
        animationTimeouts.forEach(timeout => clearTimeout(timeout));
        timeout = []; 
    });
    
    restart_button.addEventListener('click', () => {
        start_button.disabled = false;
        stop_button.disabled = true;
    
        display_output.innerHTML = '';
        animationTimeouts = []; 
    });
    
