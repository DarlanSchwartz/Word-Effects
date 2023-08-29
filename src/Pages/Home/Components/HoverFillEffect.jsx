import React, { useRef, useState } from 'react'
import { styled } from 'styled-components';
import Wrapper from './Wrapper';

export default function HoverFillEffect() {
    const [text, setText] = useState('Hover me');
    const inputRef = useRef();

    function previewEffect(e) {
        e.preventDefault()
        setText(inputRef.current.value);
    }
    return (
        <Wrapper title_color={'black'} title={'Hover fill'} title_size={30} title_ffamily={'sans-serif'} bg_color='white'>
            <form className='main' onSubmit={previewEffect}>
                <input ref={inputRef} placeholder='Type something..' maxLength={65} className='field' type="text" required />
                <button><img src="/update-white.png" alt="" /></button>
            </form>
            <HoverFillEffectText>{text}</HoverFillEffectText>
        </Wrapper>
    )
}

const HoverFillEffectText = styled.h2`
    font-family: system-ui, sans-serif;
    font-size: 5rem;
    cursor: pointer;
    --line_thickness: 0.1em;   /* the thickness of the line */
    --text_color: #2c4bff; /* the color */

    color: #0000;
    padding-bottom: var(--line_thickness);
    background: 
        linear-gradient(90deg,var(--text_color) 50%,#000 0) calc(100% - var(--_p,0%))/200% 100%,
        linear-gradient(var(--text_color) 0 0) 0% 100%/var(--_p,0%) var(--line_thickness) no-repeat;
    -webkit-background-clip: text,padding-box;
            background-clip: text,padding-box;
    transition: 0.5s;

    &:hover {--_p: 100%}
`;