import React, { useState, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import Wrapper from './Wrapper';

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
        <Wrapper title={"Hacker"} title_ffamily={"Monofett"} title_color='white' title_size={50} bg_src={'/hacker.gif'} bg_color={'black'} bg_fit_style={'fill'} bg_opacity={'50%'}>
            <form className='main' onSubmit={previewEffect}>
                <input placeholder='Type something..' maxLength={65} className='field' type="text" value={text} onChange={(e) => setText(e.target.value)} required />
                <button><img src="/update-white.png" alt="" /></button>
            </form>
            <HackerEffectText onMouseOver={applyEffect} ref={textRef} className='hacker-effect-text' data-value={hackerEffectText} key={hackerEffectText}>{hackerEffectText}</HackerEffectText>
        </Wrapper>
    )
}

const HackerEffectText = styled.p`
    font-family: 'Space Mono', monospace;
    font-size: clamp(2rem, 10vw, 5rem);
    color: white;
    padding: 0rem clamp(1rem, 2vw, 3rem);
    border-radius: clamp(0.4rem, 0.75vw, 1rem);
    width: auto;
    max-width: 100%;
    height: fit-content;
    line-break: anywhere;
    &:hover {
        background-color: white;
        color: black;
    }
`;