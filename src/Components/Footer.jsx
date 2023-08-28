import React from 'react';
import { styled } from 'styled-components';

export default function Footer() {
  return (
    <SCFooter>
        <a href="https://github.com/DarlanSchwartz/Word-Effects">Github repository</a>
    </SCFooter>
  )
}

const SCFooter = styled.footer`

    width: 100%;
    height: 100px;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        color: #59aaff;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
`;
