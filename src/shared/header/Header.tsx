import React from 'react'
import { MenuList } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import Container from '@material-ui/core/Container'
import { AppBar } from '@material-ui/core'

export const Header = () => {
    return (
        <AppBar position='static'>
            <MenuList>
                <Container>
                    <MenuItem>Home</MenuItem>
                </Container>
            </MenuList>
        </AppBar>
    )
}
