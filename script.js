var pos = 0;
const pacArray = [
    ['PacPill1.png', 'PacPill2.png'],
    ['PacPill3.png', 'PacPill4.png']
];
var direction = 0;
var focus = 0;
var animation;

function Run() {
    let img = document.getElementById("PacPill");
    let imgWidth = img.width;
    focus = (focus + 1) % 2;
    direction = checkPageBounds(direction, imgWidth);
    img.src = pacArray[direction][focus];
    if (direction) {
        pos -= 10;
        img.style.left = pos + "px";
    } else {
        pos += 10;
        img.style.left = pos + 'px';
    }
    animation = setTimeout(Run, 150); // Call Run every 150 milliseconds
}

function checkPageBounds(direction, imgWidth) {
    let pageWidth = window.innerWidth;
    if (pos >= pageWidth - imgWidth) {
        direction = 1; // Change direction to left
    }
    if (pos <= 0) {
        direction = 0; // Change direction to right
    }
    return direction;
}

function startAnimation() {
    Run();
}

function stopAnimation() {
    clearTimeout(animation);
}

function resetAnimation() {
    stopAnimation();
    pos = 0;
    document.getElementById("PacPill").style.left = pos + "px";
}

window.onload = startAnimation; // Start the animation when the window loads
