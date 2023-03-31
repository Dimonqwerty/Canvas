const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");


context.fillStyle = "yellow";
context.beginPath();
context.arc(300, 300, 250, 0, Math.PI * 2);
context.closePath();
context.fill();

context.strokeStyle = "black";
context.lineWidth = 3;
context.beginPath();
context.arc(300, 300, 250, 0, Math.PI * 2);
context.closePath();
context.stroke();


context.fillStyle = "black";
context.beginPath();
context.ellipse(400, 250, 50, 100, 0, 0, Math.PI * 2);
context.closePath();
context.fill();

context.fillStyle = "black";
context.beginPath();
context.ellipse(200, 250, 50, 100, 0, 0, Math.PI * 2);
context.closePath();
context.fill();

context.strokeStyle = "black";
context.lineWidth = 2;
context.beginPath();
context.arc(300, 310, 150, Math.PI * 0.8, Math.PI * 2.2, true);
context.stroke();