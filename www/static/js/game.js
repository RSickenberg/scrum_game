// Here is the game code

var map = {
    cols: 42,
    rows: 22,
    mapSize: 32,
    tiles: [
        34, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 12, 6, 2, 2, 2, 2, 2, 2, 2,
        35, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2,
        35, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        35, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        35, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        35, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        34, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        34, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 13, 13, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        34, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 13, 13, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        34, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2,
        34, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2,
        34, 33, 33, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 10, 10, 10, 10, 10, 10, 10, 10, 6, 2, 2, 2, 2,
        34, 2, 33, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 10, 10, 10, 10, 10, 10, 10, 6, 6, 2, 2, 2, 2,
        35, 2, 33, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 10, 6, 6, 6, 6, 2, 2, 2, 2,
        35, 2, 33, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 2, 2, 2, 2, 2, 1, 6, 6, 6, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 10, 10, 6, 6, 6, 6, 2, 2, 2, 2,
        35, 2, 33, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 10, 10, 10, 10, 6, 6, 6, 6, 2, 2, 2, 2, 2,
        34, 2, 33, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2,
        34, 2, 33, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        34, 2, 33, 33, 33, 33, 33, 33, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        35, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        35, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        35, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        35, 2, 2, 2, 2, 2, 2, 2, 2, 21, 21, 21, 21, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
    ],
    getTile: function (col, row) {
        return this.tiles[row * map.cols + col];
    }
};

Game.load = function () {

    var image = [
        loader.loadImage('character', 'assets/img/mex.png'),
        loader.loadImage('tiles', 'assets/tiles2.png')
    ];

    var music = [
        loader.loadMusic('1', 'assets/music/1.mp3'),
        loader.loadMusic('2', 'assets/music/2.mp3'),
        loader.loadMusic('3', 'assets/music/3.mp3'),
        loader.loadMusic('4', 'assets/music/4.mp3')
    ];

    return image;// + music;
};

Game._drawLayer = function () {
    for (var c = 0; c < map.cols; c++) {
        for (var r = 0; r < map.rows; r++) {
            var tile = map.getTile(c, r);
            if (tile !== 0) {
                this.ctx.drawImage(
                    this.tileMinecraft, // image
                    (tile - 1) * map.mapSize, // source x
                    0, // source y
                    map.mapSize, // source width
                    map.mapSize, // source height
                    c * map.mapSize,  // target x
                    r * map.mapSize, // target y
                    map.mapSize, // target width
                    map.mapSize // target height
                )
            }
        }
    }
};

Game.init = function () {
    this.tileMinecraft = loader.getImage('tiles');
    this.hero = {x: 128, y: 384, image: loader.getImage('character')};
    //this.audio = loader.getMusic("1");

    setTimeout(function () {
        console.log(loader.getMusic('2'));
    }, 3000)
};

Game.render = function () {
    // draw map background layer
    this._drawLayer(0);
    // draw game sprites
    this.ctx.drawImage(this.hero.image, this.hero.x, this.hero.y);
};

Game.update = function (delta) {

};

Game.moveHero = function(command) {
    switch (command) {
        case 1:
            this.hero.y -= DISPLACEMENT_VALUE;
            Game.render();
            break;
        case 2:
            this.hero.y += DISPLACEMENT_VALUE;
            Game.render();
            break;
        case 3:
            this.hero.x += DISPLACEMENT_VALUE;
            Game.render();
            break;
        case 4:
            this.hero.x -= DISPLACEMENT_VALUE;
            Game.render();
            break;
    }
};