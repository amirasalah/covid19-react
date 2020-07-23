import React from 'react'
import { ResponsiveCalendar } from '@nivo/calendar'
import { Box } from '@material-ui/core'

export const Calendar: React.FC<any> = ({ data }) => {
    let startDate, endDate
    if (data.length) {
        startDate = data[0].day
        endDate = data[data.length - 1].day
    }
    return (
        <Box style={{ height: '250px' }}>
            {data.length && (
                <ResponsiveCalendar
                    data={data}
                    from={startDate}
                    to={endDate}
                    emptyColor='#eeeeee'
                    colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
                    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                    yearSpacing={40}
                    monthBorderColor='#ffffff'
                    dayBorderWidth={2}
                    dayBorderColor='#ffffff'
                />
            )}
        </Box>
    )
}
