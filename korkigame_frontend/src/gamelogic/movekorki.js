export const movekorki = (firstTile, secondTile, tiles, validMoves) => {
    console.log(validMoves, 'validMoves');
    let firstTilePiece = firstTile.piece;
    
    // extract the src of the image
    let firstTilePieceSrc = firstTilePiece.src;
    const korki = firstTilePieceSrc.includes('white') ? 'white' : 'red';

    
    // console.log(firstTilePieceSrc);
    const updatedTiles = tiles.map((tile) => {
        if (tile.tileId === firstTile.id) {
            tile.piece = 'empty';
        } else if (validMoves.includes(tile.tileId) && tile.tileId === secondTile.id) {
            // check if the move is a jump
            if (Math.abs(firstTile.id - secondTile.id) > 9) {
                // clear the tile in between
                const tileInBetween = (firstTile.id + secondTile.id) / 2;
                tiles[tileInBetween - 1].piece = 'empty';
            }
            tile.piece = `${korki}`;
        }
        return tile;
    }
    );
    return updatedTiles;
}