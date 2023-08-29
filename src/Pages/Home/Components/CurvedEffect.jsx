import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';
import Wrapper from './Wrapper';
const PLACEHOLDER_TEXT = "EXAMPLE";
export default function CurvedText({ f_size }) {
    const [pico, setPico] = useState(50);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(600);
    const [textPosition, setTextPosition] = useState('50%');
    const [curveColor, setCurveColor] = useState('#000000');

    const [text, setText] = useState('');
    const [curvedText, setCurvedText] = useState(PLACEHOLDER_TEXT);
    const textRef = useRef();

    function previewEffect(e) {
        e.preventDefault()
        setCurvedText(text);
    }
    return (
        <Wrapper title='Curved Path test' title_ffamily={'sans-serif'} title_size={30} title_color='black' bg_color='white' >
            <form className='main' onSubmit={previewEffect}>
                <input placeholder='Type something..' maxLength={65} className='field' type="text" value={text} onChange={(e) => setText(e.target.value)} required />
                <button>
                    <img src="/update-black.png" alt="" />
                </button>
            </form>
            <form onSubmit={(e) => e.preventDefault()}>
                <input value={start} onChange={(e) => setStart(e.target.value)} type="range" id="vol" name="vol" min="0" max="20" />
                <VerticalInputRange value={pico} onChange={(e) => setPico(e.target.value)} type="range" id="vol" name="vol" min="0" max="300" />
                <input value={end} onChange={(e) => setEnd(e.target.value)}type="range" id="vol" name="vol" min="748" max="768" />
                <input value={textPosition} onChange={(e) => setTextPosition(e.target.value)}type="range" id="vol" name="vol" min="0" max="768" />
                <input value={curveColor} onChange={(e) => setCurveColor(e.target.value)}type="color" id="vol" />
            </form>
            <StyledSVG>
                <path id="curve" d={`M ${start} 300 Q ${320} ${pico} ${end} 320`} fill="none" stroke={curveColor} strokeWidth={5} />
                <text x={textPosition} y="0" fontSize={f_size}>
                    <textPath xlinkHref="#curve">
                        {curvedText}
                    </textPath>
                </text>
            </StyledSVG>
        </Wrapper>
    );
}

const StyledSVG = styled.svg`
    width: 100%;
    height: 300px;
`;

const VerticalInputRange = styled.input`
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical; /* Chromium */
    appearance: slider-vertical;
    width: 8px;
    height: -175px;
    padding: 0 5px;
`;