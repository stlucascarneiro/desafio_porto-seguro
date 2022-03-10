// Config
import React, { Dispatch, SetStateAction, useContext } from 'react'
import { DeviceContext } from '_config/context/device';
import { Devices } from '_config/device/types';
// Components
import { Container, LogoContainer, HamburguerIcon, CloseIcon, NavContainer, NavItem } from './styles';
// Type
interface IProps {
    openDrawer: boolean
    setDrawer: Dispatch<SetStateAction<boolean>>
}
// Assets
const LOGO_NORTEASUL_URL = '/images/logos/norteASulLogo.png'
const LOGO_PORTOSEGURO_URL = '/images/logos/portoSeguroLogo.png'

export function Navbar({ openDrawer, setDrawer }: IProps) {
    const device = useContext(DeviceContext)

    function MenuIcon() {
        if (openDrawer) {
            return <CloseIcon onClick={() => setDrawer(false)} />
        } else {
            return <HamburguerIcon onClick={() => setDrawer(true)} />
        }
    }

    return (
        <Container>
            <LogoContainer>
                <img src={LOGO_NORTEASUL_URL} />
                <img src={LOGO_PORTOSEGURO_URL} />
            </LogoContainer>
            {device > Devices.tablet
                ?
                <NavContainer>
                    <NavItem>Sobre</NavItem>
                    <NavItem>Hospitais</NavItem>
                    <NavItem>Benefícios</NavItem>
                    <NavItem>Serviços especiais</NavItem>
                    <NavItem>Contato</NavItem>
                </NavContainer>
                :
                <MenuIcon />
            }
        </Container>
    );
}