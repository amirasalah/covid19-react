import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import { ReactComponent as DeathIcon } from '../icons/004-man.svg'
import { ReactComponent as NewIcon } from '../icons/049-quarantine.svg'
import { ReactComponent as Death2Icon } from '../icons/045-ambulance.svg'
import { ReactComponent as RecoveredIcon } from '../icons/050-elbow.svg'
import { ReactComponent as TotalConfirmedIcon } from '../icons/036-sore throat.svg'
import { ReactComponent as TotalRecoveredIcon } from '../icons/016-family.svg'
import { SummaryContainer } from '../shared/summaryContainer/summaryContainer'
import { CardTitle } from '../shared/CardTitle/CardTitle'

interface ISummaryInformation {
    summary: {
        NewConfirmed: string
        NewDeaths: string
        NewRecovered: string
        TotalConfirmed: string
        TotalDeaths: string
        TotalRecovered: string
    }
}
const iconStyle = { width: '50px', height: '50px' }
export const SummaryInformation: React.FC<ISummaryInformation> = ({
    summary,
}) => {
    const {
        NewConfirmed,
        NewDeaths,
        NewRecovered,
        TotalConfirmed,
        TotalDeaths,
        TotalRecovered,
    } = summary
    return (
        <Grid container spacing={3}>
            <SummaryContainer>
                <DeathIcon style={iconStyle} />
                <CardTitle variantType='h6'>New Confirmed Cases</CardTitle>
                <CardTitle variantType='h2'>{NewConfirmed}</CardTitle>
            </SummaryContainer>
            <SummaryContainer>
                <Death2Icon style={iconStyle} />
                <CardTitle variantType='h6'>New Deaths Cases</CardTitle>
                <CardTitle variantType='h2'>{NewDeaths}</CardTitle>
            </SummaryContainer>
            <SummaryContainer>
                <RecoveredIcon style={iconStyle} />
                <CardTitle variantType='h6'>New Recovered Cases</CardTitle>
                <CardTitle variantType='h2'>{NewRecovered}</CardTitle>
            </SummaryContainer>
            <SummaryContainer>
                <TotalConfirmedIcon style={iconStyle} />
                <CardTitle variantType='h6'>Total Confirmed Cases</CardTitle>
                <CardTitle variantType='h2'>{TotalConfirmed}</CardTitle>
            </SummaryContainer>
            <SummaryContainer>
                <DeathIcon style={iconStyle} />
                <CardTitle variantType='h6'>Total Deaths Cases</CardTitle>
                <CardTitle variantType='h2'>{TotalDeaths}</CardTitle>
            </SummaryContainer>
            <SummaryContainer>
                <TotalRecoveredIcon style={iconStyle} />
                <CardTitle variantType='h6'>Total Recovered Cases:</CardTitle>
                <CardTitle variantType='h2'>{TotalRecovered}</CardTitle>
            </SummaryContainer>
        </Grid>
    )
}
