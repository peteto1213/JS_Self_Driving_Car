// Canvas settings
const canvas = document.getElementById("myCanvas");
canvas.width = 200;

// Context
const ctx = canvas.getContext("2d");

// Road
const road = new Road(canvas.width/2, canvas.width * 0.9);

// Car - width the starting position and at which lane, e.g. lane 3
const car = new Car(road.getLaneCenter(1), 100, 30, 50);

car.draw(ctx);

// Animate on key press or relase event
animate();

function animate(){
    car.update();

    canvas.height = window.innerHeight;
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate)
}