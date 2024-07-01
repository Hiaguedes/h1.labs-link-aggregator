import styled from 'styled-components';

export const ButtonsWrapper = styled.div`

 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 position: relative;
 top: -10px;
 gap: 1rem;
 height: 0;

 overflow: hidden;
 max-width: 200rem;
 width: 95%;

border-bottom: 1px solid #ffffff30;
border-left: 1px solid #ffffff30;
border-right: 1px solid #ffffff30;

border-radius: 0px 0 5px 5px;

 @keyframes showContent {
     0%{
         height:0;
     }

     100% {
        height: 31rem;
        padding-top: 1rem;
     }
 }

 animation: showContent 1s 1s ease-in-out forwards;

`;