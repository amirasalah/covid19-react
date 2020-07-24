import React from 'react'
import { MenuList } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { AppBar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

export const Header = () => {
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }
    const { t } = useTranslation()

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
                        {t('Home Page')}
                    </NavLink>
                    <button onClick={() => changeLanguage('en')}>
                        English
                    </button>
                    <button onClick={() => changeLanguage('ar')}>
                        العربية
                    </button>
                </Container>
            </MenuList>
        </AppBar>
    )
}
