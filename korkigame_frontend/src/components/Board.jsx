import React, { useEffect, useState } from 'react';
import Tile from './tile';
import { clearIlluminatePossibleMoves, illuminatePossibleMoves } from '../gamelogic/illuminate';
import { movekorki } from '../gamelogic/movekorki';
import { GameOver, validateMove } from '../gamelogic/validatemove';
import { CalculateCapturedPieces } from '../gamelogic/other';

const Board = ({functocall_one, functocall_two}) => {
    const [firstTile, setFirstTile] = useState(null);
    const [secondTile, setSecondTile] = useState(null);
    const [tiles, settiles] = useState([]);
    const [turn, setturn] = useState('white');
    const [possibleMoves, setpossibleMoves] = useState([])

    const functocall = (newTiles) => {
        // console.log('functocall', newTiles);
        settiles(newTiles);
    };


    const handleTileClick = (tileId, event) => {
        // console.log('Tile ' + tileId + ' was clicked. It contains a ' + event.target + ' piece.');
        // if the event target is not a piece, if it's an htmldivelement, then return
        const noteimage = event.target.tagName !== 'IMG';
        // console.log(noteimage, 'noteimage', event.target.tagName);

        if (noteimage && firstTile === null) {
            console.log('No piece on this tile');
            return;
        }
        const piece = noteimage ? null : event.target.src.includes('white') ? 'white' : 'red';

        if (firstTile === null) {
            if (piece !== turn) {
                console.log('Not your turn');
                return;
            }
            setFirstTile({ id: tileId, piece: event.target });
            return;
        }

        if (secondTile === null) {
            // console.log('Second tile is null');
            const check = validateMove(firstTile, tileId, possibleMoves);
            // console.log(check, 'check result');
            if (!check && !noteimage) {
                const newTiles = clearIlluminatePossibleMoves(tiles);
                settiles(newTiles);

                if (piece !== turn) {
                    console.log('Not your turn');
                    return;
                }

                setFirstTile({ id: tileId, piece: event.target });
                return;
            };
            if (check) {
                setSecondTile({ id: tileId, piece: event.target });
                return;
            }
            console.log('Invalid move');
        }
    };


    useEffect(() => {
        const initialTiles = [];

        for (let i = 1; i <= 64; i++) {
            // make this configuration of checkers pieces
            let piece = 'empty';
            const isDarkSquare = (i + Math.floor((i - 1) / 8)) % 2 === 0;

            if (isDarkSquare && i <= 24) {
                piece = 'white';
            }
            if (isDarkSquare && i >= 41) {
                piece = 'red';
            }
           
            // console.log(piece, 'piece');
            initialTiles.push({ tileId: i, piece: piece });
        }
        settiles(initialTiles);

    }, []);

    useEffect(() => {
        if (firstTile !== null) {
            const possibleMoves = illuminatePossibleMoves(firstTile, tiles, functocall);
            console.log(possibleMoves, 'possibleMoves');
            setpossibleMoves(possibleMoves);
        }

        // console.log(tiles, 'tiles');

        if (firstTile !== null && secondTile !== null) {
            console.log('Moving from ' + firstTile.id + ' to ' + secondTile.id, secondTile.piece, 'piece');
            const clearedTiles = clearIlluminatePossibleMoves(tiles);
            settiles(clearedTiles);

            const newTiles = movekorki(firstTile, secondTile, tiles, possibleMoves);
            const [redCaptured, whiteCaptured] = CalculateCapturedPieces(newTiles);
            functocall_one(redCaptured);
            functocall_two(whiteCaptured);

            const [value, winner] = GameOver(newTiles);

            if (value) {
                console.log('Game over, winner is ' + winner);
            }

            // Perform the move logic here
            setFirstTile(null);
            setSecondTile(null);
            settiles(newTiles);
            setturn(turn === 'white' ? 'red' : 'white')
            
        }
    }, [firstTile, secondTile]);



    return (
    <div className='flex flex-col justify-center items-center border-4 bg-amber-800 border-black py-5 px-5 md:py-10 md:px-10 sm:border-2'>
        <div className='flex flex-col justify-center items-center'>
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
    </div>
    );
};

export default Board;
