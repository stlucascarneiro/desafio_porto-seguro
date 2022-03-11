// Config
import { Dispatch, SetStateAction } from 'react';
// Components
import { Button } from 'components/Button/Button';
import { ButtonContainer, ButtonText, CardContainer, BenefitsContainer, DownloadIcon, Image, ModalButtonText, ModalCaption, ModalLi, ModalTitle, ModalUl, Paragraph, Title } from './styles';
import { Modal } from 'components/Modal/Modal';
// Assets

// Types
interface IProps {
    openModal: boolean
    setModal: Dispatch<SetStateAction<boolean>>
}

export function Benefits({ openModal, setModal }: IProps) {
    return (
        <>
            <BenefitsContainer>
                <CardContainer>
                    <Image src="images/background/recepcao.png" />
                    <Title>Rede referenciada</Title>
                    <Paragraph>
                        Com o plano Ouro da Porto Seguro Saúde, você conta com uma <strong>rede referenciada de hospitais</strong> com toda a comodidade que você e seus funcionários precisam.
                    </Paragraph>
                    <ButtonContainer>
                        <Button variant='secondary' onClick={() => { setModal(true) }}>
                            <ButtonText>Veja a lista completa de hospitais</ButtonText>
                        </Button>
                    </ButtonContainer>
                </CardContainer>
                <CardContainer>
                    <Image src="images/background/piggybank.png" />
                    <Title>Reembolso de consultas e exames simples</Title>
                    <Paragraph>
                        Com o plano Ouro, receba o <strong>reembolso de seus exames e consultas</strong> em até <strong>48 horas</strong> úteis, a partir da data de entrega de todos os documentos necessários.
                    </Paragraph>
                    <Paragraph>
                        Plano Ouro Max: <strong>R$280,00</strong>
                    </Paragraph>
                </CardContainer>
            </BenefitsContainer>
            {openModal &&
                <Modal>
                    <ModalTitle>Hospitais de referência</ModalTitle>
                    <ModalCaption>Rio de Janeiro:</ModalCaption>
                    <ModalUl>
                        <ModalLi>- Copa D’or </ModalLi>
                        <ModalLi>- Quinta D’or </ModalLi>
                        <ModalLi>- Barra D’or </ModalLi>
                        <ModalLi>- Casa de Saúde São Jose (Humaitá) </ModalLi>
                        <ModalLi>- Clínica São Vicente da Gávea </ModalLi>
                        <ModalLi>- Hospital Vitória (Barra) </ModalLi>
                        <ModalLi>- Perinatal Laranjeiras </ModalLi>
                        <ModalLi>- Perinatal Barra São Paulo: </ModalLi>
                    </ModalUl>
                    <ModalCaption>São Paulo:</ModalCaption>
                    <ModalUl>
                        <ModalLi>- Hospital Alemão Oswaldo Cruz </ModalLi>
                        <ModalLi>- Hospital 9 de Julho </ModalLi>
                        <ModalLi>- Hospital São Luiz – Anália Franco / Itaim /Morumbi / S.C. Sul</ModalLi>
                    </ModalUl>
                    <Button variant='secondary' style={{ width: '100%' }} onClick={() => { setModal(false) }}>
                        <ModalButtonText>
                            <DownloadIcon /> Baixe a lista completa de hospitais
                        </ModalButtonText>
                    </Button>
                </Modal>}
        </>
    );
}