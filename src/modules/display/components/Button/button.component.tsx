import React, { HTMLAttributes } from 'react';
import { ButtonStyles } from './button.styles'

import FacebookLogo from '../../components/icons/facebook.icon';
import GithubLogo from '../../components/icons/github.icon';
import InstagramLogo from '../../components/icons/instagram.icon';
import TwitterLogo from '../../components/icons/twitter.icon';

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'twitter' | 'facebook' | 'github' | 'instagram';
    name?: string;
    to?: string;
};

const handleButtonInfo = (variant: ButtonProps['variant']) => {
    switch (variant){
        case 'twitter': return {text: 'TWITTER', icon: <TwitterLogo />};
        case 'facebook': return {text: 'facebook', icon: <FacebookLogo />};
        case 'instagram': return {text: 'instagram', icon: <InstagramLogo />};
        case 'github': return {text: 'github', icon: <GithubLogo />};
        default: return {text: '', icon: <></>}
    }
} 

const Button = ({ variant, to }: ButtonProps) => {
    const { ButtonContainer, ButtonContent, ButtonFont, ButtonIconContainer } = ButtonStyles;
    return (
        <a target="_blank" href={to} rel="noreferrer">
        <ButtonContainer variant={variant}>
            <ButtonContent>
                <div style={{ display: 'flex' }}>
                    <ButtonIconContainer>
                    {handleButtonInfo(variant).icon}
                    </ButtonIconContainer>
                    <ButtonFont>{handleButtonInfo(variant).text.toUpperCase()}</ButtonFont>
                </div>
            </ButtonContent>
        </ButtonContainer>
        </a>
    );
}

export default Button;
