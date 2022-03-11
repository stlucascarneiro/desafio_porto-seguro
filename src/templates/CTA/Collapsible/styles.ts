import styled from "styled-components"
import { Breakpoints } from "_config/device/breakpoints"

// Collapsible
export const CollapsibleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem 5rem;

    @media ${Breakpoints.getBelow('tablet')} {
        padding: 1rem 1.5rem;
    }

    @media ${Breakpoints.getBelow('mobile')} {
        padding: 1.5rem 0 0 0;
    }
`

export const ListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const ListColumn = styled.ul`
    max-width: 320px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style-type: none;
    padding: 0;
    margin: 0;

    @media ${Breakpoints.getBelow('mobile')} {
        width: 100%;
        max-width: 370px;
    }
`

export const Item = styled.li`
    text-decoration: none;
    font-size: 20px;
    line-height: 27px;
    font-weight: 500;
    color: ${({ theme }) => theme.neutral[50]};
    margin-bottom: 0.5rem;

    @media ${`(max-width: 1062px)`} {
        padding-bottom: 0.5rem;
    }

    @media ${Breakpoints.getBelow('tablet')} {
        font-size: 15px;
        line-height: 20px;
    }
    @media ${Breakpoints.getBelow('mobile')} {
        border-bottom: 1px solid ${({ theme }) => theme.primary[800]};
    }
`
export const SubText = styled.p`
    font-size: 10px;
    line-height: 14px;
    margin: 0;
`

export const Divider = styled.div`
    width: 365px;
    height: 1.5rem;
    border-bottom: 1px solid white;
`

export const FooterContainer = styled.div`
    width: calc(100% - 8rem);
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;
    flex-wrap: wrap;

    @media ${`(max-width: 1024px)`} {
        width: 100%;
    }

    @media ${Breakpoints.getBelow('tablet')} {
        justify-content: flex-start;
    }

    @media ${`(max-width: 610px)`} {
        height: 140px;
    }
`

export const FooterItem = styled.div`
    display: flex;

    @media ${Breakpoints.getBelow('tablet')} {
        &:first-of-type{
            margin-right: 2rem;
        }
    }
`

export const FooterTitle = styled.h5`
    font-size: 20px;
    line-height: 27px;
    font-weight: 700;
    color: ${({ theme }) => theme.neutral[50]};
    margin: 0 0 0 1rem;

    @media ${Breakpoints.getBelow('mobile')} {
        font-size: 15px;
        line-height: 20px;
    }
`

export const FooterText = styled.p`
    font-weight: 500;
    color: ${({ theme }) => theme.neutral[50]};
    margin: 0 0 0 1rem;

    @media ${Breakpoints.getBelow('mobile')} {
        font-size: 15px;
        line-height: 20px;
    }
`