import React from 'react'
import { styled } from 'styled-components'
import TypewriterEffect from './Components/TypewriterEffect';
import HackerEffect from './Components/HackerEffect';
import LanternEffect from './Components/LanternEffect';
import CurvedText from './Components/CurvedEffect';
import SlicedEffect from './Components/SlicedEffect';
import HoverFillEffect from './Components/HoverFillEffect';
import HomeTitle from '../../Components/HomeTitle';
import AAAShadow from './Components/AAAShadow';

export default function Home() {
  return (
    <Page>
      <HomeTitle/>
      <PageContent>
        <TypewriterEffect/>
        <HackerEffect/>
        <LanternEffect/>
        <SlicedEffect/>
        <HoverFillEffect/>
        <AAAShadow/>
        {/* <CurvedText/> */}
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
`;
