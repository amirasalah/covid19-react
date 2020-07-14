import React from 'react'
import { Header } from '../shared/header/Header'
// import { Footer } from '../shared/footer/Footer'
import { Home } from '../pages/Home'
import { StoreContainer } from '../store'

const App = () => {
    return (
        <StoreContainer.Provider>
            <Header />
            <Home />
            {/* <Footer /> */}
        </StoreContainer.Provider>
    )
}

export default App
