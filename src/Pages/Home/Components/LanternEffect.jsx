import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';

export default function LanternEffect() {
  const holderRef = useRef();
  const frontsideRef = useRef();
  useEffect(() => {
    holderRef?.current.addEventListener('mousemove', (event) => {
      let x = event.pageX - holderRef.current.offsetLeft + "px";
      let y = event.pageY - holderRef.current.offsetTop + "px";
      frontsideRef.current.style.webkitMaskImage = `radial-gradient(circle at ${x}  ${y}, transparent 100px, black 0%)`;
    });

    holderRef?.current.addEventListener('mouseleave', () => frontsideRef.current.style.webkitMaskImage = ``);
  }, [])

  return (
    <Holder ref={holderRef} id='holder'>
      <div id="backside">
        <img className='back' src="/rick-roll.gif" alt="" />
        <p>You got rickrolled</p>
      </div>
      <div ref={frontsideRef} id="frontside">
        ...
      </div>
    </Holder>
  )
}


const Holder = styled.div`
  font: bold 20pt arial;
  position: relative;
  width: 100%;
  max-width: 768px;
  min-height: 500px;
  border-radius: 5px;

  div{
      display: flex;    
      justify-content: center;    
      align-items: center;    
      height: 100%;    
      width: 100%;  
      min-height: 500px;  
      cursor: none;

      p{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: white;
        font-size: 30px;
        font-weight: bold;
      }
  }

  .back{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        z-index: 0;
        pointer-events: none;
    }

  #backside{    
      color: rgb(29, 29, 29);    
      height: 100%;    
      width: 100%;    
  }   

  #frontside{    
      background-color: rgb(29, 29, 29);    
      color: white;    
      position: absolute;    
      top: 0;    
      left: 0;    
      height: 100%;    
      width: 100%;    
  }
`;