import styled from 'styled-components'
import { Breakpoints } from '_config/device/breakpoints'

export const Container = styled.footer`
    width: calc(100% - 2rem);
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;

    background-color: ${({ theme }) => theme.primary[800]};
`

export const Image = styled.img`
    width: fit-content;

    &:last-of-type{
        margin-left: 1rem;
    }
`

export const Paragraph = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 516px;
    font-size: 15px;
    line-height: 20px;
    color: ${({ theme }) => theme.neutral[50]};
    text-align: center;

    @media ${Breakpoints.getBelow('mobile')} {
        font-size: 11px;
        line-height: 15px;
    }
`