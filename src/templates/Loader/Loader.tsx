// Components
import { Container, LoaderContainer, Logo } from './styles';
import { TailSpin } from "react-loader-spinner"
// Assets

// Types
interface IProps {
    children: string
}

export function Loader() {
    return (
        <Container>
            <div>
                <Logo src="images/logos/norteASulLogo.png" />
                <Logo src="images/logos/marlin.png" />
                <Logo src="images/logos/portoSeguroLogo.png" />
            </div>
            <LoaderContainer>
                <TailSpin color="#FFF" />
            </LoaderContainer>
        </Container>
    );
}