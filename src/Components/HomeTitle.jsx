import React from "react";
import { styled } from "styled-components";
export default function HomeTitle({}) {
  return <TitleSC>Word Effects</TitleSC>;
}

const TitleSC = styled.h1`
    font-size: 4rem;
    font-weight: 600;
    color: #000;
    margin-bottom: 20px;
    font-family: Oswald,sans-serif;
    color: white;
    text-shadow: 10px 10px #5a5a5a;
    user-select: none;
`;
  