import styled from "styled-components"
import { Breakpoints } from "_config/device/breakpoints"

export const Body = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 96px;
`

export const UsableArea = styled.div`
    width: calc(100% - 2rem);
    max-width: 1162px;
    height: 2000px;
    background-color: white;
    padding: 2.5rem 0;

    @media ${Breakpoints.getBelow('mobile')} {
        padding: 2rem 0;
    }
`

export const Paragraph = styled.p`
    font-size: 20px;
    font-weight: 500;
    line-height: 27px;
    color: ${({ theme }) => theme.neutral[800]};

    @media ${Breakpoints.getBelow('tablet')} {
        font-size: 15px;
        line-height: 20px;
    }
`