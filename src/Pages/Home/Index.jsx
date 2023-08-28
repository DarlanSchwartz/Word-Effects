import React from 'react'
import { styled } from 'styled-components'
import TypewriterEffect from './Components/TypewriterEffect';
import HackerEffect from './Components/HackerEffect';
import LanternEffect from './Components/LanternEffect';

export default function Home() {
  return (
    <Page>
      <h1 className='title'>Word Effects</h1>
      <PageContent>
        <TypewriterEffect/>
        <HackerEffect/>
        <LanternEffect/>
      </PageContent>
    </Page>
  )
}

const PageContent = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 30px;
`;

const Page = styled.main`

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
  gap: 30px;

  .title{
    font-size: 4rem;
    font-weight: 600;
    color: #000;
    margin-bottom: 20px;
    font-family: Oswald,sans-serif;
    color: white;
    text-shadow: 10px 10px #5a5a5a;
    user-select: none;
  }

`;
