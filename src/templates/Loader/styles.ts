import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.primary.default};
`

export const Logo = styled.img`
    margin: 0 1rem;
`

export const LoaderContainer = styled.div`
    margin-top: 2rem;
`