import React from 'react';

import Card from '../components/Card/card.component'
import Button from '../components/Button/button.component'

import { ButtonsWrapper } from './style'
// import useMatchMedia from '../../../hooks/useMatchMedia'

const DisplayPage = () => {
    // const tablet = useMatchMedia('(min-width: 768px)');
    // const mobile = useMatchMedia('(min-width: 300px)');
    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 3 * 1000)
    }, [])

    return (
        <>
        <head>
            <title>Hiago Guedes - Redes Sociais</title>
        </head>
        <div style={{ width: '80vw', maxWidth: '60rem', display: 'flex', flexDirection: 'column', alignItems: "center" }}>
            <Card name="Hiago Guedes" description="Brasil, Rio de Janeiro, Petrópolis"/>
        <ButtonsWrapper show={show}>
            <Button variant="twitter" to="https://twitter.com/hiaguedes"/>
            <Button variant="facebook" to="https://www.facebook.com/hiago.guedes/"/>
            <Button variant="instagram" to="https://www.instagram.com/hiago.guedes/?hl=en"/>
            <Button variant="github" to="https://github.com/Hiaguedes"/>
        </ButtonsWrapper>
        </div>
        </>
    );
}

export default DisplayPage;
