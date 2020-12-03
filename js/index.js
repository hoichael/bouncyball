const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext("2d");

const hitSFX = new Audio("audio/ball_hit.mp3");

let posX = (window.innerWidth)/2;
let posY = (window.innerHeight)/2;
let velX = 3;
let velY = 3;
let radius = 30;

let currentX = 0;
let currentY = 0;

let after1X = 0;
let after1Y = 0;
let after1Radius = 30;

let after2X = 0;
let after2Y = 0;
let after2Radius = 30;

let after3X = 0;
let after3Y = 0;
let after3Radius = 30;

let iterator = 0;

function animBall() {
    requestAnimationFrame(animBall);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.beginPath();
    context.arc(posX, posY, radius, 0, Math.PI * 2, false);
    context.strokeStyle = "green";
    context.stroke();

    if(posX + radius > window.innerWidth || posX - radius < 0) {
        velX = -velX;
        hitSFX.currentTime = 0;
        hitSFX.play();
    }

    if(posY + radius > window.innerHeight || posY - radius < 0) {
        velY = -velY;
        hitSFX.currentTime = 0;
        hitSFX.play();
    }

    if(iterator == 50)
    {
        after1X = posX;
        after1Y = posY;
        drawTrail1();
        console.log("1")

    } else if(iterator == 100) {
        after2X = posX;
        after2Y = posY;
        drawTrail2();
        console.log("2")
    } else if(iterator == 150) {
        after3X = posX;
        after3Y = posY;
        drawTrail3();
        iterator = 0;
        console.log("3")
    }

    posX += velX;
    posY += velY;
    iterator++;
}

animBall();

function drawTrail1() {

    context.beginPath();
    context.arc(after1X, after1Y, after1Radius, 0, Math.PI * 2, false);
    context.strokeStyle = "green";
    context.stroke();

    after1Radius -= 0.2;

    if(after1Radius > 0.1) {
        requestAnimationFrame(drawTrail1)
    } else {
        after1Radius = 30;
    }

}

function drawTrail2() {

    context.beginPath();
    context.arc(after2X, after2Y, after2Radius, 0, Math.PI * 2, false);
    context.strokeStyle = "green";
    context.stroke();

    after2Radius -= 0.2;

    if(after2Radius > 0.1) {
        requestAnimationFrame(drawTrail2)
    } else {
        after2Radius = 30;
    }

}

function drawTrail3() {

    context.beginPath();
    context.arc(after3X, after3Y, after3Radius, 0, Math.PI * 2, false);
    context.strokeStyle = "green";
    context.stroke();

    after3Radius -= 0.2;

    if(after3Radius > 0.1) {
        requestAnimationFrame(drawTrail3)
    } else {
        after3Radius = 30;
    }

}