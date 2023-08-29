import React, { useRef, useState } from 'react'
import Wrapper from './Wrapper'
import { styled } from 'styled-components'

export default function AAAShadow() {
    const [text, setText] = useState('SOFTFULL');
    const inputRef = useRef();
    function previewEffect(e) {
        e.preventDefault()
        setText(inputRef.current.value);
    }
    return (
        <Wrapper title={'Soft shadow'} title_size={40} bg_color='white' title_ffamily={`'Yanone Kaffeesatz', sans-serif`}>
            <form className='main' onSubmit={previewEffect}>
                <input ref={inputRef} placeholder='Type something..' maxLength={65} className='field' type="text" required />
                <button><img src="/update-black.png" alt="" /></button>
            </form>
            <Overlay className="overlay"></Overlay>

            <Text>
                {text.split('').map((letter, index) => {
                    return (
                        <div key={index} className="wrapper">
                            <div id={letter} className="letter">{letter}</div>
                            <div className="shadow">{letter}</div>
                        </div>
                    );
                })}
            </Text>
        </Wrapper>
    )
}

const Text = styled.div`
	font-family:'Yanone Kaffeesatz', sans-serif !important;
	font-size: 50px;
	display: flex;
	position: absolute;
	bottom: 2vh;
	left: 50%;
	transform: translateX(-50%);
	user-select: none;

	.wrapper {
		padding-left: 20px;
		padding-right: 20px;
		padding-top: 20px;
		.letter {
			transition: ease-out 1s;
			transform: translateY(32%);
		}
		.shadow {
			transform: scale(1, -1);
			color: #999;
			transition: ease-in 4s, ease-out 3s;
		}
		&:hover {
			.letter {
				transform: translateY(-200%);
			}
			.shadow {
				opacity: 0;
				transform: translateY(200%);
			}
		}
	}
`;

const Overlay = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 5vh;
	z-index: 100;

	background: rgb(255, 255, 255);
	background: linear-gradient(
		0deg,
		rgba(255, 255, 255, 1) 75%,
		rgba(255, 255, 255, 0.9) 80%,
		rgba(255, 255, 255, 0.25) 95%,
		rgba(255, 255, 255, 0) 100%
	);

`;
