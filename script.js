const canvas = document.getElementById('drawingBoard');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const clearButton = document.getElementById('clearButton');
const undoButton = document.getElementById('undoButton');
const aiSuggestButton = document.getElementById('aiSuggestButton');
const commandInput = document.getElementById('commandInput');
const executeCommandButton = document.getElementById('executeCommandButton');

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.7;

let isDrawing = false;
let drawingHistory = []; // Array to store each drawing state

// Function to save the current canvas state to the history
function saveState() {
    drawingHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
}

// Start drawing on mouse down
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    saveState(); // Save the current state before drawing
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
});

// Draw on mouse move
canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.strokeStyle = colorPicker.value;
        ctx.lineWidth = 2;
        ctx.stroke();
    }
});

// Stop drawing on mouse up or leave
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.closePath();
});
canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
    ctx.closePath();
});

// Clear the canvas
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawingHistory = []; // Clear history when clearing the canvas
});

// Undo the last action
undoButton.addEventListener('click', () => {
    if (drawingHistory.length > 0) {
        ctx.putImageData(drawingHistory.pop(), 0, 0);
    } else {
        alert("Nothing to undo!");
    }
});

// AI Suggest Color
aiSuggestButton.addEventListener('click', () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33B8', '#33FFF5'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorPicker.value = randomColor;
});

// Execute Command
executeCommandButton.addEventListener('click', () => {
    const command = commandInput.value.toLowerCase();
    ctx.fillStyle = colorPicker.value;

    if (command.includes('draw dorimon')) {
        drawDorimon();
        alert('Drawing Dorimon');
    } else {
        alert('Unknown command. Please type "draw dorimon".');
    }

    commandInput.value = '';
});

// Function to draw Dorimon
function drawDorimon() {
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 40, 0, Math.PI * 2);
    ctx.fillStyle = '#00A9E0';
    ctx.fill();
    ctx.closePath();

    // Eyes
    ctx.beginPath();
    ctx.arc(canvas.width / 2 - 15, canvas.height / 2 - 10, 5, 0, Math.PI * 2);
    ctx.arc(canvas.width / 2 + 15, canvas.height / 2 - 10, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.closePath();

    // Mouth
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2 + 10, 20, 0, Math.PI);
    ctx.fillStyle = '#FF0000';
    ctx.fill();
    ctx.closePath();
}
