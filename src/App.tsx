import React, {useState} from 'react';
import RoomPage from './components/RoomPage'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  const style = {
    minWidth: '100vw',
    minHeight: '100vh'
  }
  const webApp = Telegram.WebApp
  const initDataUnsafe = webApp.initDataUnsafe
  const webAppUser = initDataUnsafe.user

  const [userState, setUserState] = useState({
    webAppUser: webAppUser,
    isSpectator: false
  })

  return (
    <div className="bg-light" style={style}>
      <div className="container-sm">
        <p>Тест</p>
        <p>{JSON.stringify(initDataUnsafe, undefined, "    ")}</p>
        <p>{webAppUser?.photo_url}</p>
        <RoomPage/>
      </div>
    </div>

  )
}

export default App;
