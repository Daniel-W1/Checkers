export const validateMove = (firstTile, secondTileid) =>{
    const piece = firstTile.piece.src.includes('white') ? 'white' : 'red';
    const tileid = firstTile.id;
    console.log('Validating move');

    if (piece === 'white'){
        let tileOne = (tileid + 7) <= 64 && (tileid + 7) > 0 ? tileid + 7: null;
        let tileTwo = (tileid + 9) <= 64 && (tileid + 9) > 0 ? tileid + 9: null;

        if (tileid % 8 === 0){
            tileTwo = null;
        }
        else if ((tileid - 1) % 8 === 0){
            tileOne = null;
        }

        if (secondTileid === tileOne || secondTileid === tileTwo){
            return true;
        }
        else{
            return false;
        }
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

        if (secondTileid === tileOne || secondTileid === tileTwo){
            return true;
        }
        else{
            return false;
        }
    }
 
}