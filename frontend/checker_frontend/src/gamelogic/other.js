export const CalculateCapturedPieces = (tiles) => {
    console.log(tiles, 'tiles');

    let CapturedRedPieces = 12;
    let CapturedWhitePieces = 12;

    for (let index = 0; index < 64; index++) {
        if (tiles[index].piece.includes('red')) {
            CapturedRedPieces--;
        }
        else if (tiles[index].piece.includes('white')) {
            CapturedWhitePieces--;
        }
    }

    return [CapturedRedPieces, CapturedWhitePieces];

}
