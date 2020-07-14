import React from 'react'
import { Typography } from '@material-ui/core'

export const SummaryInformation: React.FC<any> = ({ summary }) => {
    return (
        <>
            <Typography>
                NewConfirmed:
                {summary.NewConfirmed}
            </Typography>
            <Typography>NewDeaths: {summary.NewDeaths}</Typography>
            <Typography>
                NewRecovered:
                {summary.NewRecovered}
            </Typography>
            <Typography>
                TotalConfirmed:
                {summary.TotalConfirmed}
            </Typography>
            <Typography>
                TotalDeaths:
                {summary.TotalDeaths}
            </Typography>
            <Typography>
                TotalRecovered:
                {summary.TotalRecovered}
            </Typography>
        </>
    )
}
