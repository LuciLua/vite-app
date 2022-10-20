import '../src/styles/global.scss'
import 'wmr'

import { Container } from "./components/Container"
import { Menu } from "./components/Menu"
import { Main } from "./components/Main"
import { SponsorMe } from "./components/SponsorMe"
import usePost from './hooks/usePost'

function App() {

  const [post] = usePost()


  return (
    <>
      <Menu />
      <Main />
      <Container
        title={post.title}
        description={post.description} />
      <SponsorMe />
    </>
  )
}

export default App
