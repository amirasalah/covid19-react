import React from 'react'
import { Typography, Grid, Box } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { ReactComponent as Death } from '../icons/004-man.svg'
import { ReactComponent as New } from '../icons/049-quarantine.svg'
import { ReactComponent as Death2 } from '../icons/045-ambulance.svg'
import { ReactComponent as Recovered } from '../icons/050-elbow.svg'
import { ReactComponent as TotalConfirmed } from '../icons/036-sore throat.svg'
import { ReactComponent as TotalRecovered } from '../icons/016-family.svg'

export const SummaryInformation: React.FC<any> = ({ summary }) => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <Box
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <New
                                    style={{ width: '50px', height: '50px' }}
                                />
                            </Box>
                            <Typography
                                style={{ fontWeight: 'bold' }}
                                variant='h6'
                                align='center'
                            >
                                New Confirmed Cases
                            </Typography>
                            <Typography
                                align='center'
                                style={{ fontWeight: 'bold' }}
                                variant='h2'
                            >
                                {summary.NewConfirmed}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <Box
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Death2
                                    style={{ width: '50px', height: '50px' }}
                                />
                            </Box>
                            <Typography
                                style={{ fontWeight: 'bold' }}
                                variant='h6'
                                align='center'
                            >
                                New Deaths Cases
                            </Typography>
                            <Typography
                                align='center'
                                style={{ fontWeight: 'bold' }}
                                variant='h2'
                            >
                                {' '}
                                {summary.NewDeaths}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <Box
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Recovered
                                    style={{ width: '50px', height: '50px' }}
                                />
                            </Box>
                            <Typography
                                style={{ fontWeight: 'bold' }}
                                variant='h6'
                                align='center'
                            >
                                New Recovered Cases
                            </Typography>
                            <Typography
                                align='center'
                                style={{ fontWeight: 'bold' }}
                                variant='h2'
                            >
                                {summary.NewRecovered}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <Box
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <TotalConfirmed
                                    style={{ width: '50px', height: '50px' }}
                                />
                            </Box>
                            <Typography
                                style={{ fontWeight: 'bold' }}
                                variant='h6'
                                align='center'
                            >
                                Total Confirmed Cases
                            </Typography>
                            <Typography
                                align='center'
                                style={{ fontWeight: 'bold' }}
                                variant='h2'
                            >
                                {summary.TotalConfirmed}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <Box
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Death
                                    style={{ width: '50px', height: '50px' }}
                                />
                            </Box>
                            <Typography
                                style={{ fontWeight: 'bold' }}
                                variant='h6'
                                align='center'
                            >
                                Total Deaths Cases
                            </Typography>
                            <Typography
                                align='center'
                                style={{ fontWeight: 'bold' }}
                                variant='h2'
                            >
                                {summary.TotalDeaths}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <Box
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <TotalRecovered
                                    style={{ width: '50px', height: '50px' }}
                                />
                            </Box>
                            <Typography
                                style={{ fontWeight: 'bold' }}
                                variant='h6'
                                align='center'
                            >
                                Total Recovered Cases:
                            </Typography>
                            <Typography
                                align='center'
                                style={{ fontWeight: 'bold' }}
                                variant='h2'
                            >
                                {summary.TotalRecovered}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
