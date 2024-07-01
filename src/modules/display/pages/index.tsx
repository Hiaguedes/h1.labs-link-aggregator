import Card from '../components/Card/card.component'
import Button from '../components/Button/button.component'
import personalInfo from 'hiaguedes/info.json';

import { ButtonsWrapper } from './style'

const DisplayPage = () => {

    return (
        <>
        <head>
            <title>Hiago Guedes - Links</title>
        </head>
        <div style={{ width: '80vw', maxWidth: '60rem', display: 'flex', flexDirection: 'column', alignItems: "center" }}>
            <Card src={personalInfo.avatar} name={personalInfo.name} description={`Brasil, ${personalInfo.location}`}/>
        <ButtonsWrapper>
            <Button variant="twitter" to={personalInfo.socials.personal.twitter}/>
            <Button variant="facebook" to="https://www.facebook.com/hiago.guedes/"/>
            <Button variant="instagram" to={personalInfo.socials.personal.instagram}/>
            <Button variant="github" to={personalInfo.socials.professional.github}/>
            <Button variant="steam" to="https://steamcommunity.com/id/iota_h1460"/>
        </ButtonsWrapper>
        </div>
        </>
    );
}

export default DisplayPage;
