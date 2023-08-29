import React, { useRef, useState } from 'react'
import { styled } from 'styled-components';
import Wrapper from './Wrapper';

export default function SlicedEffect() {
    const [text, setText] = useState('Sliced');
    const inputRef = useRef();

    function previewEffect(e) {
        e.preventDefault()
        setText(inputRef.current.value);
    }
    return (
        <Wrapper  title_size={30} title_ffamily={`'Monofett', monospace`} bg_color='black' title_color='white' >
            <SlicedText $size={30}>
                <div className="top">Sliced</div>
                <div className="bottom" aria-hidden="true">Sliced</div>
            </SlicedText>
            <form className='main' onSubmit={previewEffect}>
                <input ref={inputRef} placeholder='Type something..' maxLength={65} className='field' type="text" required />
                <button><img src="/update-white.png" alt="" /></button>
            </form>
            <SlicedText $size={80}>
                <div className="top">{text}</div>
                <div className="bottom" aria-hidden="true">{text}</div>
            </SlicedText>
        </Wrapper>
    )
}

const SlicedText = styled.section`
    --background-color: black;
    --text-color: hsl(0, 0%, 100%);
    display: grid;
    place-content: center;
    background-color: var(--background-color);
    font-family: "Oswald", sans-serif;
    font-size: ${(props) => props.$size + 'px'};
    font-weight: 700;
    text-transform: uppercase;
    color: var(--text-color);

    div {grid-area: 1/1/-1/-1;}
    .top {clip-path: polygon(0% 0%, 100% 0%, 100% 48%, 0% 58%);}

    .bottom {
        clip-path: polygon(0% 60%, 100% 50%, 100% 100%, 0% 100%);
        color: transparent;
        background: -webkit-linear-gradient(177deg, black 53%, var(--text-color) 65%);
        background: linear-gradient(177deg, black 53%, var(--text-color) 65%);
        background-clip: text;
        -webkit-background-clip: text;
        transform: translateX(-0.02em);
    }
`;