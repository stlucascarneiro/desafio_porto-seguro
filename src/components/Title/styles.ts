import styled from 'styled-components'
import { Devices } from '_config/device/types'

export const Container = styled.div`
    max-width: ${({ theme }) => theme.device <= Devices.mobile ? '251px' : ''};
`

export const H2 = styled.h2`
    color: ${({ theme }) => theme.neutral[900]};
    font-size: ${({ theme }) => theme.device <= Devices.tablet ? '22px' : '29px'};
    font-weight: 700;
    line-height: 30px;
    margin: 0;
`

export const Divider = styled.div`
    width: ${({ theme }) => theme.device < Devices.desktop_sm ? '10rem' : '13rem'};
    height: 20px;
    border-bottom: 2px solid ${({ theme }) => theme.primary.default};
`