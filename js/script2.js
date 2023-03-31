let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

context.beginPath();

context.moveTo(300, 300);
context.lineTo(600, 300);
context.lineTo(570, 350);
context.lineTo(330, 350);
context.closePath();
context.fillStyle = 'darkgreen';
context.fill();


context.beginPath();
context.moveTo(400, 300);
context.lineTo(450, 200);
context.lineTo(500, 300);
context.closePath();
context.fillStyle = 'red';
context.fill();

context.beginPath()
context.moveTo(450, 200)
context.lineTo(450, 180)
context.lineTo(480, 180)
context.lineTo(470, 190)
context.lineTo(480, 200)
context.closePath()
context.fillStyle = "blue"
context.fill()