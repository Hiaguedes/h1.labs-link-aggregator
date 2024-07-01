import React from 'react';
import * as S from './card.styles'
interface CardProps {
    children?: React.ReactNode;
    name: string | JSX.Element;
    description?: string | JSX.Element;
    src?: string;
}

const Card = ({ children, name, description, src }: CardProps ) => {
    return (
        <S.CardContainer>
        <S.CardSpacer>
            <S.UserBasicInfo>
                <S.ProfileImage src={src} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <S.UserTitle>{name}</S.UserTitle>
                    <S.UserDescription>{description}</S.UserDescription>
                </div>
            </S.UserBasicInfo>

            {children}
        </S.CardSpacer>
        </S.CardContainer>
    );
}

export default Card;
