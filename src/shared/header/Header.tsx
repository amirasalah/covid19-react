import React from 'react'
import { MenuList } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { AppBar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <AppBar position='static'>
            <MenuList>
                <Container>
                    <NavLink
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                        }}
                        to='/'
                    >
                        Home
                    </NavLink>
                </Container>
            </MenuList>
        </AppBar>
    )
}
