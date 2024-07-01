import React, { HTMLAttributes } from 'react';
import * as S from './button.styles'

import FacebookLogo from '../../components/icons/facebook.icon';
import GithubLogo from '../../components/icons/github.icon';
import InstagramLogo from '../../components/icons/instagram.icon';
import TwitterLogo from '../../components/icons/twitter.icon';
import SteamLogo from '../../components/icons/steam.icon';

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'twitter' | 'facebook' | 'github' | 'instagram' | 'steam';
    name?: string;
    to?: string;
};

const handleButtonInfo = (variant: ButtonProps['variant']) => {
    switch (variant){
        case 'twitter': return {text: 'TWITTER', icon: <TwitterLogo />};
        case 'facebook': return {text: 'facebook', icon: <FacebookLogo />};
        case 'instagram': return {text: 'instagram', icon: <InstagramLogo />};
        case 'github': return {text: 'github', icon: <GithubLogo />};
        case 'steam': return {text: 'steam', icon: <SteamLogo />};
        default: return {text: '', icon: <></>}
    }
} 

const Button = ({ variant, to }: ButtonProps) => {
    return (
        <a target="_blank" href={to} rel="noreferrer">
        <S.ButtonContainer variant={variant}>
            <S.ButtonContent>
                <div style={{ display: 'flex' }}>
                    <S.ButtonIconContainer>
                    {handleButtonInfo(variant).icon}
                    </S.ButtonIconContainer>
                    <S.ButtonFont>{handleButtonInfo(variant).text.toUpperCase()}</S.ButtonFont>
                </div>
            </S.ButtonContent>
        </S.ButtonContainer>
        </a>
    );
}

export default Button;
