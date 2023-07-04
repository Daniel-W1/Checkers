import React from 'react';
import white from '../assets/white.png';
import red from '../assets/red.png';

const CapturedContainer = ({ count, type }) => {
    const imageArray = Array.from({ length: count }, (_, index) => index);

    return (
        <div className='flex flex-col justify-center items-center w-full sm:w-96 mx-3 rounded-md'>
            <h1 className="text-center text-3xl font-bold capitalize text-cool  w-full  py-2">
                {type}
            </h1>
            <div className="flex flex-wrap">
                {imageArray.map((_, index) => (
                    <img
                        key={index}
                        src={type === 'white' ? white : red}
                        alt="piece"
                        className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mr-2 mb-2"
                    />
                ))}
            </div>
        </div>
    );
};

export default CapturedContainer;
