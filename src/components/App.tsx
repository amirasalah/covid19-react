import React from 'react'
import { Header } from '../shared/header/Header'
// import { Footer } from '../shared/footer/Footer'
import { Home } from '../pages/Home'
import { StoreContainer } from '../store'
import Container from '@material-ui/core/Container'
import { Box } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'

const App = () => {
    return (
        <StoreContainer.Provider>
            <CssBaseline />
            <Header />
            <Container>
                <Box marginTop={3} marginBottom={3}>
                    <Home />
                </Box>
            </Container>
            {/* <Footer /> */}
        </StoreContainer.Provider>
    )
}

export default App
