import '../src/styles/global.scss'
import 'wmr'

import { Main } from "./components/Main"
import { SponsorMe } from "./components/SponsorMe"
import usePost from './hooks/usePost'
import Container from './components/Container/Container'
import Menu from './components/Menu'

function App() {

  const [...post] = usePost()


  return (
    <>
      <Menu />
      <Main />
      <Container
        title={'Cards'}
        description={'cards with post here! cards with post here! cards with post here! cards with post here! cards with post here! cards with post here! cards with post here! cards with post here! cards with post here...'} />
      <SponsorMe />
    </>
  )
}

export default App
