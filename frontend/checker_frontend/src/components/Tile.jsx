import React from 'react';
import white from '../assets/white.png';
import red from '../assets/red.png';

const Tile = ({ piece, tileId, onclickfunc}) => {
  let image = null;
  if (piece === 'white') {
    image = white;
  } else if (piece === 'red') {
    image = red;
  }

  return (
    <div className='w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-slate-400 border border-black-300 p-1' onClick={(e) => {
        // log the key of the tile that was clicked
        onclickfunc(tileId, e)
    }}>
      {image ? <img src={image} alt='piece' /> : null}
    </div>
  );
};

export default Tile;
