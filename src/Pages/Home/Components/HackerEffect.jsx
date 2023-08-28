import React, { useState, useEffect, useRef } from 'react';
import { styled } from 'styled-components';

const PLACEHOLDER_TEXT = "HACKER EFFECT";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function HackerEffect() {
    const [text, setText] = useState('');
    const [hackerEffectText, setHackerEffectText] = useState(PLACEHOLDER_TEXT);
    const textRef = useRef();

    function previewEffect(e) {
        e.preventDefault()
        setHackerEffectText(text);
    }

    useEffect(() => {
        let interval = null;
        textRef.current.onmouseover = (e)=> applyEffect(e,interval);
        return () => {
            clearInterval(interval);
            textRef.current.onmouseover = null;
        }
    }, [hackerEffectText]);

    const applyEffect = (event,interval) => {
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    }

    return (
        <ComponentContainer>
            <h1>Hacker</h1>
            <form className='main' onSubmit={previewEffect}>
                <input placeholder='Type something..' maxLength={65} className='field' type="text" value={text} onChange={(e) => setText(e.target.value)} required />
                <button><img src="/update-white.png" alt="" /></button>
            </form>
            <p onMouseOver={applyEffect} ref={textRef} className='hacker-effect-text' data-value={hackerEffectText} key={hackerEffectText}>{hackerEffectText}</p>
            <img className="back" src="/hacker.gif" alt="" />
        </ComponentContainer>
    )
}





const ComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: black;
    min-height: 250px;
    max-width: 768px;
    padding: 10px;
    gap: 20px;
    align-items: center;
    position: relative;
    border-radius: 5px;

    .hacker-effect-text{
        font-family: 'Space Mono', monospace;
        font-size: clamp(2rem, 10vw, 5rem);
        color: white;
        padding: 0rem clamp(1rem, 2vw, 3rem);
        border-radius: clamp(0.4rem, 0.75vw, 1rem);
        &:hover {
            background-color: white;
            color: black;
        }
        width: auto;
        max-width: 100%;
        height: fit-content;
        line-break: anywhere;
    }

    .back{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 40%;
        height: 100%;
        z-index: 0;
        pointer-events: none;
    }

    .main{
        display: flex;
        width: 100%;
        gap: 20px;
        align-items: center;
        justify-content: center;

        .field{
            width: 100%;
            padding: 10px;
            outline: none;
            border-bottom: 1px solid #ccc;
            font-size: 20px;
            height: 40px;
            border-radius: 5px;
            border: 1px solid black;
        }

        button{
            display:flex;
            align-items:center;
            justify-content:center;
            border:0;
            outline:0;
            background:none;

            img{
                width:40px;height:
                40px
            }
        }
    }

    h1 {
        font-size:30px;
        margin:0;
        color: white;
        white-space:nowrap;
        font-family: 'Monofett', monospace;
    }
`;
