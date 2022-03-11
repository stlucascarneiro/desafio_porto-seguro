import styled from 'styled-components'
import { motion } from "framer-motion"

import { BsWhatsapp } from 'react-icons/bs'
import { BsTelephoneFill } from 'react-icons/bs'

export const Container = styled(motion.div)`
    width: 100%;
    max-width: 375px;
    height: calc(100% - 96px);
    background-color: ${({ theme }) => theme.primary[800]};
    position: fixed;
    top: 96px;
    right: 0;
    z-index: 3;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
    overflow: auto;
`

export const MenuContainer = styled.div`
    
`

export const MenuItem = styled.button`
    width: 100%;
    text-align: left;
    background-color: transparent;
    border: none;
    font-size: 21px;
    font-weight: 600;
    line-height: 28px;
    font-family: "Open Sans";
    color: ${({ theme }) => theme.neutral[50]};
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.primary[400]};
    margin-top: 20px;
    transition: .3;
    padding-left: 1rem;
    cursor: pointer;

    &:hover{
        color: ${({ theme }) => theme.neutral[200]};
        transition: .3;
    }
`

export const InfoContainer = styled.div`
    margin-top: 4rem;
    padding: 0 1rem;
`

export const ContactTitle = styled.h4`
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.neutral[50]};
    text-align: center;
    margin: 0 0 0.5rem 0;
    text-transform: uppercase;
`

export const ContactNumber = styled.h5`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.neutral[50]};
    text-align: center;
    margin: 0;
`

export const WhatsappIcon = styled(BsWhatsapp)`
    font-size: 40px;
`
export const TelephoneIcon = styled(BsTelephoneFill)`
    font-size: 40px;
`

export const ButtonLabel = styled.h5`
    width: 100%;
    max-width: 196px;
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.neutral[50]};
    text-transform: uppercase;
    text-align: left;
    margin-left: 1rem;
`

export const FooterText = styled.p`
    font-size: 12px;
    font-weight: 300;
    color: ${({ theme }) => theme.neutral[50]};
    text-align: center;
`