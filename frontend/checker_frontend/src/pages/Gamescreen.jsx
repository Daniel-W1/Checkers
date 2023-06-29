import React, { useEffect, useState } from 'react'
import CapturedContainer from '../components/Capturedcontainer'
import Board from '../components/board'

const GameScreen = () => {
    const [red, setred] = useState(0);
    const [white, setwhite] = useState(0);

    useEffect(() => {
        console.log('red', red);
        console.log('white', white);
    }, [red, white]);

    return (
        <div className="flex flex-col md:flex-row justify-center items-center h-screen w-full">
          <CapturedContainer count={white} type="white" />
          <Board functocall_one={setred} functocall_two={setwhite}/>
          <CapturedContainer count={red} type="red" />
        </div>
      );
      
}

export default GameScreen