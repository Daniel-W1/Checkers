export const validateMove = (firstTile, secondTileid, validMoves) =>{
    const piece = firstTile.piece.src.includes('white') ? 'white' : 'red';
    const tileid = firstTile.id;
    console.log('Validating move');

    return validMoves.includes(secondTileid);

}

// in this version of checkers first guy to get to the other side wins
export const GameOver = (tiles)=>{

    console.log(tiles, 'tiles');
   for (let i = 0; i < 8; i++){
       if (tiles[i].piece.includes('red')){
           return [true, 'red'];
       }
   }
   
    for (let i = 56; i < 64; i++){
        if (tiles[i].piece.includes('white')){
            return [true, 'white'];
        }
    }

    return [false, null];
}
    