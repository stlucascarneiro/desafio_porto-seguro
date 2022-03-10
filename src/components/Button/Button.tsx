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
    onClick?: any
}

export function Button({ children, variant, style, onClick }: IProps) {
    return (
        <HtmlButton variant={variant} style={style} onClick={onClick}>
            {children}
        </HtmlButton>
    );
}