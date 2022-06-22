function setup() {
    createCanvas(800, 500);
    angleMode(DEGREES);
}

let angle = 0;

function draw() {
    background(225);
    translate(width/2, height + 100);
    stroke(0);
    strokeWeight(2);
    if (angle < 40) angle += 0.1
    branch(150);
}


function branch(length) {
    if (length > 5) {
        line(0, 0, 0, -length);
        push();
        translate(0, -length);
        rotate(angle);
        branch(length*0.72);
        pop();
        translate(0, -length);
        rotate(-angle);
        branch(length*0.72);
    } 
}

