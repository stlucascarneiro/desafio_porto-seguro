// Config
import { useState } from "react";
// Components
import { Body, Paragraph, UsableArea } from "./styles";
import { Banner } from "templates/Banner/Banner";
import { Menu } from "templates/Menu/Menu";
import { Navbar } from "templates/Navbar/Navbar";
import { Title } from "components/Title/Title";
import { Feature } from "templates/Feature/Feature";


export default function Home() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <>
      <Navbar openDrawer={openDrawer} setDrawer={setOpenDrawer} />
      {openDrawer && <Menu setDrawer={setOpenDrawer} />}
      <Body>
        <Banner />
        <UsableArea>
          <Title>O plano Ouro é ideal para sua empresa</Title>
          <Paragraph>Com o plano Ouro, os beneficiários contam com uma ampla Rede Referenciada de hospitais e laboratórios, além de terem mais flexibilidade para solicitar o reembolso de consultas e exames, de forma ágil e prática, e o conforto da acomodação hospitalar em apartamento.</Paragraph>
          <Feature />
        </UsableArea>
      </Body>
    </>
  )
}
