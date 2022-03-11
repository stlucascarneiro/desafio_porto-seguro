// Config
import { useContext, useState } from 'react';
import { DeviceContext } from '_config/context/device';
import { Devices } from '_config/device/types';
// Components
import { Details } from './Details';
import { CardContainer, CardImage, CardTitle, Chevron, Container, TitleContainer } from './styles';
// Assets

// Types
interface ICardProps {
    id: number,
    title: string,
    imgURL: string
}

export function Hospitals({ list }: any) {
    const [openDetailIndex, setOpenDetailIndex] = useState<number>(-1);
    const device: Devices = useContext(DeviceContext)

    function handleCardClick(id: number) {
        if (openDetailIndex !== id) {
            setOpenDetailIndex(id)
        } else {
            setOpenDetailIndex(-1)
        }
    }

    function Card({ id, title, imgURL }: ICardProps) {
        return (
            <CardContainer onClick={() => handleCardClick(id)}>
                <CardImage src={imgURL} />
                <TitleContainer>
                    <CardTitle>{title}</CardTitle>
                    <Chevron />
                </TitleContainer>
                {(id === openDetailIndex && device <= Devices.tablet) &&
                    <Details
                        open={openDetailIndex > -1}
                        detail={list[openDetailIndex].detail}
                        address={list[openDetailIndex].address}
                        phone={list[openDetailIndex].phone} />}
            </CardContainer>
        )
    }

    return (
        <>
            <Container>
                {list.map((elem: any, index: number) => {
                    if (index <= 2) {
                        return <Card key={index} id={index} title={elem.name} imgURL={elem.image} />
                    }
                })}
            </Container>

            {(openDetailIndex > -1 && device > Devices.tablet) &&
                <Details
                    open={openDetailIndex > -1}
                    detail={list[openDetailIndex].detail}
                    address={list[openDetailIndex].address}
                    phone={list[openDetailIndex].phone} />}
        </>
    );
}