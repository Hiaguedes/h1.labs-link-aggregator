import React from 'react';
import { CardStyles } from './card.styles'

interface CardProps {
    children?: React.ReactNode;
    name: string | JSX.Element;
    description?: string | JSX.Element;
}

const Card = ({ children, name, description }: CardProps ) => {
    const { CardContainer, CardSpacer, ProfileImage, UserTitle, UserBasicInfo, UserDescription } = CardStyles;
    return (
        <CardContainer>
        <CardSpacer>
            <UserBasicInfo>
                <ProfileImage />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <UserTitle>{name}</UserTitle>
                    <UserDescription>{description}</UserDescription>
                </div>
            </UserBasicInfo>

            {children}
        </CardSpacer>
        </CardContainer>
    );
}

export default Card;
