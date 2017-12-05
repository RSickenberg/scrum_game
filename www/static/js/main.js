const DEPLACEMENT_VALUE = 7;

document.onkeydown = pushKey;

function devShow() {
    window.open('pages/components.html', '_blank');
}

function pushKey(event) {

    var element = document.getElementById('exampleGuy');

    if (event.keyCode === 38 || event.keyCode === 87) {
        // FORWARD
        var top = parseInt(element.style.top);
        element.style.top = top - DEPLACEMENT_VALUE + 'px';
    }

    if (event.keyCode === 40 || event.keyCode === 83) {
        // DOWN
        var down = parseInt(element.style.top);
        element.style.top = down + DEPLACEMENT_VALUE + 'px';
    }

    if (event.keyCode === 39 || event.keyCode === 68) {
        // RIGHT
        var right = parseInt(element.style.left);
        element.style.left = right + DEPLACEMENT_VALUE + 'px';
    }

    if (event.keyCode === 37 || event.keyCode === 65) {
        // LEFT
        var left = parseInt(element.style.left);
        element.style.left = left - DEPLACEMENT_VALUE + 'px';
        console.log(event);
    }

    if (event.keyCode === 32) {
        // UP
        var topPosition = parseInt(element.style.top);
        element.classList.add('jumping');
        element.style.top = topPosition - 5 + 'px';
        // Set timeout to remove the action class
        setTimeout(function() {
            element.style.top = topPosition + 5 - 5 + 'px';
            element.classList.remove('jumping');
        }, 520)
    }
}

