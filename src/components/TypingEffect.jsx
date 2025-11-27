import React, { useState, useEffect } from 'react';

const TypingEffect = ({ words, speed = 50, deleteSpeed = 30, pause = 1500 }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    useEffect(() => {
        if (index >= words.length) {
            setIndex(0); // Loop back
            return;
        }

        if (subIndex === words[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), pause);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? deleteSpeed : speed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, speed, deleteSpeed, pause]);

    return (
        <span className="inline-block">
            {words[index].substring(0, subIndex)}
            <span className={`${blink ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
        </span>
    );
};

export default TypingEffect;
