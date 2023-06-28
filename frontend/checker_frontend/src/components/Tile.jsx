import React from 'react';
import white from '../assets/white.png';
import red from '../assets/red.png';
import dot from '../assets/dot.png';

const Tile = ({ piece, tileId, onclickfunc}) => {
  let image = null;
  if (piece === 'white') {
    image = white;
  } else if (piece === 'red') {
    image = red;
  }
  else if (piece === 'highlighted') {
    image = dot;
  }
  const padding = image !== dot ? 'p-1' : 'p-4';

  // tile background color based on tileId parity
  let tileColor = null;
  if (Math.floor((tileId + 7) / 8) % 2 === 0) {
    tileColor = tileId % 2 === 0 ? 'bg-black' : 'bg-slate-200';
  } else {
    tileColor = tileId % 2 === 0 ? 'bg-slate-200' : 'bg-black';
  }
  

  return (
    <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 ${tileColor} border ${padding}`} onClick={(e) => {
        // log the key of the tile that was clicked
        onclickfunc(tileId, e)
    }}>
      {image ? <img src={image} alt='piece' /> : null}
    </div>
  );
};

export default Tile;
