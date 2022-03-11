// Config

// Components
import { ButtonLabel, ContactNumber, ContactTitle, Container, FooterText, InfoContainer, MenuContainer, MenuItem, TelephoneIcon, WhatsappIcon } from './styles';
import { Button } from 'components/Button/Button';
// Assets


export function Menu() {
    return (
        <>
            <Container
                initial={{ x: 375 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <MenuContainer>
                    <MenuItem>Sobre</MenuItem>
                    <MenuItem>Hospitais</MenuItem>
                    <MenuItem>Benefícios</MenuItem>
                    <MenuItem>Serviços Especiais</MenuItem>
                    <MenuItem>Contato</MenuItem>
                </MenuContainer>
                <InfoContainer>
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
                </InfoContainer>
            </Container>
        </>
    );
}