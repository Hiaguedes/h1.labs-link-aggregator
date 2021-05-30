import styled from 'styled-components';

const CardContainer = styled.div`
    width: 95%;
    max-width: 200rem;
    height: 5rem;
    background-color: #f1f1f1;
    border-radius: 10px;
    display: flex;
    align-items: center;
`;

const CardSpacer = styled.div`
    padding: 0.5rem 1rem;
    
`;

const UserBasicInfo = styled.div`
    display: flex;
    align-items: center;
`

const ProfileImage = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: #000;
    border-radius: 50%;
    margin-right: 1rem;
`;

const UserTitle = styled.p`
    color: #000;
    font-weight: bold;
    font-size: 20px;
`;

const UserDescription = styled.p`
    color: #000;
    opacity: 0.6;
    font-size: 14px;
`;

export const CardStyles = { CardContainer, CardSpacer, ProfileImage, UserTitle, UserBasicInfo, UserDescription }