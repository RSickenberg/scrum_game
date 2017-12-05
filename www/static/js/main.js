const DEPLACEMENT_VALUE = 5;

document.onkeydown = appuye;

function devShow() {
    window.open('pages/components.html', '_blank');
}

function showExample() {
    window.open('example/index.html', '_blank');
}

function appuye(event) {

    var example = document.getElementById('exampleGuy');

    if (event.keyCode === 38 || event.keyCode === 87) {
        // FORWARD
        var element = document.getElementById('exampleGuy');
        var top = parseInt(element.style.top);
        example.style.top = top + DEPLACEMENT_VALUE + 'px';
        console.log(top);
    }

    if (event.keyCode === 40 || event.keyCode === 83) {
        // DOWN
        console.log(event);
    }

    if (event.keyCode === 39 || event.keyCode === 68) {
        // RIGHT
        console.log(event);
    }

    if (event.keyCode === 37 || event.keyCode === 65) {
        // LEFT
        console.log(event);
    }

    if (event.keyCode === 32) {
        // UP
        console.log(event);
    }
}

