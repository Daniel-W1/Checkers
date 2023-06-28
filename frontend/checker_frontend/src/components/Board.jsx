import React, { useEffect, useState } from 'react';
import Tile from './tile';

const Board = () => {
    const [firstTile, setFirstTile] = useState(null);
    const [secondTile, setSecondTile] = useState(null);
    const [tiles, settiles] = useState([]);

    useEffect(() => {
        const initialTiles = [];

        for (let i = 1; i <= 64; i++) {
            if (i <= 16) {
                initialTiles.push({ tileId: i, piece: `white` });
            } else if (i >= 49) {
                initialTiles.push({ tileId: i, piece: `red` });
            } else {
                initialTiles.push({ tileId: i, piece: `empty` });
            }
        }
        settiles(initialTiles);

    }, []);

    const handleTileClick = (tileId, event) => {
        console.log('Tile ' + tileId + ' was clicked. It contains a ' + event.target + ' piece.');
        // if the event target is not a piece, if it's an htmldivelement, then return
        if (event.target.tagName !== 'IMG' && firstTile === null) {
            console.log('No piece on this tile');
            return;
        }

        if (firstTile === null) {
            setFirstTile({ id: tileId, piece: event.target });
            return;
        }

        if (secondTile === null) {
            setSecondTile({ id: tileId, piece: event.target });
        }
    };

    const movekorki = (firstTile, secondTile) => {
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




    useEffect(() => {
        if (firstTile !== null && secondTile !== null) {
            console.log('Moving from ' + firstTile.id + ' to ' + secondTile.id);

            const newTiles = movekorki(firstTile, secondTile);
            // Perform the move logic here
            setFirstTile(null);
            setSecondTile(null);
            settiles(newTiles);
        }
    }, [firstTile, secondTile]);


    return (
        <div className='flex flex-col justify-center items-center h-screen w-full'>
            <div className='flex'>
                {tiles.slice(0, 8).map((tile) => (
                    <Tile key={tile.tileId} tileId={tile.tileId} piece={tile.piece} onclickfunc={handleTileClick} />
                ))}
            </div>
            <div className='flex'>
                {tiles.slice(8, 16).map((tile) => (
                    <Tile key={tile.tileId} tileId={tile.tileId} piece={tile.piece} onclickfunc={handleTileClick} />
                ))}
            </div>
            <div className='flex'>
                {tiles.slice(16, 24).map((tile) => (
                    <Tile key={tile.tileId} tileId={tile.tileId} piece={tile.piece} onclickfunc={handleTileClick} />
                ))}
            </div>
            <div className='flex'>
                {tiles.slice(24, 32).map((tile) => (
                    <Tile key={tile.tileId} tileId={tile.tileId} piece={tile.piece} onclickfunc={handleTileClick} />
                ))}
            </div>
            <div className='flex'>
                {tiles.slice(32, 40).map((tile) => (
                    <Tile key={tile.tileId} tileId={tile.tileId} piece={tile.piece} onclickfunc={handleTileClick} />
                ))}
            </div>
            <div className='flex'>
                {tiles.slice(40, 48).map((tile) => (
                    <Tile key={tile.tileId} tileId={tile.tileId} piece={tile.piece} onclickfunc={handleTileClick} />
                ))}
            </div>
            <div className='flex'>
                {tiles.slice(48, 56).map((tile) => (
                    <Tile key={tile.tileId} tileId={tile.tileId} piece={tile.piece} onclickfunc={handleTileClick} />
                ))}
            </div>
            <div className='flex'>
                {tiles.slice(56, 64).map((tile) => (
                    <Tile key={tile.tileId} tileId={tile.tileId} piece={tile.piece} onclickfunc={handleTileClick} />
                ))}
            </div>
        </div>
    );
};

export default Board;
