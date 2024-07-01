import React from 'react';
import * as S from './card.styles'
interface CardProps {
    children?: React.ReactNode;
    name: string | JSX.Element;
    description?: string | JSX.Element;
}

const Card = ({ children, name, description }: CardProps ) => {
    return (
        <S.CardContainer>
        <S.CardSpacer>
            <S.UserBasicInfo>
                <S.ProfileImage />
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
