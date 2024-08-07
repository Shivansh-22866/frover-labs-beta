"use client";
import React from 'react';

const AsyncButton = ({ buttonRef, onClickRun }) => {
    const { current: buttonState } = buttonRef;


    return (
        <div className="flex flex-col items-center gap-2 bg-red-300 w-screen h-screen">
            <button
                className={`py-2 px-4 text-white rounded-lg ${buttonState.bgColorClass} ${buttonState.loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={buttonState.loading}
                onClick={onClickRun}
                style={{ transition: 'background-color 0.3s ease' }}
            >
                <div className="flex items-center justify-center text-black">
                    {buttonState.text}
                </div>
            </button>
            {buttonState.subText && <div className="text-xs text-black mt-1">{buttonState.subText}</div>}
        </div>
    );
};

export default AsyncButton;
