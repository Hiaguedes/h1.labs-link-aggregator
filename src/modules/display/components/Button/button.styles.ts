import styled from 'styled-components';
import { ButtonProps } from './button.component'

const ButtonContainer = styled.div<ButtonProps>`
    max-width: 200rem;
    width: 80%;
    height: 5rem;
    background-color: #f1f1f1;
    margin-left: 19%;
    margin-bottom: 1rem;
    cursor: pointer;
    z-index: 1000;

    :hover {
        opacity: 0.9;
        outline: 3px solid red;
    }

    :after {
        display: inline-block;
        content: '';
        margin-left: -123%;
        height: 50%;
        width: 20%;
        border-bottom: 5px dashed white;
    }

    :before {
        height: 100%;
        width: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

`;

const ButtonContent = styled.div`
    width: 100%;
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
`;

const ButtonFont = styled.p`
    font-family: 'Open Sans';
    font-weight: bold;
    color: black;
`;

const ButtonIconContainer = styled.div`
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 1rem;
`;

export const ButtonStyles = { ButtonContainer, ButtonContent, ButtonFont, ButtonIconContainer }