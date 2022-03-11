import React, { useContext, useState } from 'react'
// Config

// Components
import { Container, Title, PriceSmall, PriceContainer, PriceLabel, PriceLarge, FooterText, BorderContainer, ButtonText, AltText, DiscoverContainer, CloseIcon, DiscoverText, Strong, DiscoverLink } from './styles';
import { Button } from 'components/Button/Button';
import { DeviceContext } from '_config/context/device';
import { Place } from '../../../public/images/illustrations/place';
import { Devices } from '_config/device/types';
// Assets


export function Banner() {
    const [openDiscover, setOpenDiscover] = useState<boolean>(false);
    const device = useContext(DeviceContext)
    return (
        <Container onMouseEnter={() => { setOpenDiscover(true) }}>
            <Title>Conforto e qualidade para levar bem-estar com alto padrão de atendimento a seus funcionários.</Title>
            <BorderContainer />
            {device > Devices.mobile && <AltText>Conheça o plano Ouro da Porto Seguro Saúde.</AltText>}
            <PriceContainer>
                <PriceLabel>A partir de</PriceLabel>
                <PriceSmall>R$</PriceSmall>
                <PriceLarge>255</PriceLarge>
                <PriceSmall>, 65*</PriceSmall>
                <Button variant='primary'>
                    <ButtonText>VER MAIS</ButtonText>
                </Button>
            </PriceContainer>
            <FooterText>*Valor referente ao plano Ouro Copar Q (ANS: 481.277/18-8) de 3 à 9 vidas, com 20% de copart. com faixa etária entre 0 e 18 anos. Sem IOF. Promoção válida até 30 de abril de 2021.</FooterText>
            {openDiscover && <DiscoverContainer
                animate={{ width: 272, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
            >
                <CloseIcon onClick={() => { setOpenDiscover(false) }} />
                <Place fill="#F7B53D" />
                <div>
                    <DiscoverText>Quer saber ainda mais sobre <br /> o <Strong>plano Ouro?</Strong></DiscoverText>
                    <DiscoverText>
                        <DiscoverLink>Clique aqui </DiscoverLink>
                        e fale conosco!
                    </DiscoverText>
                </div>
            </DiscoverContainer>}
        </Container>
    );
}