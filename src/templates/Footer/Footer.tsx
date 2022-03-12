// Components
import { Container, Image, Paragraph } from './styles';

export function Footer() {
    return (
        <Container>
            <Image src="images/logos/ouro.png" />
            <Paragraph>Desenvolvimento: <Image src="images/logos/marlin.png" /></Paragraph>
            <Paragraph>Todos os direitos reservados. © 2021 <br /> Norte a Sul Corretora de Seguros de Vida, Capitalização, Previdência Privada e Planos de Saúde LTDA CNPJ 14.280.310/0001-11 Av. Nilo Peçanha, 50 - Sala 809 - Centro Rio de Janeiro/RJ - CEP: 20.020-906</Paragraph>
        </Container>
    );
}