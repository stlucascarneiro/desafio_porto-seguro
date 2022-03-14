import styled from 'styled-components'
import { Breakpoints } from '_config/device/breakpoints'

export const Container = styled.fieldset`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    border: none;
    padding: 0;
`

export const Legend = styled.legend`
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.primary[500]};
`

export const HTMLInput = styled.input`
    height: 3rem;
    border: 1px solid ${({ theme }) => theme.primary[800]};
    padding-left: 1rem;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;

    &:focus-visible{
        outline: 1px solid ${({ theme }) => theme.primary.default};
    }

    &::placeholder{
        font-weight: 500;
    }

    @media ${Breakpoints.getBelow('tablet')} {
        height: 2rem;
    }
`

export const Feedback = styled.label`
    margin: 4px 0 0 0;
    font-size: 14px;
    color: red;
`