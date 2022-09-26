// Canvas settings
const canvas = document.getElementById("myCanvas");
canvas.width = 200;

// Context
const ctx = canvas.getContext("2d");

// Car
const car = new Car(100, 100, 30, 50);

car.draw(ctx);

// Animate on key press or relase event
animate();

function animate(){
    car.update();
    canvas.height = window.innerHeight;
    car.draw(ctx);
    requestAnimationFrame(animate)
}