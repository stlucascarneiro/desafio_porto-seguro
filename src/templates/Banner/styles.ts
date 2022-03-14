import styled from 'styled-components'
import { Breakpoints } from '_config/device/breakpoints'

import { BiX } from 'react-icons/bi'
import { motion } from 'framer-motion'

export const Container = styled.section`
    width: calc(100% - 4rem);
    height: 768px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-height: 768px;
    background: url('images/background/banner.png');
    background-size: cover;
    background-position: right;
    padding: 0 2rem;
    box-shadow: inset 0 -4px 8px 0 rgba(0,0,0,0.40);

    @media ${Breakpoints.getBelow('mobile')} {
        width: calc(100% - 2rem);
        height: 666px;
        padding: 0 1rem;

        background: url('images/background/bannerMobile.png');
        background-size: cover;
        background-position: top;  
    }
`

export const Title = styled.h3`
    max-width: 438px;
    font-size: 40px;
    font-weight: 700;
    color: ${({ theme }) => theme.neutral[50]};
    margin: 0 0 0.5rem 0;
    line-height: 55px;

    @media ${Breakpoints.getBelow('mobile')} {
        font-size: 30px;
        text-shadow: 0px 3px 4px #00000082;
        line-height: 41px;
    }
`

export const AltText = styled.p`
    max-width: 324px;
    font-size: 25px;
    font-weight: 500;
    color: ${({ theme }) => theme.neutral[50]};
    line-height: 34px;
    margin: 0;
`

export const BorderContainer = styled.div`
    width: 100%;
    max-width: 202px;
    min-width: 162px;
    height: 8px;
    border-bottom: 2px solid ${({ theme }) => theme.neutral[50]};
    margin-bottom: 1rem;
`

export const PriceContainer = styled.div`
    width: 100%;
    max-width: 460px;
    display: flex;
    font-size: 22px;
    color: ${({ theme }) => theme.neutral[50]};
    align-items: center;

    @media ${Breakpoints.getBelow('mobile')} {
        font-size: 17px;
        max-width: 340px;
    }
`

export const PriceLabel = styled.h5`
    font-weight: 400;
    font-style: italic;
    white-space: nowrap;
    margin: 0;
    margin-right: 4px;
`

export const ButtonText = styled.h5`
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 1.3px;
    margin: 12px 0;
`

export const PriceSmall = styled.h5`
    font-weight: 700;
    white-space: nowrap;
    font-size: 30px;
    margin: 0;

    &:last-of-type{
        margin-right: 1rem;
    }

    @media ${Breakpoints.getBelow('mobile')} {
        font-size: 18px;
    }
`

export const PriceLarge = styled.h5`
    font-size: 54px;
    margin: 12px 4px 0 4px;

    @media ${Breakpoints.getBelow('mobile')} {
        font-size: 33px;
    }
`

export const FooterText = styled.p`
    max-width: 476px;
    font-size: 12px;
    color: ${({ theme }) => theme.neutral[200]};
    margin-bottom: 2rem;

    @media ${Breakpoints.getBelow('mobile')} {
        font-size: 8px;
    }
`

export const DiscoverContainer = styled(motion.div)`
    width: 20px;
    height: 84px;
    position: absolute;
    right: 6rem;
    bottom: 6rem;
    display: flex;
    justify-content: space-around;
    padding: 0 1rem;
    align-items: center;
    background-color: ${({ theme }) => theme.neutral[50]};
    border-radius: 40px;
    overflow: hidden;
    opacity: 0;
`

export const CloseIcon = styled(BiX)`
    font-size: 28px;
    color: ${({ theme }) => theme.neutral[400]};
    cursor: pointer;
`

export const DiscoverText = styled.p`
    max-width: 160px;
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.neutral[900]};
    margin: 0.5rem 4px;
    white-space: nowrap;
`

export const Strong = styled.strong`
    color: ${({ theme }) => theme.primary.default};
`

export const DiscoverLink = styled.a`
    text-decoration: underline;
    cursor: pointer;
`