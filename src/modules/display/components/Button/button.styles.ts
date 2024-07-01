import styled from 'styled-components';
import { ButtonProps } from './button.component'

export const ButtonContainer = styled.div<ButtonProps>`
    display: inline-flex;
    flex-direction: column;
    max-width: 200rem;
    width: 80%;
    height: 5rem;
    background-color: #f1f1f1;
    margin-left: 20%;
    margin-bottom: 1rem;
    cursor: pointer;
    z-index: 1000;

    :hover {
        opacity: 0.9;
        outline: 1px solid #e9e9e9;
    }

    :after {
        display: inline-flex;
        content: '';
        height: 50%;
        border-bottom: 5px dashed red;
    }

    :before {
        height: 100%;
        width: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

`;

export const ButtonContent = styled.div`
    width: 100%;
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonFont = styled.p`
    font-family: 'Open Sans';
    font-weight: bold;
    color: black;
`;

export const ButtonIconContainer = styled.div`
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 1rem;
`;

