const canvas= document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// ctx.fillStyle = 'green';
// ctx.fillRect(10,10, 100, 100);

// ctx.fillStyle = 'red';
// ctx.fillRect(50,50, 100, 100);

ctx.beginPath();
ctx.moveTo(75,50);
ctx.lineTo(150,50);
ctx.lineTo(108,25);
ctx.fill();

ctx.beginPath();
ctx.arc(108,50,50,0,Math.PI*2, true);
ctx.stroke();