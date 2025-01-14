// const draw_button = document.querySelector('.draw');
// const display_output = document.querySelector('.display_output');
const start_button = document.querySelector('.start');
const stop_button = document.querySelector('.stop');
const restart_button = document.querySelector('.restart');
// const delayInput=document.querySelector('.delay')
const delay = 500;


// delayInput.addEventListener('input',(e)=>{
//     delay=e.target.value
// })

// draw_button.addEventListener('click', () => {
//     const numRows = parseInt(document.querySelector('.pyramid .input').value);
//     display_output.innerHTML = ''; 
//     for (let i = 1; i <= numRows; i++) {
//         const rowDiv = document.createElement('div');
//         rowDiv.style.display = 'flex';
//         rowDiv.style.justifyContent = 'center';

//         for (let j = 0; j < i; j++) {
//             const circle = document.createElement('div');
//             circle.style.width = '20px';
//             circle.style.height = '20px';
//             circle.style.border = '2px solid white';
//             circle.style.borderRadius = '50%';
//             circle.style.margin = '5px';

//             rowDiv.appendChild(circle);
//         }

//         display_output.appendChild(rowDiv);
//     }
//     });

//     start_button.addEventListener('click', () => {
//     start_button.disabled = true;
//     stop_button.disabled = false;

//     const rows = display_output.querySelectorAll('div'); 
    
//     rows.forEach((row, index) => {
//         setTimeout(() => {
//             row.style.opacity = 1;
//             animateRow(row); 
//         },index*delay); 
//     });

//     function animateRow(row) {
//         const circles = row.querySelectorAll('div');
//         circles.forEach((circle, index) => {
//             setTimeout(() => {
//                 circle.style.transition = 'transform 0s ease, opacity 0.3s ease';
//                 circle.style.transform = 'scale(1.1)'; 
//                 circle.style.opacity = 1; 
//                 circle.style.backgroundColor = 'green'; 
//             }); 
//         });
//     }
// });
let innnnt ;
stop_button.addEventListener('click', () => {
    start_button.disabled = true;
    stop_button.disabled = false;

   clearInterval(innnnt)
   clearTimeout(innnnt)

});

// restart_button.addEventListener('click', () => {
//     start_button.disabled = true;
//     stop_button.disabled = false;

//     display_output.innerHTML = '';
// });

 const draw_button = document.querySelector('.draw');
 const display_output = document.querySelector('.display_output');
 const delayInput = document.querySelector('.delay');

 draw_button.addEventListener('click', () => {
    const numRows = parseInt(document.querySelector('.pyramid .input').value);
    display_output.innerHTML = ''; 
    for (let i = 1; i <= numRows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.display = 'flex';
        rowDiv.style.justifyContent = 'center';

        for (let j = 0; j < i; j++) {
            .circle.

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
     innnnt =   setTimeout(() => {
            row.style.opacity = 1;
            animateRow(row); 
        },index*delay); 
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

