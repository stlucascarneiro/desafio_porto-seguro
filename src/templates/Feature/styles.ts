import styled from 'styled-components'

import { FaDownload } from "react-icons/fa";
import { Breakpoints } from '_config/device/breakpoints';

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.primary[700]};
    box-shadow: 0px 3px 6px #00000029;
`

export const TopContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2.5rem 5rem;

    @media ${Breakpoints.getBelow('tablet')} {
        padding: 1rem 1.5rem;
        justify-content: space-evenly;
    }
    @media ${Breakpoints.getBelow('mobile')} {
        justify-content: space-between;
    }
`

export const PriceContainer = styled.div`
    
`

export const Title = styled.h3`
    font-size: 25px;
    line-height: 34px;
    font-weight: 600;
    color: ${({ theme }) => theme.primary[300]};
    margin: 0;

    @media ${Breakpoints.getBelow('tablet')} {
        font-size: 15px;
        line-height: 20px;
    }
`

export const LabelPrice = styled.h5`
    font-size: 25px;
    line-height: 53px;
    font-weight: 300;
    font-style: italic;
    color: ${({ theme }) => theme.neutral[50]};
    margin: 0;

    @media ${Breakpoints.getBelow('tablet')} {
        font-size: 15px;
        line-height: 32px;
    }
`

export const Price = styled.h5`
    font-size: 35px;
    line-height: 53px;
    font-weight: 700;
    display: flex;
    color: ${({ theme }) => theme.neutral[50]};
    margin: 0;

    @media ${Breakpoints.getBelow('tablet')} {
        font-size: 21px;
        line-height: 32px;
    }
`

export const Strong = styled.strong`
    font-size: 68px;
    transform: translateY(10px);
    margin: 0 4px;

    @media ${Breakpoints.getBelow('tablet')} {
        font-size: 40px;
        line-height: 32px;
        transform: translateY(6px);
    }
`

export const InfoContainer = styled.div`
    width: 100%;
    max-width: 210px;
    margin: 0 2rem;
    display: flex;
    flex-direction: column;

    @media ${`(max-width: 497px)`} {
        max-width: 135px;
        margin: 0;
    }
`

export const Info = styled.p`
    width: 100%;
    font-size: 10px;
    line-height: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.neutral[50]};
    margin: 0 0 10px 0;

    @media ${Breakpoints.getBelow('tablet')} {
        font-size: 7px;
        line-height: 9px;
    }
`

export const Image = styled.img`
    width: 114px;
`

export const ButtonContainer = styled.div`
    width: 432px;
    min-height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-grow: 1;

    @media ${`(max-width: 1134px)`} {
        margin-top: 2rem;
    }
`

export const ButtonText = styled.span`
    font-size: 17px;
    line-height: 23px;
    letter-spacing: 1.7px;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.neutral[50]};
    margin: 12px 0;

    @media ${Breakpoints.getBelow('tablet')} {
        font-size: 12px;
        line-height: 17px;
        letter-spacing: 0px;
    }
`

export const DownloadIcon = styled(FaDownload)`
    font-size: 24px;
    margin-right: 1rem;
    transform: translateY(4px);

    @media ${Breakpoints.getBelow('mobile')} {
        font-size: 18px;
        margin-right: 0.5rem;
    }
`