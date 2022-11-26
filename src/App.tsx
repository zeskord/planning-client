import React from 'react';


function App() {

  const style = {
    minWidth: '100vw',
    minHeight: '100vh'
  }
  const webApp = Telegram.WebApp
  const initDataUnsafe = webApp.initDataUnsafe
  const webAppUser = initDataUnsafe.user

  return (
    <div className="bg-light" style={style}>
      <div className="container-sm">
        <p>Тест</p>
        <p>{JSON.stringify(initDataUnsafe, undefined, "    ")}</p>
        <p>{webAppUser?.photo_url}</p>
      </div>
    </div>

  );
}

export default App;
