import React, { useContext, useState } from 'react'
// Config
import { handleContainerSize } from './handlers';
import { DeviceContext } from '_config/context/device';
// Components
import { ButtonContainer, ButtonText, CTAContainer, DownloadIcon, Info, Image, InfoContainer, LabelPrice, Price, Strong, Title, TopContainer } from './styles';
import { Button } from 'components/Button/Button';
import { Collapsible } from './Collapsible/Collapsible';
import { Devices } from '_config/device/types';

export function CTA() {
    const [collapsibleOpen, setCollapsibleOpen] = useState<boolean>(false);
    const device = useContext(DeviceContext)
    return (
        <CTAContainer
            animate={{ height: collapsibleOpen ? handleContainerSize() : '' }}
            transition={{ duration: 0.5 }}
        >
            <TopContainer>
                <div>
                    <Title>Plano Ouro</Title>
                    <LabelPrice>A partir de</LabelPrice>
                    <Price>R$ <Strong>255</Strong> ,65*</Price>
                </div>
                <InfoContainer>
                    <Info>*Valor referente ao plano Ouro Copar Q (ANS: 481.277/18-8) de 3 à 9 vidas, com 20% de copart. com faixa etária entre 0 e 18 anos. Sem IOF. Promoção válida até 30 de abril de 2021.</Info>
                    <Image src="images/logos/ouro.png" />
                </InfoContainer>
                {(collapsibleOpen && device <= Devices.tablet) && <Collapsible />}
                <ButtonContainer>
                    <Button variant='primary' onClick={() => { setCollapsibleOpen(!collapsibleOpen) }}>
                        <ButtonText>{collapsibleOpen ? 'Fechar' : 'Veja a cobertura completa'}</ButtonText>
                    </Button>
                    <Button variant='secondary'>
                        <ButtonText><DownloadIcon />Baixe a tabela de preços do plano</ButtonText>
                    </Button>
                </ButtonContainer>
            </TopContainer>
            {(collapsibleOpen && device > Devices.tablet) && <Collapsible />}
        </CTAContainer>
    );
}