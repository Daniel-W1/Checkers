export const movekorki = (firstTile, secondTile, tiles) => {
    let firstTilePiece = firstTile.piece;
    
    // extract the src of the image
    let firstTilePieceSrc = firstTilePiece.src;
    const korki = firstTilePieceSrc.includes('white') ? 'white' : 'red';
    
    // console.log(firstTilePieceSrc);
    const updatedTiles = tiles.map((tile) => {
        if (tile.tileId === firstTile.id) {
            tile.piece = 'empty';
        } else if (tile.tileId === secondTile.id) {
            tile.piece = `${korki}`;
        }
        return tile;
    }
    );
    return updatedTiles;
}