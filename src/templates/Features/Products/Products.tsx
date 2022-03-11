// Config

// Components
import { Divisor, CardContainer, Image, Li, Paragraph, ProductsContainer, Title, Ul, CheckIcon } from './styles';
// Assets

// Types
interface IProps {
    children: string
}

export function Products() {
    return (
        <ProductsContainer>
            <CardContainer>
                <Image src="images/background/products1.png" />
                <Title>Alô saúde</Title>
                <Paragraph>Orientação médica 24h por dia, 7 dias por semana, via telefone.</Paragraph>
                <Divisor />
                <Ul>
                    <Li><CheckIcon />Médico via ligação</Li>
                    <Li><CheckIcon />Orientação nutricional, esportiva e para gestantes</Li>
                    <Li><CheckIcon />Dor/Imprevisto</Li>
                    <Li><CheckIcon />Auxílio na preparação de exames</Li>
                    <Li><CheckIcon />Indicação de prestador isentando a cobrança de coparticipação</Li>
                </Ul>
            </CardContainer>
            <CardContainer>
                <Image src="images/background/products2.png" />
                <Title>Psicologia viva</Title>
                <Paragraph>Psicólogo via vídeo chamada</Paragraph>
                <Divisor />
                <Ul>
                    <Li><CheckIcon />Conecta psicólogos com pacientes por meio de atendimento on-line. Com ela, o segurado tem acesso a uma ampla rede de psicólogos referenciados para cuidar da sua saúde emocional, 24 horas por dia.</Li>
                </Ul>
            </CardContainer>
        </ProductsContainer>
    );
}