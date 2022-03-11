// Config

// Components
import { ModalCard } from './styles';
// Assets

// Types
interface IProps {
    children?: any
}

export function Modal({ children }: IProps) {
    return (
        <ModalCard>
            {children}
        </ModalCard>
    );
}