import React from 'react'
import { MenuList, Grid, Button } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { AppBar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

export const Header = () => {
    const { t } = useTranslation()
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        i18n.dir() === 'rtl'
            ? (document.body.style.direction = 'rtl')
            : (document.body.style.direction = 'ltr')
    }
    return (
        <AppBar position='static'>
            <Container>
                <MenuList>
                    <Grid container justify='space-between'>
                        <Grid item>
                            <Button
                                variant='contained'
                                onClick={() => changeLanguage('en')}
                                color='primary'
                            >
                                <NavLink
                                    style={{
                                        color: '#fff',
                                        textDecoration: 'none',
                                        fontWeight: 'bold',
                                    }}
                                    to='/'
                                >
                                    {t('Home Page')}
                                </NavLink>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant='contained'
                                onClick={() => changeLanguage('en')}
                                color='primary'
                            >
                                English
                            </Button>
                            <Button
                                variant='contained'
                                onClick={() => changeLanguage('ar')}
                                color='primary'
                            >
                                العربية
                            </Button>
                        </Grid>
                    </Grid>
                </MenuList>
            </Container>
        </AppBar>
    )
}
