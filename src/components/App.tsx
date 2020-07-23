import React from 'react'
import { Header } from '../shared/header/Header'
// import { Footer } from '../shared/footer/Footer'
import { Home } from '../pages/Home'
import { StoreContainer } from '../store'
import Container from '@material-ui/core/Container'
import { Box } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CountryDetails } from './CountryDetails'

const App = () => {
    return (
        <Router>
            <StoreContainer.Provider>
                <CssBaseline />
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Container>
                            <Box marginTop={3} marginBottom={3}>
                                <Home />
                            </Box>
                        </Container>
                    </Route>
                    <Route path='/:country'>
                        <CountryDetails />
                    </Route>
                </Switch>
                {/* <Footer /> */}
            </StoreContainer.Provider>
        </Router>
    )
}

export default App
