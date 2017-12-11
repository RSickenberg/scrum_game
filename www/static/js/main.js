const DISPLACEMENT_VALUE = 7;

var loader = {
    images: []
};

loader.loadImage = function (key, src) {
    var img = new Image();

    var d = new Promise(function (resolve, reject) {
        img.onload = function () {
            this.images[key] = img;
            resolve(img);
        }.bind(this);

        img.onerror = function () {
            reject('Erreur sur le chargement de l\'image : ' + src);
        }.bind(this);

        img.src = src;

        return d;
    })
};
document.onkeydown = pushKey;

function pushKey(event) {

    var element = document.getElementById('exampleGuy');

    if (event.keyCode === 38 || event.keyCode === 87) {
        // FORWARD
        var top = parseInt(element.style.top);
        element.style.top = top - DISPLACEMENT_VALUE + 'px';
    }

    if (event.keyCode === 40 || event.keyCode === 83) {
        // DOWN
        var down = parseInt(element.style.top);
        element.style.top = down + DISPLACEMENT_VALUE + 'px';
    }

    if (event.keyCode === 39 || event.keyCode === 68) {
        // RIGHT
        var right = parseInt(element.style.left);
        element.style.left = right + DISPLACEMENT_VALUE + 'px';
    }

    if (event.keyCode === 37 || event.keyCode === 65) {
        // LEFT
        var left = parseInt(element.style.left);
        element.style.left = left - DISPLACEMENT_VALUE + 'px';
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

////////////// PAGE GAME /////////////
