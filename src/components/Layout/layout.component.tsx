import React from 'react'
import { LayoutStyles } from './layout.styles'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children } : LayoutProps) => {
    const { Container, MainContent } = LayoutStyles;

    return (
        <Container>
            <MainContent>
                {children}
            </MainContent>
        </Container>
    )

}

export default Layout;
