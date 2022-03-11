import { useContext } from "react"
import { DeviceContext } from "_config/context/device"
import { Devices } from "_config/device/types"
import { Detail, DetailCard, DetailContainer, Info, InfoContainer, Item, Label, LocationIcon, PhoneIcon } from "./styles"

interface IDetailsProps {
    detail: string
    address: string
    phone: string
    open: boolean
}

export function Details({ detail, address, phone }: IDetailsProps) {
    const device: Devices = useContext(DeviceContext)
    if (device > Devices.tablet) {
        return (
            <DetailCard
                animate={{ height: 300, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            >
                <DetailContainer>
                    <Detail>{detail}</Detail>
                </DetailContainer>
                <InfoContainer>
                    <Item>
                        <LocationIcon />
                        <Label>Endereço: </Label>
                        <Info>{address}</Info>
                    </Item>
                    <Item>
                        <PhoneIcon />
                        <Label>Telefone:</Label>
                        <Info>{phone}</Info>
                    </Item>
                </InfoContainer>
            </DetailCard>
        )
    } else {
        return (
            <>
                <DetailContainer>
                    <Detail>{detail}</Detail>
                </DetailContainer>
                <InfoContainer>
                    <Item>
                        <LocationIcon />
                        <Label>Endereço: </Label>
                        <Info>{address}</Info>
                    </Item>
                    <Item>
                        <PhoneIcon />
                        <Label>Telefone:</Label>
                        <Info>{phone}</Info>
                    </Item>
                </InfoContainer>
            </>
        )
    }
}