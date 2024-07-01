import { HTMLAttributes } from 'react';
import * as S from './button.styles'

import { SlSocialTwitter, SlSocialSteam, SlSocialFacebook, SlSocialInstagram, SlSocialGithub } from 'react-icons/sl'

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'twitter' | 'facebook' | 'github' | 'instagram' | 'steam';
    name?: string;
    to?: string;
};

const handleButtonInfo = (variant: ButtonProps['variant']) => {
    switch (variant){
        case 'twitter': return {text: 'TWITTER', icon: <SlSocialTwitter size={18} color='#000' />};
        case 'facebook': return {text: 'facebook', icon: <SlSocialFacebook size={18} color='#000' />};
        case 'instagram': return {text: 'instagram', icon: <SlSocialInstagram size={18} color='#000' />};
        case 'github': return {text: 'github', icon: <SlSocialGithub size={18} color='#000' />};
        case 'steam': return {text: 'steam', icon: <SlSocialSteam size={18} color='#000' />};
        default: return {text: '', icon: <></>}
    }
} 

const Button = ({ variant, to }: ButtonProps) => {
    return (
        <a target="_blank" href={to} rel="noreferrer">
        <S.ButtonContainer variant={variant}>
            <S.ButtonContent>
                <S.ButtonContentWrapper>
                    <S.ButtonIconContainer>
                    {handleButtonInfo(variant).icon}
                    </S.ButtonIconContainer>
                    <S.ButtonFont>{handleButtonInfo(variant).text.toUpperCase()}</S.ButtonFont>
                </S.ButtonContentWrapper>
            </S.ButtonContent>
        </S.ButtonContainer>
        </a>
    );
}

export default Button;
