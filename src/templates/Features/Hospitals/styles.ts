import styled from 'styled-components'
import { Breakpoints } from '_config/device/breakpoints';

import { BiChevronDown } from "react-icons/bi";
import { TiPhoneOutline } from "react-icons/ti";
import { TiLocationOutline } from "react-icons/ti";
import { motion } from 'framer-motion';

export const Container = styled.div`
    display: flex;
    margin-bottom: 2rem;
    flex-wrap: wrap;
`

export const CardContainer = styled.div`
    width: 30px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-grow: 1;
    margin-right: 1rem;
    border-radius: 12px;
    box-shadow: 0px 3px 6px #00000029;
    overflow: hidden;
    cursor: pointer;

    &:last-of-type{
        margin-right: 0;
    }

    @media ${Breakpoints.getBelow('tablet')} {
        width: 100%;
        flex-grow: 0;
        margin-bottom: 2rem;
    }
`

export const CardImage = styled.img`
    width: 100%;
    height: 230px;
    object-fit: cover;
    border-radius: 12px 12px 0 0;
`

export const TitleContainer = styled.div`
    width: 100%;
    height: 68px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-grow: 1;
    box-shadow: 0 -4px 20px 0 rgba(0,0,0,0.5);

    @media ${Breakpoints.getBelow('tablet')} {
        height: 68px;
        flex-grow: 0;
        box-shadow: none;
    }
`

export const CardTitle = styled.h5`
    font-size: 20px;
    line-height: 27px;
    font-weight: 700;
    color: ${({ theme }) => theme.primary[600]};
    margin: 0;
    transition: .3s;

    &:hover{
        color: ${({ theme }) => theme.primary[700]};
        transition: .3s;
    }
`

export const Chevron = styled(BiChevronDown)`
    font-size: 32px;
    color: ${({ theme }) => theme.neutral[400]};
    transition: .3s;

    &:hover{
        color: ${({ theme }) => theme.neutral[800]};
        transition: .3s;
    }
`

export const DetailCard = styled(motion.div)`
    width: calc(100%-6rem);
    height: 0px;
    display: flex;
    border-radius: 12px;
    box-shadow: 0px 3px 6px #00000029;
    padding: 3rem;
    overflow: hidden;
    opacity: 0;
`

export const DetailContainer = styled.div`
    width: 30px;
    display: flex;
    align-items: center;
    flex-grow: 1;
    margin-right: 1rem;
    padding-right: 1rem;
    border-right: 1px solid #C5CCD9;

    @media ${Breakpoints.getBelow('tablet')} {
        width: calc(100% - 3rem);
        flex-grow: 0;
        margin: 0;
        padding: 0;
        text-align: center;
        border-right: none;
        border-bottom: 1px solid #C5CCD9;
        padding: 1rem 0 1.5rem 0;
    }
`

export const Detail = styled.p`
    font-size: 20px;
    line-height: 27px;
    font-weight: 500;
    margin: 0;

    @media ${Breakpoints.getBelow('tablet')} {
        font-size: 12px;
        line-height: 17px;
    }
`

export const InfoContainer = styled.div`
    width: 30px;
    flex-grow: 1;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${Breakpoints.getBelow('tablet')} {
        width: 100%;
        margin: 0;
        align-items: center;
        margin: 1rem 0;
    }
`

export const Item = styled.div`
    display: flex;
    margin: 2rem 0;

    @media ${Breakpoints.getBelow('tablet')} {
        margin: 0.5rem 0;
    }
`

export const Label = styled.h5`
    font-size: 20px;
    line-height: 27px;
    font-weight: 700;
    margin: 0 1rem;

    @media ${Breakpoints.getBelow('tablet')} {
        font-size: 12px;
        line-height: 17px;
        margin: 0 0.5rem;
    }
`

export const Info = styled.p`
    width: 20px;
    flex-grow: 1;
    font-size: 20px;
    line-height: 27px;
    font-weight: 500;
    margin: 0;

    @media ${Breakpoints.getBelow('tablet')} {
        width: fit-content;
        font-size: 12px;
        line-height: 17px;
    }
`

export const LocationIcon = styled(TiLocationOutline)`
    font-size: 43px;
    color: ${({ theme }) => theme.primary.default};

    @media ${Breakpoints.getBelow('tablet')} {
        font-size: 20px;        
    }
`

export const PhoneIcon = styled(TiPhoneOutline)`
    font-size: 43px;
    color: ${({ theme }) => theme.primary.default};

    @media ${Breakpoints.getBelow('tablet')} {
        font-size: 20px;        
    }
`