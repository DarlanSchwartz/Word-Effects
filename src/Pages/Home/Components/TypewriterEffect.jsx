import React, { useState } from 'react';
import { styled } from 'styled-components';
import Wrapper from './Wrapper';
const PLACEHOLDER_TEXT= "This works on small inline texts like this one: Try it out!";
export default function TypewriterEffect() {
    const [text, setText] = useState('');
    const [typeWriterEffectText, setTypeWriterEffectText] = useState(PLACEHOLDER_TEXT);

    function previewEffect(e){
        e.preventDefault()
        setTypeWriterEffectText(text)
    }
//
    return (
        <Wrapper title={'Typewriter'} bg_color='white' bg_fit_style='scale-down' bg_src={'/typewriter.png'}  title_ffamily={'Handjet, cursive'} title_size={50} >
            <form className='main' onSubmit={previewEffect}>
                <input placeholder='Type something..' maxLength={65} className='field' type="text" value={text} onChange={(e) => setText(e.target.value)} required />
                <button><img src="/update-black.png" alt="" /></button>
            </form>
            <TypewriterText $w={typeWriterEffectText.length} className='typewriter-text' key={typeWriterEffectText}>{typeWriterEffectText}</TypewriterText>
        </Wrapper>
    )
}

const TypewriterText = styled.p`
    @keyframes typing {
       from{
        width: 0;
       }
    }

    @keyframes blinking {
        50%{
            border-color: transparent;
        }
    }

    font-size: 1rem;
    font-family: monospace;
    border-right: 4px solid;
    width: ${(props) => props.$w + 0.5 + "ch"};
    white-space: nowrap;
    overflow: hidden;
    animation: typing ${(props) => (Number(props.$w) / 5) + "s" } steps(${(props) => props.$w}), blinking 0.5s infinite step-end alternate;
`;


