import React from 'react'
import { Grid } from '@material-ui/core'
import { ReactComponent as DeathIcon } from '../icons/004-man.svg'
import { ReactComponent as NewIcon } from '../icons/049-quarantine.svg'
import { ReactComponent as Death2Icon } from '../icons/045-ambulance.svg'
import { ReactComponent as RecoveredIcon } from '../icons/050-elbow.svg'
import { ReactComponent as TotalConfirmedIcon } from '../icons/036-sore throat.svg'
import { ReactComponent as TotalRecoveredIcon } from '../icons/016-family.svg'
import { SummaryContainer } from '../shared/summaryContainer/summaryContainer'
import { CardTitle } from '../shared/cardTitle/CardTitle'
import { default as NumberFormat } from 'react-number-format'


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
                <NewIcon style={iconStyle} />
                <CardTitle variantType='h6'>New Confirmed Cases</CardTitle>
                <CardTitle variantType='h2'>
                    <NumberFormat
                        value={NewConfirmed}
                        displayType={'text'}
                        thousandSeparator={true}
                    />
                </CardTitle>
            </SummaryContainer>
            <SummaryContainer>
                <Death2Icon style={iconStyle} />
                <CardTitle variantType='h6'>New Deaths Cases</CardTitle>
                <CardTitle variantType='h2'>
                    <NumberFormat
                        value={NewDeaths}
                        displayType={'text'}
                        thousandSeparator={true}
                    />
                </CardTitle>
            </SummaryContainer>
            <SummaryContainer>
                <RecoveredIcon style={iconStyle} />
                <CardTitle variantType='h6'>New Recovered Cases</CardTitle>
                <CardTitle variantType='h2'>
                    <NumberFormat
                        value={NewRecovered}
                        displayType={'text'}
                        thousandSeparator={true}
                    />
                </CardTitle>
            </SummaryContainer>
            <SummaryContainer>
                <TotalConfirmedIcon style={iconStyle} />
                <CardTitle variantType='h6'>Total Confirmed Cases</CardTitle>
                <CardTitle variantType='h2'>
                    <NumberFormat
                        value={TotalConfirmed}
                        displayType={'text'}
                        thousandSeparator={true}
                    />
                </CardTitle>
            </SummaryContainer>
            <SummaryContainer>
                <DeathIcon style={iconStyle} />
                <CardTitle variantType='h6'>Total Deaths Cases</CardTitle>
                <CardTitle variantType='h2'>
                    <NumberFormat
                        value={TotalDeaths}
                        displayType={'text'}
                        thousandSeparator={true}
                    />
                </CardTitle>
            </SummaryContainer>
            <SummaryContainer>
                <TotalRecoveredIcon style={iconStyle} />
                <CardTitle variantType='h6'>Total Recovered Cases:</CardTitle>
                <CardTitle variantType='h2'>
                    <NumberFormat
                        value={TotalRecovered}
                        displayType={'text'}
                        thousandSeparator={true}
                    />
                </CardTitle>
            </SummaryContainer>
        </Grid>
    )
}
