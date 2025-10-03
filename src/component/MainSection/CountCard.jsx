import React from 'react';
import vImg from '../../assets/vector1.png'
import vImg2 from '../../assets/vector2.png'

const CountCard = ({text, countStatus, bgGre}) => {
    return (
        <div className={`  md:h-64  bg-amber-700 flex items-center justify-center  ${bgGre}`}>

            <img className='w-[145px] md:w-57 h-full' src={vImg} alt="" />
            <div className=' flex flex-col justify-center items-center text-white'>
                <p className=' font-normal text-[16px] md:text-2xl'>{text}</p>
                <p className=' font-semibold text-5xl md:text-6xl'>{countStatus}</p>
            </div>

            <img className='w-[145px] md:w-57 h-full' src={vImg2} alt="" />
        </div>
    );
};

export default CountCard;