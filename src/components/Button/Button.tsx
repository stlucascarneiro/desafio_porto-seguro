import React from 'react'
// Config

// Components
import { HtmlButton } from './styles';
// Assets

// Types
interface IProps {
    children: any,
    variant: 'primary' | 'secondary'
    style?: any
}

export function Button({ children, variant, style }: IProps) {
    return (
        <HtmlButton variant={variant} style={style}>
            {children}
        </HtmlButton>
    );
}