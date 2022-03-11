import { BsTelephoneFill, BsWhatsapp } from 'react-icons/bs'
import styled from 'styled-components'
import { Breakpoints } from '_config/device/breakpoints'

export const MoreContainer = styled.div`
    margin-top: 3rem;
`

export const InfoContainer = styled.div`
    display: flex;
`

export const Paragraph = styled.p`
    width: 30px;
    max-width: 800px;
    flex-grow: 1;
    
    font-size: 20px;
    line-height: 27px;
    margin: 0 0 0 2rem;
    
    @media ${Breakpoints.getBelow('tablet')} {
        font-size: 15px;
        line-height: 20px;
    }
`

export const ActionContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;

    @media ${Breakpoints.getBelow('tablet')} {
        flex-wrap: wrap;
    }
`

export const FormContainer = styled.div`
    width: 100px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 2rem;
    margin-right: 1rem;
    border-right: 1px solid ${({ theme }) => theme.neutral[200]};

    @media ${Breakpoints.getBelow('tablet')} {
        width: 100%;
        padding-right: 0;
        margin-right: 0;
        border: none;
    }
`

export const ButtonText = styled.span`
    width: 290px;
    font-size: 15px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 0.75rem 0;
    font-family: 'Open Sans', sans-serif;
`

export const ButtonSection = styled.div`
    width: 100px;
    flex-grow: 1;
    padding: 0 1rem;

    @media ${Breakpoints.getBelow('tablet')} {
        width: 100%;
        margin-top: 2rem;
    }
`

export const ContactTitle = styled.h4`
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.neutral[500]};
    text-align: center;
    margin: 0 0 0.5rem 0;
    text-transform: uppercase;
`

export const ContactNumber = styled.h5`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.primary.default};
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
    color: ${({ theme }) => theme.neutral[800]};
    text-align: center;
`