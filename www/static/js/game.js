// Here is the game code

var map = {
    cols: 8,
    rows: 8,
    mapSize: 64,
    tiles: [
        1, 3, 3, 3, 1, 1, 3, 1,
        1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 2, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 2, 1, 1, 1, 1,
        1, 1, 1, 1, 2, 1, 1, 1,
        1, 1, 1, 1, 2, 1, 1, 1,
        1, 1, 1, 0, 0, 1, 1, 1
    ],
    getTile: function (col, row) {
        return this.tiles[row * map.cols + col];
    }
};

Game.load = function () {
    return [
        loader.loadImage('tiles', 'assets/texture/blocks/dirt/cd1.png'),
        loader.loadImage('tiles', 'assets/texture/blocks/dirt/cd2.png'),
        loader.loadImage('tiles', 'assets/texture/blocks/dirt/cd3.png'),
        loader.loadImage('tiles', 'assets/texture/blocks/dirt/d1.png'),
        loader.loadImage('tiles', 'assets/texture/blocks/dirt/d2.png'),
        loader.loadImage('tiles', 'assets/texture/blocks/dirt/d3.png'),
        loader.loadImage('character', 'assets/img/mex.png')
    ]
};

Game._drawLayer = function () {
    for (var c = 0; c < map.cols; c++) {
        for (var r = 0; r < map.rows; r++) {
            var tile = map.getTile(c, r);
            if (tile !== 0) {
                this.ctx.drawImage(
                    this.tileAtlas,
                    (tile - 1) * map.mapSize,
                    0,
                    map.mapSize,
                    map.mapSize,
                    c * map.mapSize,
                    r * map.mapSize,
                    map.mapSize,
                    map.mapSize
                )
            }
        }
    }
};

Game.init = function () {
    this.tileAtlas = loader.getImage('tiles');
    console.log(this.tileAtlas);
    this.hero = {x: 128, y: 384, image: loader.getImage('character')};
};

Game.render = function () {
    // draw map background layer
    this._drawLayer(0);
    // draw game sprites
    this.ctx.drawImage(this.hero.image, this.hero.x, this.hero.y);
    // draw map top layer
    this._drawLayer(1);
};