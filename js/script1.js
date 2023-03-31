const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
function blueBg() {
    context.beginPath()
    context.moveTo(0, 0)
    context.lineTo(800, 0)
    context.lineTo(800, 400)
    context.lineTo(0, 400)
    context.closePath()
    context.fillStyle = "#1631ca"
    context.fill()
}

function lightgreenBg() {
    context.beginPath()
    context.moveTo(0, 400)
    context.lineTo(800, 400)
    context.lineTo(800, 800)
    context.lineTo(0, 800)
    context.closePath()
    context.fillStyle = "#1d9323"
    context.fill()
}

function greenBg() {
    context.beginPath()
    context.moveTo(0, 530)
    context.lineTo(800, 530)
    context.lineTo(800, 800)
    context.lineTo(0, 800)
    context.closePath()
    context.fillStyle = "darkgreen"
    context.fill()
}
function zabor(width) {
    context.beginPath()
    context.moveTo(width, 400);
    context.lineTo(width, 530);
    context.lineWidth = 8;
    context.strokeStyle = 'brown';
    context.stroke();
}

function lightbrown() {
    context.beginPath()
    context.moveTo(200, 530)
    context.lineTo(600, 530)
    context.lineTo(600, 340)
    context.lineTo(200, 340)
    context.closePath()
    context.fillStyle = "#855b2e"
    context.fill()
}

function windows() {
    context.beginPath()
    context.moveTo(240, 500)
    context.lineTo(350, 500)
    context.lineTo(350, 380)
    context.lineTo(240, 380)
    context.closePath()
    context.fillStyle = "yellow"
    context.fill()

    context.beginPath()
    context.moveTo(440, 500)
    context.lineTo(550, 500)
    context.lineTo(550, 380)
    context.lineTo(440, 380)
    context.closePath()
    context.fillStyle = "yellow"
    context.fill()
}
function roof() {
    context.beginPath()
    context.moveTo(180, 340)
    context.lineTo(620, 340)
    context.lineTo(550, 250)
    context.lineTo(250, 250)
    context.closePath()
    context.fillStyle = "red"
    context.fill()
}

function sun() {
    context.beginPath();
    context.arc(100, 100, 50, 0, 2 * Math.PI)
    context.fillStyle = 'yellow'
    context.fill()

    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(150, 250)
    context.lineCap = 'round'
    context.lineWidth = 8;
    context.strokeStyle = 'yellow';
    context.stroke();

    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(350, 200)
    context.lineCap = 'round'
    context.lineWidth = 8;
    context.strokeStyle = 'yellow';
    context.stroke();

    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(120, 300)
    context.lineCap = 'round'
    context.lineWidth = 8;
    context.strokeStyle = 'yellow';
    context.stroke();
}

function clouds(width, height, radius) {
    context.beginPath();
    context.arc(width, height, radius, 0, 2 * Math.PI);
    context.fillStyle = 'white'
    context.fill()
}

blueBg()
lightgreenBg()
greenBg()
for (let i = 50; i <= 750; i += 50) {
    zabor(i)
}
lightbrown()
windows()
roof()

sun()
clouds(480, 100, 45)
clouds(512, 130, 30)
clouds(525, 130, 56)

clouds(680, 156, 39)
clouds(689, 196, 16)