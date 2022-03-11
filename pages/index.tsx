// Config
import { useState } from "react";
// Components
import { Body, Overlay, Paragraph, UsableArea } from "./styles";
import { Banner } from "templates/Banner/Banner";
import { Menu } from "templates/Menu/Menu";
import { Navbar } from "templates/Navbar/Navbar";
import { Title } from "components/Title/Title";
import { CTA } from "templates/CTA/CTA";
import { Hospitals } from "templates/Features/Hospitals/Hospitals";
import { Benefits } from "templates/Features/Benefits/Benefits";
import { Products } from "templates/Features/Products/Products";


export async function getStaticProps() {
  const API_HOSPITALS_URL = 'https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/hospital'
  const response = await fetch(API_HOSPITALS_URL)
    .then(res => res.json())
    .then(res => res)
  return {
    props: {
      hospitals: response
    }
  }
}


export default function Home(props: any) {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  function handleOverlay() {
    setOpenDrawer(false)
    setOpenModal(false)
  }

  return (
    <>
      <Navbar openDrawer={openDrawer} setDrawer={setOpenDrawer} />
      {openDrawer && <Menu />}
      {(openDrawer || openModal) &&
        <Overlay onClick={handleOverlay} zIndex={openModal ? 5 : 2} />}
      <Body>
        <Banner />
        <UsableArea>
          <Title>O plano Ouro é ideal para sua empresa</Title>
          <Paragraph>Com o plano Ouro, os beneficiários contam com uma ampla Rede Referenciada de hospitais e laboratórios, além de terem mais flexibilidade para solicitar o reembolso de consultas e exames, de forma ágil e prática, e o conforto da acomodação hospitalar em apartamento.</Paragraph>
          <CTA />
          <Title>Hospitais em destaque</Title>
          <Paragraph>Contando com os melhores hospitais do Rio de Janeiro, o plano Ouro dispõe para você as redes mais referenciadas com diversos benefícios para que você tenha um atendimento totalmente personalizado.</Paragraph>
          <Hospitals list={props.hospitals} />
          <Title>Benefícios do plano</Title>
          <Benefits openModal={openModal} setModal={setOpenModal} />
          <Title>Outros serviços especiais</Title>
          <Products />
        </UsableArea>
      </Body>
    </>
  )
}
