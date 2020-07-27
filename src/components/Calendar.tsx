import React from 'react'
import { ResponsiveCalendar, CalendarDatum } from '@nivo/calendar'
import { Box } from '@material-ui/core'
import moment from 'moment'
export const Calendar: React.FC<{ data: CalendarDatum[] }> = ({ data }) => {
    let start, end
    if (data.length) {
        start = data[0].day
        end = moment(Date.now()).format('YYYY-MM-DD')
    }
    return (
        <Box style={{ height: '250px' }}>
            {data.length && (
                <ResponsiveCalendar
                    data={data}
                    emptyColor='#eeeeee'
                    colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
                    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                    yearSpacing={40}
                    monthBorderColor='#ffffff'
                    dayBorderWidth={2}
                    dayBorderColor='#ffffff'
                    from={`${start}`}
                    to={`${end}`}
                />
            )}
        </Box>
    )
}
