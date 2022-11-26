import React from 'react';


function App() {

  const style = {
    minWidth: '100vw',
    minHeight: '100vh'
  }
  const webApp = Telegram.WebApp
  const initDataUnsafe = webApp.initDataUnsafe

  return (
    <div className="bg-light" style={style}>
      <div className="container-sm">
        <p>Тест</p>
        <p>{JSON.stringify(initDataUnsafe)}</p>
      </div>
    </div>

  );
}

export default App;
