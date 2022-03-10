import React from 'react'
// Config

// Components
import { Container } from './styles';
// Assets

// Types
interface IProps {
    children: string
}

export function Card({ children }: IProps) {
    return (
        <Container>
            {children}
        </Container>
    );
}