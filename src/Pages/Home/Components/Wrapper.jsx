import React from 'react'
import { styled } from 'styled-components'


export default function Wrapper({ title_color = 'black', children, title_ffamily, title_size, title, bg_src, bg_color = 'transparent', bg_fit_style = 'fill', bg_opacity = '10%' }) {
    return (
        <ComponentContainer
            $title_color={title_color}
            $title_ffamily={title_ffamily}
            $title_size={title_size}
            $bg_color={bg_color}
            $bg_fit_style={bg_fit_style}
            $bg_opacity={bg_opacity}
        >
           {title &&  <h1 className='component-title'>{title}</h1>}
            {children}
            {bg_src && <img className="back" src={bg_src} alt="" />}
        </ComponentContainer>
    )
}


const ComponentContainer = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color:  ${(props) => props.$bg_color};
    min-height: 250px;
    max-width: 768px;
    padding: 10px;
    gap: 20px;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    
    .back{
        width: 100%;
        object-fit: ${(props) => props.$bg_fit_style};
        position: absolute;
        top: 0;
        left: 0;
        opacity: ${(props) => props.$bg_opacity};
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

    .component-title{
        font-size: ${(props) => props.$title_size + "px"};
        margin: 0;
        font-family: ${(props) => props.$title_ffamily};
        white-space: nowrap;
        color: ${(props) => props.$title_color};
    }
`;