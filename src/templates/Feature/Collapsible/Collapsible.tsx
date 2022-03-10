import React, { useContext } from 'react'
// Config

// Components
import { CollapsibleContainer, Divider, FooterContainer, FooterItem, FooterText, FooterTitle, Item, ListColumn, ListContainer, SubText } from './styles';
// Assets
import { Hospital } from '../../../../public/images/illustrations/hospital';
import { Place } from '../../../../public/images/illustrations/place';
import { Devices } from '_config/device/types';
import { DeviceContext } from '_config/context/device';

// Types
interface IProps {
    children: string
}

export function Collapsible() {
    const device = useContext(DeviceContext)
    return (
        <CollapsibleContainer>
            <ListContainer>
                <ListColumn>
                    <Item>Acupuntura</Item>
                    <Item>Atendimento ambulatorial e hospitalar com obstetrícia</Item>
                    <Item>Cirurgias de miopia e astigmatismo <SubText>conforme Rol de Procedimentos da Agência Nacional de Saúde Suplementar (ANS)</SubText> </Item>
                </ListColumn>
                <ListColumn>
                    <Item>Escleroterapia</Item>
                    <Item>Fisioterapia</Item>
                    <Item>Quimioterapia</Item>
                    <Item>Próteses e órteses <SubText>(ligadas ao ato cirúrgico e sem finalidade estética)</SubText> </Item>
                </ListColumn>
                <ListColumn>
                    <Item>Transplantes de rim, medula, córnea, coração e pâncreas <SubText>(conforme estabelecido pela ANS)</SubText> </Item>
                    <Item>Reeducação Postura Global (RPG) <SubText>(coberturas adicionais ao Rol de procedimentos da ANS somente em prestadores designados)</SubText> </Item>
                    <Item>Transtornos mentais</Item>
                </ListColumn>
            </ListContainer>
            {device > Devices.tablet && <Divider />}
            <FooterContainer>
                <FooterItem>
                    <Hospital fill='#FFF' />
                    <div>
                        <FooterTitle>Opções de acomodação:</FooterTitle>
                        <FooterText>Apartamento</FooterText>
                    </div>
                </FooterItem>
                <FooterItem>
                    <Place fill="#FFF" />
                    <div>
                        <FooterTitle>Abrangência:</FooterTitle>
                        <FooterText>Nacional</FooterText>
                    </div>
                </FooterItem>
            </FooterContainer>
        </CollapsibleContainer>
    );
}