import { FaDownload } from 'react-icons/fa'
import styled from 'styled-components'
import { Breakpoints } from '_config/device/breakpoints'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 3rem;

    @media ${Breakpoints.getBelow('tablet')} {
        flex-wrap: wrap;
    }
`

export const CardContainer = styled.div`
    width: calc(50% - 2rem);
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    box-shadow: 0px 3px 6px #00000029;

    @media ${Breakpoints.getBelow('tablet')} {
        width: 100%;
        max-width: none;
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
    margin: 2.5rem 0;
    color: ${({ theme }) => theme.primary[600]};

    @media ${Breakpoints.getBelow('tablet')} {
        width: calc(100% - 4rem);
        font-size: 15px;
        line-height: 20px;
    }
`

export const Paragraph = styled.p`
    width: calc(100% - 5rem);
    margin: 0 0 2.5rem 0;

    @media ${Breakpoints.getBelow('tablet')} {
        width: calc(100% - 4rem);
        font-size: 12px;
        line-height: 17px;
    }
`

export const ButtonContainer = styled.div`
    width: calc(100% - 5rem);

    @media ${Breakpoints.getBelow('tablet')} {
        width: calc(100% - 4rem);
        margin-bottom: 2rem;
    }
`

export const ButtonText = styled.span`
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 1.4px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0.75rem 0;
    color: ${({ theme }) => theme.neutral[50]};

    @media ${Breakpoints.getBelow('tablet')} {
        font-size: 9px;
        line-height: 13px;
    }
`

export const ModalTitle = styled.h4`
    width: calc(100% - 5rem);
    font-size: 30px;
    line-height: 41px;
    font-weight: 700;
    color: ${({ theme }) => theme.primary[600]};
    margin: 0 0 2rem 0;

    @media ${Breakpoints.getBelow('tablet')} {
        width: calc(100% - 4rem);
        font-size: 15px;
        line-height: 20px;
    }
`

export const ModalCaption = styled.h5`
    width: calc(100% - 5rem);
    font-size: 20px;
    line-height: 27px;
    font-weight: 700;
    color: ${({ theme }) => theme.neutral[800]};
    margin: 0 0 0.5rem 0;

    @media ${Breakpoints.getBelow('tablet')} {
        width: calc(100% - 4rem);
        font-size: 12px;
        line-height: 20px;
    }
`

export const ModalUl = styled.ul`
    width: calc(100% - 5rem);
    margin: 0;
    list-style-type: none;
    padding: 0;
    margin-bottom: 2rem;
`
export const ModalLi = styled.li`
    font-size: 20px;
    line-height: 27px;

    @media ${Breakpoints.getBelow('tablet')} {
        font-size: 12px;
        line-height: 20px;
    }
`

export const ModalButtonText = styled.p`
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 1.4px;
    font-weight: 700;
    text-transform: uppercase;
    white-space: nowrap;
    margin: 0.75rem 0;
    color: ${({ theme }) => theme.neutral[50]};

    @media ${Breakpoints.getBelow('tablet')} {
        font-size: 12px;
        line-height: 17px;
        margin: 0.5rem 0;
        letter-spacing: 0px;
    }
`

export const DownloadIcon = styled(FaDownload)`
    font-size: 24px;
    transform: translateY(4px);

    @media ${Breakpoints.getBelow('tablet')} {
        font-size: 16px;
    }
`