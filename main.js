function preload() {
}

function setup() {
    canvas = createCanvas(480, 360);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 480, 360);
    fill("purple")
    circle(30, 73, 50)

    fill("purple")
    circle(30, 330, 50)

    fill("orange")
    circle(450, 330, 50)

    fill("orange")
    circle(450, 73, 50)

    fill("red")
    rect(435, 95, 30, 210)

    fill("red")
    rect(15, 95, 30, 210)

    fill("blue")
    rect(50, 60, 380, 30)

    fill("blue")
    rect(50, 315, 380, 30)

    tint(tint_color);
}

function take_snapshot() {
    save("framed_picture_filtered.png");
}

function applyFilter() {
    tint_color = document.getElementById("color_name").value;
}