import React from 'react'
// Config

// Components
import { Container, Divider, H2 } from './styles';
// Assets

// Types
interface IProps {
    children: string
}

export function Title({ children }: IProps) {
    return (
        <Container>
            <H2>{children}</H2>
            <Divider />
        </Container>
    );
}