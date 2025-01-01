import React, { useState, useEffect } from 'react'

const UseEffectPractice = () => {
    const [bgColorRandom, setBgColorRandom] = useState('bg-white');

    useEffect(() => {
        const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-orange-500'];

        const changeColors = () => {
            for (let i = 0; i < colors.length; i++) {
                setTimeout(() => {
                    setBgColorRandom(colors[i]);
                }, i * 2500);
            }
        };

        const clearColors = setTimeout(changeColors, colors.length * 2500);
        changeColors();

        return () => clearTimeout(clearColors);
    }, []);
    return (
        <div className={`min-h-screen ${bgColorRandom}`}>
        </div>
    )
}

export default UseEffectPractice