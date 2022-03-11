import styled from 'styled-components'
import { Breakpoints } from '_config/device/breakpoints'


export const ModalCard = styled.div`
    width: calc(100% - 10rem);
    max-width: 686px;
    height: fit-content;

    position: fixed;
    top: 16%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 6;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: white;
    box-shadow: 0px 4px 8px black;
    border-radius: 12px;
    padding: 2rem 3rem;
    
    @media ${Breakpoints.getBelow('tablet')} {
        width: calc(100% - 4rem);
        padding: 2rem 1rem;
    }
`