import React, { useState } from 'react';
import RoomPage from './components/RoomPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserRole } from './types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  const style = {
    minWidth: '100vw',
    minHeight: '100vh'
  }
  const webApp = Telegram.WebApp
  const initDataUnsafe = webApp.initDataUnsafe
  const webAppUser = initDataUnsafe.user as any

  const [userState, setUserState] = useState({
    authorized: false,
    userId: webAppUser?.id,
    role: UserRole.Estimator,
  })



  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-light" style={style}>
        <div className="container-sm">
          {/* <p>Тест</p>
          <p>{JSON.stringify(initDataUnsafe, undefined, "    ")}</p>
          <p>{webAppUser?.photo_url}</p> */}
          <RoomPage userid={webAppUser.id} username = {webAppUser.first_name} room = {0} role = {0}/>
        </div>
      </div>
    </QueryClientProvider>

  )
}

export default App;
