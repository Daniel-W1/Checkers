export const illuminatePossibleMoves = (tile, tiles, functocall) => {
        // get the type of piece
        const piece = tile.piece.src.includes('white') ? 'white' : 'red';
        const tileid = tile.id;

        // console.log(piece);

        if (piece === 'white'){
            let tileOne = (tileid + 7) <= 64 && (tileid + 7) > 0 ? tileid + 7: null;
            let tileTwo = (tileid + 9) <= 64 && (tileid + 9) > 0 ? tileid + 9: null;

            if (tileid % 8 === 0){
                tileTwo = null;
            }
            else if ((tileid - 1) % 8 === 0){
                tileOne = null;
            }

            // console.log(tileOne, tileTwo);

            const newTiles = tiles.map((curTile) => {
                if ((curTile.tileId === tileOne || curTile.tileId === tileTwo) && curTile.piece === 'empty') {
                    curTile.piece = 'highlighted';
                }
                // else if (curTile.tileId === tileOne || curTile.piece !== piece ){
                //     let captureTile = (curTile.tileId + 7) <= 64 && (curTile.tileId + 7) > 0 ? curTile.tileId + 7: null;
                    
                //     // check if the capture tile is empty
                //     if (captureTile !== null && tiles[captureTile - 1].piece === 'empty'){
                //         // highlight the capture tile
                //         tiles[captureTile - 1].piece = 'highlighted';
                //     }

                // }
                // else if (curTile.tileId === tileTwo || curTile.piece !== piece){

                // }
                return curTile;
            });

            functocall(newTiles);
        }
        else{
            let tileOne = (tileid - 7) <= 64 && (tileid - 7) > 0 ? tileid - 7: null;
            let tileTwo = (tileid - 9) <= 64 && (tileid - 9) > 0 ? tileid - 9: null;

            if (tileid % 8 === 0){
                tileOne = null;
            }
            else if ((tileid - 1) % 8 === 0){
                tileTwo = null;
            }

            const newTiles = tiles.map((tile) => {
                if ((tile.tileId === tileOne || tile.tileId === tileTwo) && tile.piece === 'empty') {
                    tile.piece = 'highlighted';
                }
                return tile;
            });

            functocall(newTiles);
        }
    };

export const clearIlluminatePossibleMoves = (tiles) => {
    const newTiles = tiles.map((tile) => {
        if (tile.piece === 'highlighted') {
            tile.piece = 'empty';
        }
        return tile;
    });

    return newTiles;
}