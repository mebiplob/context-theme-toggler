import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContextProvider } from './context/ThemeContext'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [themeMood, setThemeMood] = useState('light')

  const darkMood = () => {
    setThemeMood('dark')
  }

  const lightMood = () => {
    setThemeMood('light')
  }


  useEffect(() => {
    const ThemeBody = document.querySelector('html')
    
    ThemeBody.classList.remove("light", "dark")
    ThemeBody.classList.add(themeMood)
  }, [themeMood])



  
  return (
    <ThemeContextProvider value={{themeMood, darkMood, lightMood}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card/>
              </div>
          </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
