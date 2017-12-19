const DISPLACEMENT_VALUE = 17;

var loader = {
    images: {},
    music: {}
};

loader.loadImage = function (key, src) {
    var img = new Image();

    var d = new Promise(function (resolve, reject) {
        img.onload = function () {
            this.images[key] = img;
            resolve(img);
        }.bind(this);

        img.onerror = function () {
            reject('Could not load image: ' + src);
        };
    }.bind(this));

    d.catch(function(e) {
       console.log(e);
    });

    img.src = src;
    return d;
};

loader.loadMusic = function (key, src) {
    var music = new Audio();

    var m = new Promise(function (resolve, reject) {
        music.onload = function () {
            this.music[key] = music;
            console.log(this.music + ' has been loaded');
        }.bind(this);

        music.onerror = function () {
            reject('Can\' load this music: ' + src);
        };
    }.bind(this));

    music.src = src;
    return m;
};

loader.getImage = function (key) {
    return (key in this.images) ? this.images[key] : null;
};

loader.getMusic = function(key) {
    return (key in this.music) ? this.music[key] : null;
};


document.onkeydown = pushKey;

function pushKey(event) {

    var element = document.getElementById('exampleGuy');

    if (event.keyCode === 38 || event.keyCode === 87) {
        // FORWARD
        Game.moveHero(1);
    }

    if (event.keyCode === 40 || event.keyCode === 83) {
        // DOWN
        Game.moveHero(2);
    }

    if (event.keyCode === 39 || event.keyCode === 68) {
        // RIGHT
        Game.moveHero(3);
    }

    if (event.keyCode === 37 || event.keyCode === 65) {
        // LEFT
        Game.moveHero(4);
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

var Game = {};

Game.run = function (context) {
    this.ctx = context;
    this._previousElapsed = 0;

    var p = this.load();
    Promise.all(p).then(function (loaded) {
        this.init();
        window.requestAnimationFrame(this.tick);
    }.bind(this));
};

Game.tick = function (elapsed) {
    //window.requestAnimationFrame(this.tick);

    // clear previous frame
    this.ctx.clearRect(0, 0, 512, 512);

    // compute delta time in seconds -- also cap it
    var delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this._previousElapsed = elapsed;

    this.update(delta);
    this.render();
}.bind(Game);

function runGame () {
    var context = document.getElementById('game').getContext('2d');
    Game.run(context);
    document.getElementById('play').remove();
}
