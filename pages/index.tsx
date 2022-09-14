import type { NextPage } from 'next'
import { FormEvent, useContext, useEffect, useState } from 'react'
import { Box, Button, Input, useColorMode } from '@chakra-ui/react'
import { AuthContext } from '../contexts/AuthContext'
import { withSSRGuest } from '../utils/withSSRGuest'

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useContext(AuthContext)

  useEffect(() => {
    if (colorMode === 'light') {

      toggleColorMode()
    }
  }, [])

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {
      email,
      password
    }


    signIn(data)

  }

  return (
    <Box>
      <Box width='500px'>

        <form onSubmit={handleSubmit} >
          <Input type='email' value={email} onChange={e => setEmail(e.target.value)} />
          <Input type='password' value={password} onChange={e => setPassword(e.target.value)} />
          <Button type='submit'>Entrar</Button>
        </form>
      </Box>
    </Box>
  )
}

export default Home


export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {}
  }
})

