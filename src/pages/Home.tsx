import React from 'react'
import { Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { SummaryInformationContainer } from '../components/SummaryInformationContainer'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const buttons = ['world wide', 'choose country']
export const Home = () => {
    const [searchScope, setSearchScope] = React.useState(0)
    const changeScope = (scopeIndex: number) => {
        setSearchScope(scopeIndex)
    }

    return (
        <>
            <Box marginBottom={2}>
                <Typography
                    style={{ fontWeight: 'bold' }}
                    variant='h2'
                    align='center'
                >
                    Get Latest Covid-19 updates
                </Typography>
            </Box>
            <Box marginBottom={2}>
                <Typography variant='h6'>
                    Please choose the preferred scope:
                </Typography>
            </Box>
            <Grid spacing={3} container>
                {buttons.map((button, index) => {
                    return (
                        <Grid item xs={6}>
                            <Button
                                variant='contained'
                                color='primary'
                                fullWidth={true}
                                style={{ height: '70px', fontWeight: 'bold' }}
                                onClick={() => changeScope(index + 1)}
                            >
                                {button}
                            </Button>
                        </Grid>
                    )
                })}
            </Grid>
            {searchScope > 0 && (
                <SummaryInformationContainer selectedMethod={searchScope} />
            )}
        </>
    )
}
