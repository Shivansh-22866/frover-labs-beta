"use client"
import { useState, useRef } from 'react';
import { CircularProgress } from '@mui/material';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const useAsyncButton = (initialText = 'Click Me!') => {
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState(initialText);
    const [subText, setSubText] = useState('');
    const [bgColorClass, setBgColorClass] = useState('bg-purple-500');


    const ref = useRef({
        loading,
        text,
        subText,
        bgColorClass,
        setLoading,
        setText,
        setSubText,
        setBgColorClass,
    });

    ref.current = {
        loading,
        text,
        subText,
        bgColorClass,
        setLoading,
        setText,
        setSubText,
        setBgColorClass,
    };

    return ref;
};

export default useAsyncButton;
