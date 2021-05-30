import { HTMLAttributes } from 'react'
import styled, {css} from 'styled-components';

interface ButtonWrapperProps extends HTMLAttributes<HTMLDivElement> {
    show: boolean;
}

export const ButtonsWrapper = styled.div<ButtonWrapperProps>`
 padding-top: 1rem;
 width: 95%;
 max-width: 200rem;
 position: relative;
 max-height: 0;
 transform: max-height 5s ease-out;
 overflow: hidden;

 :before {
        display: inline-block;
        content: '';
        border-left: 5px dashed white;
        width: 5px;
        height: calc(100% - 1.7rem - 2.5rem);
        left: 0;
        position: absolute;
    }

    ${({ show }) => show && css`
        max-height: 100%;
        transform: max-height 5s ease-in;
    ` }

`;