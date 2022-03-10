import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.neutral[50]};
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 12px;
`