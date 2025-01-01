import React from 'react';
import { useSearchParams } from 'react-router-dom';
const TestPramas = () => {
    const [, setSearchParams] = useSearchParams();
    const handlerSwitch = (params) => {
        setSearchParams(params);
    };

    return (
        <div className="flex items-center gap-10 justify-center h-screen max-sm:flex-col bg-black">
            <button
                onClick={() => handlerSwitch({ name: 'Box-one', id: '1' })}
                className="p-2 bg-gray-500  text-white rounded transition-all ease-linear duration-200 hover:bg-white hover:text-black"
            >Box-One
            </button>
            <button
                onClick={() => handlerSwitch({ name: 'Box-two', id: '2' })}
                className="p-2 bg-gray-500  text-white rounded transition-all ease-linear duration-200 hover:bg-white hover:text-black"
            >
                Box-Two
            </button>
            <button
                onClick={() => handlerSwitch({ name: 'Box-Three', id: '3' })}
                className="p-2 bg-gray-500  text-white rounded transition-all ease-linear duration-200 hover:bg-white hover:text-black"
            >
                Box-Three
            </button>
        </div>
    );
};

export default TestPramas;