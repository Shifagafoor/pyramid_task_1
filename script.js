const draw_button = document.querySelector('.draw');
const display_output = document.querySelector('.display_output');
const start_button = document.querySelector('.start');
const stop_button = document.querySelector('.stop');
const restart_button = document.querySelector('.restart');

let animationTimeouts = [];  
let isAnimating = false;


draw_button.addEventListener('click', () => {
    const numRows = parseInt(document.querySelector('.pyramid .input').value);
    display_output.innerHTML = ''; 
    for (let i = 1; i <= numRows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.display = 'flex';
        rowDiv.style.justifyContent = 'center';

        for (let j = 0; j < i; j++) {
            circle.classList.add('.circle_row')
            rowDiv.appendChild(circle);
        }
        
        display_output.appendChild(rowDiv);
    }
    });

start_button.addEventListener('click', () => {
    start_button.disabled = true;
    stop_button.disabled = false;

    const rows = display_output.querySelectorAll('div'); 
    
    rows.forEach((row, index) => {
        setTimeout(() => {
            row.style.opacity = 1;
            animateRow(row); 
        }, index * 100); 
    });

    function animateRow(row) {
        const circles = row.querySelectorAll('div');
        circles.forEach((circle, index) => {
            setTimeout(() => {
                circle.style.transition = 'transform 0s ease, opacity 0.3s ease';
                circle.style.transform = 'scale(1.1)'; 
                circle.style.opacity = 1; 
                circle.style.backgroundColor = 'green'; 
            }); 
        });
    }
});

stop_button.addEventListener('click', () => {
    start_button.disabled = false;
    stop_button.disabled = true;

    const rows = display_output.querySelectorAll('div');
    rows.forEach((row) => {
        row.style.opacity = 0;
        const circles = row.querySelectorAll('div');
        circles.forEach((circle) => {
            circle.style.transform = 'scale(1)';
            circle.style.backgroundColor = 'white';
        });
    });

    // animationTimeouts.forEach(timeout => clearTimeout(timeout));
});

restart_button.addEventListener('click', () => {
    start_button.disabled = false;
    stop_button.disabled = true;

    display_output.innerHTML = '';
});

