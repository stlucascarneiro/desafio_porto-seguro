// Components
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { PhoneCall } from '../../../public/images/illustrations/phoneCall';
import { MoreContainer, InfoContainer, Paragraph, FormContainer, ActionContainer, ButtonText, ButtonSection, ContactTitle, ContactNumber, WhatsappIcon, ButtonLabel, TelephoneIcon, FooterText } from './styles';

export function More() {
    return (
        <MoreContainer>
            <InfoContainer>
                <PhoneCall fill="#efc566" />
                <Paragraph>Ainda sobrou alguma dúvida sobre qual o melhor Plano para sua empresa?<br /> Envie seus dados e deixe que a NS Benefícios entrará em contato assim que possível.</Paragraph>
            </InfoContainer>
            <ActionContainer>
                <FormContainer>
                    <Input type='name' />
                    <Input type='phone' />
                    <Input type='email' />
                    <Button variant='primary' style={{ width: 'fit-content' }}>
                        <ButtonText>Enviar Contato</ButtonText>
                    </Button>
                </FormContainer>
                <ButtonSection>
                    <ContactTitle>Fale conosco agora mesmo:</ContactTitle>
                    <ContactNumber>4020-6440</ContactNumber>
                    <Button variant='primary' style={{ borderRadius: '12px', marginTop: '1rem' }}>
                        <WhatsappIcon />
                        <ButtonLabel>Clique aqui para enviar uma mensagem</ButtonLabel>
                    </Button>
                    <Button variant='primary' style={{ borderRadius: '12px', marginTop: '1rem' }}>
                        <TelephoneIcon />
                        <ButtonLabel>Clique aqui para enviar uma mensagem</ButtonLabel>
                    </Button>
                    <FooterText>Horário de Atendimento de 8h às 17h</FooterText>
                </ButtonSection>
            </ActionContainer>
        </MoreContainer>
    );
}