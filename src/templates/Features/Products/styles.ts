import styled from 'styled-components'
import { Breakpoints } from '_config/device/breakpoints'
import { FiCheck } from "react-icons/fi";

export const ProductsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 3rem 0 4rem 0;

    @media ${Breakpoints.getBelow('tablet')} {
        flex-wrap: wrap;
        margin: 2rem 0 3rem 0;
    }
`

export const CardContainer = styled.div`
    width: calc(50% - 2rem);
    max-width: 500px;
    height: 820px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    box-shadow: 0px 3px 6px #00000029;

    @media ${Breakpoints.getBelow('tablet')} {
        width: 100%;
        max-width: none;
        height: fit-content;
        margin: 2rem 0 0 0;
    }
`

export const Image = styled.img`
    width: 100%;
`

export const Title = styled.h5`
    width: calc(100% - 5rem);
    font-size: 30px;
    line-height: 41px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0 1rem 0;
    color: ${({ theme }) => theme.primary[600]};

    @media ${Breakpoints.getBelow('tablet')} {
        width: calc(100% - 4rem);
        font-size: 20px;
        line-height: 27px;
    }
`

export const Paragraph = styled.p`
    width: calc(100% - 5rem);
    margin: 0;
    text-align: center;
    font-size: 25px;
    line-height: 34px;

    @media ${Breakpoints.getBelow('tablet')} {
        width: calc(100% - 4rem);
        font-size: 15px;
        line-height: 20px;
    }
`

export const Divisor = styled.div`
    height: 1rem;
    width: 225px;
    border-bottom: 1px solid ${({ theme }) => theme.primary.default};
`

export const Ul = styled.ul`
    list-style-type: none;
    margin-top: 2rem;
    padding: 0;
`
export const Li = styled.li`
    display: flex;
    max-width: 320px;
    margin-bottom: 1rem;
    font-size: 20px;
    line-height: 24px;

    @media ${Breakpoints.getBelow('tablet')} {
        font-size: 14px;
    }
`

export const CheckIcon = styled(FiCheck)`
    color: ${({ theme }) => theme.primary.default};
    margin-right: 1rem;
    flex-shrink: 0;
`