import React from 'react'
import { FaCoffee } from 'react-icons/fa';


const Navbar = () => {
    const [coffeeHover, coffeeSetHover] = React.useState(false);
    const handleCoffeeHover = () => {
        coffeeSetHover(true);
    };

    const handleCoffeeLeave = () => {
        coffeeSetHover(false);
    };
    const coffeeStyles = {
        button: `bg-[#616247FF] text-white text-xs px-2 py-1 rounded-md transition-all duration-300 ease-in-out ${coffeeHover ? 'transform scale-105' : ''}`,
    };

    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 border-b-2 border-[#DAA03DFF]'>
            <div className='flex items-center'>
                <div className='cursor-pointer'>
                    {/* <AiOutlineMenu size={30} /> */}
                </div>
                <h1 className='text-xl sm:text-2xl lg:text-3xl px-2'>
                <span className='font-bold text-[#DAA03DFF]'>台灣</span><span className='font-bold text-[#616247FF]'>岩館資訊</span>
                </h1>
                {/* hover:text-[#616247FF] hover:bg-[#DAA03DFF] */}
            </div>

            <div className='flex items-center'>

                <a href="https://store.line.me/stickershop/product/21320680/zh-Hant?ref=Desktop" className={coffeeStyles.button} onMouseEnter={handleCoffeeHover} onMouseLeave={handleCoffeeLeave}>
                <FaCoffee className='inline-block mr-3' />請我喝杯咖啡</a>
                {/* <button className='text-sm sm:text-base lg:text-lg xl:text-xl text-[#616247FF] hover:underline'>回饋</button> */}
            </div>

        </div>
    )
}

export default Navbar