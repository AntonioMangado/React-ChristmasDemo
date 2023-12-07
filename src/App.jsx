import { useContext, useState } from 'react'
import { UserContext } from './context/UserContext'
import { ThemeContext } from './context/ThemeContext'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Snowfall from 'react-snowfall'
import './App.css'

function App() {
  const [username, setUsername] = useState('Antonio');
  const [theme, setTheme] = useState("night");

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };

  // Actualizar tema
  const toggleTheme = ()=> theme=="day"? setTheme("night"):setTheme("day");
  const themeData = {
    theme,
    toggleTheme
  }


  const userData = { username, updateUsername }

  return (
    <>
      <Provider store={store}>
        <ThemeContext.Provider value= {themeData}>
          <BrowserRouter >
            <UserContext.Provider value={ userData }>
            <Snowfall/>   
              <Header/>
              <Main />
            </UserContext.Provider> 
          </BrowserRouter >
          <Footer/>
        </ThemeContext.Provider>
      </Provider>
    </>
  )
}

export default App
