export const illuminatePossibleMoves = (tile, tiles, functocall) => {
        // get the type of piece
        const piece = tile.piece.src.includes('white') ? 'white' : 'red';
        const tileid = tile.id;
        let possibleTiles = [];

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
                    possibleTiles.push(curTile.tileId);
                }
                else if ((curTile.tileId === tileOne) && curTile.piece === 'red') {
                    if ((tileOne + 7) <= 64 && (tileOne + 7) > 0 && tiles[tileOne + 7 - 1].piece === 'empty' && (tileOne) % 8 !== 0 && (tileOne - 1) % 8 !== 0){
                        // console.log('here');
                        tiles[tileOne + 7 - 1].piece = 'highlighted';
                        possibleTiles.push(tiles[tileOne + 7 - 1].tileId);
                    }
                }
                else if ((curTile.tileId === tileTwo) && curTile.piece === 'red') {
                    if ((tileTwo + 9) <= 64 && (tileTwo + 9) > 0 && tiles[tileTwo + 9 - 1].piece === 'empty' && (tileTwo) % 8 !== 0 && (tileTwo - 1) % 8 !== 0){
                        // console.log('here');
                        tiles[tileTwo + 9 - 1].piece = 'highlighted';
                        possibleTiles.push(tiles[tileTwo + 9 - 1].tileId);
                    }
                }


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
                    possibleTiles.push(tile.tileId);
                }
                else if ((tile.tileId === tileOne) && tile.piece === 'white') {
                    if ((tileOne - 7) <= 64 && (tileOne - 7) > 0 && tiles[tileOne - 7 - 1].piece === 'empty' && (tileOne) % 8 !== 0 && (tileOne - 1) % 8 !== 0){
                        // console.log('here');
                        tiles[tileOne - 7 - 1].piece = 'highlighted';
                        possibleTiles.push(tiles[tileOne - 7 - 1].tileId);
                    }
                }
                else if ((tile.tileId === tileTwo) && tile.piece === 'white') {
                    if ((tileTwo - 9) <= 64 && (tileTwo - 9) > 0 && tiles[tileTwo - 9 - 1].piece === 'empty' && (tileTwo) % 8 !== 0 && (tileTwo - 1) % 8 !== 0){
                        // console.log('here');
                        tiles[tileTwo - 9 - 1].piece = 'highlighted';
                        possibleTiles.push(tiles[tileTwo - 9 - 1].tileId);
                    }
                }

                return tile;
            });

            functocall(newTiles);
        }

        return possibleTiles;
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