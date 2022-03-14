import styled from 'styled-components'
import { Breakpoints } from '_config/device/breakpoints'

import { BiMenu } from 'react-icons/bi'
import { BiX } from 'react-icons/bi'

export const Container = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.neutral[50]};
    box-shadow: 0px 5px 6px #00000034;
    z-index: 4;
`

export const LogoContainer = styled.div`
    width: 12rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 2.5rem;

    @media ${`(max-width: 840px)`} {
        margin-left: 0.5rem;
        width: 11rem;
    }
    @media ${Breakpoints.getBelow('tablet')} {
        margin-left: 1.5rem;
        width: 12rem;
    }
    @media ${Breakpoints.getBelow('mobile')} {
        margin-left: 1rem;
        width: 11rem;
    }
`

export const NavContainer = styled.nav`
    margin-right: 2.5rem;

    @media ${`(max-width: 840px)`} {
        margin-right: 0.5rem;
    }
`

export const NavItem = styled.button`
    margin-left: 1.5rem;
    color: ${({ theme }) => theme.primary[700]};
    font-size: 18px;
    font-weight: 600;
    transition: .3s;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover{
        color: ${({ theme }) => theme.primary.default};
        transition: .3s;
    }
`

export const HamburguerIcon = styled(BiMenu)`
    font-size: 38px;
    margin-right: 1.5rem;
    cursor: pointer;
`
export const CloseIcon = styled(BiX)`
    font-size: 38px;
    margin-right: 1.5rem;
    cursor: pointer;
`