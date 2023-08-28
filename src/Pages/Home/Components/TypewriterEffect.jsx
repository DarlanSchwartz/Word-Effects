import React, { useState } from 'react';
import { styled } from 'styled-components';
const PLACEHOLDER_TEXT= "This works on small inline texts like this one: Try it out!";
export default function TypewriterEffect() {
    const [text, setText] = useState('');
    const [typeWriterEffectText, setTypeWriterEffectText] = useState(PLACEHOLDER_TEXT);

    function previewEffect(e){
        e.preventDefault()
        setTypeWriterEffectText(text)
    }

    return (
        <ComponentContainer $w={typeWriterEffectText.length}>
             <h1>Typewriter</h1>
            <form className='main' onSubmit={previewEffect}>
                <input placeholder='Type something..' maxLength={65} className='field' type="text" value={text} onChange={(e) => setText(e.target.value)} required />
                <button><img src="/update-black.png" alt="" /></button>
            </form>
            <p className='typewriter-text' key={typeWriterEffectText}>{typeWriterEffectText}</p>
            <img className="back" src="/typewriter.png" alt=""/>
        </ComponentContainer>
    )
}

const ComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
    min-height: 250px;
    max-width: 768px;
    padding: 10px;
    gap: 20px;
    align-items: center;
    position: relative;
    border-radius: 5px;
    
    .back{
        width: 100%;
        object-fit: scale-down;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 10%;
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
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0;
            outline: 0;
            background: none;
            img{
                width: 40px;
                height: 40px;
            }
        }
    }

    h1 {
        font-size: 50px;
        margin: 0;
        font-family: 'Handjet', cursive;
        white-space: nowrap;
    }

    

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

    .typewriter-text{
        font-size: 1rem;
        font-family: monospace;
        border-right: 4px solid;
        width: ${(props) => props.$w + 0.5 + "ch"};
        white-space: nowrap;
        overflow: hidden;
        animation: typing ${(props) => (Number(props.$w) / 5) + "s" } steps(${(props) => props.$w}), blinking 0.5s infinite step-end alternate;
    }	
    
`;


