import { GoogleOAuthProvider } from '@react-oauth/google'
import Messenger from './components/Messenger'
import AccountProvider from './context/AccountProvider'

function App() {
  const clientId = '227778094159-07epbbp8p8sr846gontdp04aduffbttk.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App
