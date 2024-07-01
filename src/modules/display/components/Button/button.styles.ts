import styled from 'styled-components';
import { ButtonProps } from './button.component'

export const ButtonContainer = styled.div<ButtonProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    height: 5rem;
    background-color: #f1f1f1;
    cursor: pointer;
    z-index: 1000;
    width: 60vw;

    :hover {
        opacity: 0.9;
        outline: 1px solid #e9e9e9;
    }

`;

export const ButtonContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
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
    align-self: center;
    width: 1.2rem;
    height: 1.2rem;
`;

