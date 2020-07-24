import React from 'react'
import { Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { SummaryInformationContainer } from '../components/SummaryInformationContainer'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { useTranslation } from 'react-i18next'

export const Home = () => {
    const [searchScope, setSearchScope] = React.useState(0)
    const changeScope = (scopeIndex: number) => {
        setSearchScope(scopeIndex)
    }
    const { t } = useTranslation()
    const buttons = ['world wide', 'choose country']

    return (
        <>
            <Box marginBottom={2}>
                <Typography
                    style={{ fontWeight: 'bold' }}
                    variant='h2'
                    align='center'
                >
                    {t('Get Latest Covid-19 updates')}
                </Typography>
            </Box>
            <Box marginBottom={2}>
                <Typography variant='h6' align='center'>
                    {t('Please choose your preferred scope')}
                </Typography>
            </Box>
            <Grid spacing={3} container>
                {buttons.map((button, index) => {
                    return (
                        <Grid item xs={12}>
                            <Button
                                variant='contained'
                                color='primary'
                                fullWidth={true}
                                style={{ height: '70px', fontWeight: 'bold' }}
                                onClick={() => changeScope(index + 1)}
                            >
                                {t(`${button}`)}
                            </Button>
                        </Grid>
                    )
                })}
            </Grid>
            {searchScope > 0 && (
                <Box marginBottom={5} marginTop={5}>
                    <SummaryInformationContainer selectedMethod={searchScope} />
                </Box>
            )}
        </>
    )
}
