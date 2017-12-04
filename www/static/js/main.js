const DEPLACEMENT_VALUE = "10px";

function devShow() {
    window.open('pages/components.html', '_blank');
}

function showExample() {
    window.open('example/index.html', '_blank');
}

function push(event) {
    if (event.keyCode === 38 || event.keyCode === 87) {
        // FOWARD
    }

    else if (event.keyCode === 40 || event.keyCode === 83) {
        // DOWN
    }

    else if (event.keyCode === 39 || event.keyCode === 68) {
        // RIGHT
    }

    else if (event.keyCode === 37 || event.keyCode === 65) {
        // LEFT
    }

    else if (event.keyCode === 32) {
        // UP
    }
}