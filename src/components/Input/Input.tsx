// Config
import { useState } from 'react';
import { IInputValidation, InputType, UserValidations } from 'middlewares/validations';
import { handlePhoneMask } from './handlers';
// Components
import { Container, Feedback, HTMLInput, Legend } from './styles';
// Assets

// Types
interface IProps {
    type: InputType
}

const inputTypes = {
    name: {
        type: 'text',
        title: 'Nome:',
        placeholder: 'Seu nome.'
    },
    phone: {
        type: 'text',
        title: 'Telefone:',
        placeholder: '(DDD) 99999-9999'
    },
    email: {
        type: 'email',
        title: 'E-mail:',
        placeholder: 'seuemail@email.com'
    }
}

export function Input({ type }: IProps) {
    const [inputValue, setInputValue] = useState<string>('');
    const [inputValidation, setInputValidation] = useState<IInputValidation>({ invalid: false, message: '' });

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (type === 'phone') {
            const value: string = handlePhoneMask(e.target.value)
            setInputValue(value)
        } else {
            setInputValue(e.target.value)
        }
        setInputValidation(UserValidations.validateInput(type, e.target.value, false))
    }

    function handleBlur(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        setInputValidation(UserValidations.validateInput(type, e.target.value, true))
    }

    return (
        <Container>
            <Legend>{inputTypes[type].title}</Legend>
            <HTMLInput
                type={inputTypes[type].type}
                value={inputValue}
                placeholder={inputTypes[type].placeholder}
                onChange={handleInputChange}
                onBlur={handleBlur} />
            {inputValidation.invalid && <Feedback>{inputValidation.message}</Feedback>}
        </Container>
    );
}