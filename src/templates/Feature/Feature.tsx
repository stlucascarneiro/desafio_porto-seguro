import React from 'react'
// Config

// Components
import { ButtonContainer, ButtonText, Container, DownloadIcon, Info, Image, InfoContainer, LabelPrice, Price, PriceContainer, Strong, Title, TopContainer } from './styles';
import { Button } from 'components/Button/Button';
// Assets

// Types
interface IProps {
    children: string
}

export function Feature() {
    return (
        <Container>
            <TopContainer>
                <PriceContainer>
                    <Title>Plano Ouro</Title>
                    <LabelPrice>A partir de</LabelPrice>
                    <Price>R$ <Strong>255</Strong> ,65*</Price>
                </PriceContainer>
                <InfoContainer>
                    <Info>*Valor referente ao plano Ouro Copar Q (ANS: 481.277/18-8) de 3 à 9 vidas, com 20% de copart. com faixa etária entre 0 e 18 anos. Sem IOF. Promoção válida até 30 de abril de 2021.</Info>
                    <Image src="images/logos/ouro.png" />
                </InfoContainer>
                <ButtonContainer>
                    <Button variant='primary'>
                        <ButtonText>Veja a cobertura completa</ButtonText>
                    </Button>
                    <Button variant='secondary'>
                        <ButtonText><DownloadIcon />Baixe a tabela de preços do plano</ButtonText>
                    </Button>
                </ButtonContainer>
            </TopContainer>
        </Container>
    );
}