import { AppShell, Aside, Burger, Header, MediaQuery, Navbar } from "@mantine/core";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Head from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
function Layout() {
  const [opened, setOpened] = useState(false);
  
  return (
    <>
      <AppShell
        navbar={
          <Navbar hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 170, lg: 200 }} withBorder={false}>
            <Navigation setOpened={setOpened}/>
          </Navbar>
        }
        
        aside={
          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <Aside p="md" hiddenBreakpoint="md" width={{ md: 170, lg: 200 }} withBorder={false}>
             
            </Aside>
          </MediaQuery>
        }
        header={<Header height={60} p="md" withBorder={false} >
       <div style={{ display: 'flex',alignItems: 'center', height: '100%' }}>
         <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
           <Burger
             color='#339AFF'
             opened={opened}
             onClick={() => setOpened((o) => !o)}
             size="sm"
             mr="xl"
             className="burger"
             
             />
         </MediaQuery>
        
          <Head/>
          
       </div>
     </Header>}
     footer={<Footer/>}
>
        <Outlet />
        
      </AppShell>
    </>
  );
}

export default Layout;
