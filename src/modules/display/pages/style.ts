import styled from 'styled-components';

// interface ButtonWrapperProps extends HTMLAttributes<HTMLDivElement> {
//     show: boolean;
// }

export const ButtonsWrapper = styled.div`

 position: relative;
 max-height: 0;
 height: 0;
 overflow: hidden;
 width: 95%;
 max-width: 200rem;

 :before {
        display: inline-block;
        content: '';
        border-left: 5px dashed white;
        width: 5px;
        height: calc(100% - 1.7rem - 2.5rem);
        left: 0;
        position: absolute;
    }

 @keyframes showContent {
     0%{
         max-height: 0;
         height:0;
     }

     100% {
        max-height: 100%;
        height: 30rem;
        padding-top: 1rem;
     }
 }

 animation: showContent 1s 1s ease-in-out forwards;

`;