import '../src/styles/global.scss'
import 'wmr'

import { Container } from "./components/Container"
import { Menu } from "./components/Menu"
import { Main } from "./components/Main"
import { SponsorMe } from "./components/SponsorMe"

function App() {

  return (
    <>
      <Menu />
      <Main/>
      <Container
        title="Introducing"
        description="Astro Islands represent a leading paradigm shift for frontend web architecture. Astro extracts your UI into smaller, isolated components on the page. Unused JavaScript is replaced with lightweight HTML, guaranteeing faster loads and time-to-interactive (TTI)." />
        <SponsorMe/>
    </>
  )
}

export default App
