import styled from 'styled-components'

export const HtmlButton = styled.button<IHtmlButton>`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 2rem;
    box-shadow: 0px 3px 6px #0000008A;
    background-color: ${({ theme, variant }) => variant === 'primary' ? theme.primary.default : theme.primary[800]};
    
    color: ${({ theme }) => theme.neutral[50]};

    transition: .3s;
    cursor: pointer;

    &:hover{
        background-color: ${({ theme }) => theme.primary[700]};
        transition: .3;
    }
`
interface IHtmlButton {
    variant: 'primary' | 'secondary'
}