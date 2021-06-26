import React from 'react';

import Card from '../components/Card/card.component'
import Button from '../components/Button/button.component'

import { ButtonsWrapper } from './style'

const DisplayPage = () => {

    return (
        <>
        <head>
            <title>Hiago Guedes - Redes Sociais</title>
        </head>
        <div style={{ width: '80vw', maxWidth: '60rem', display: 'flex', flexDirection: 'column', alignItems: "center" }}>
            <Card name="Hiago Guedes" description="Brasil, Rio de Janeiro, Petrópolis"/>
        <ButtonsWrapper>
            <Button variant="twitter" to="https://twitter.com/hiaguedes"/>
            <Button variant="facebook" to="https://www.facebook.com/hiago.guedes/"/>
            <Button variant="instagram" to="https://www.instagram.com/hiago.guedes/?hl=en"/>
            <Button variant="github" to="https://github.com/Hiaguedes"/>
            <Button variant="steam" to="https://steamcommunity.com/id/iota_h1460"/>
        </ButtonsWrapper>
        </div>
        </>
    );
}

export default DisplayPage;
