import React from 'react'
import tw from 'twin.macro'
import { Footer, Header } from './components/sections'
import Home from './pages/Home'
import Blog from './pages/List'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-gray-50 to-black`
  ]
}

const App = () => (
  <>
    <Header />
    <Home />
    <Blog />
    <Footer />
  </>
)

export default App
