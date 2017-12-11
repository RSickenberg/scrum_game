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

function drawLayer() {
    for (var c = 0; c < map.cols; c++) {
        for (var r = 0; r < map.rows; r++) {
            var tile = map.getTile(c, r)
            if (tile !== 0) {
                this.ctx
            }
        }
    }
}