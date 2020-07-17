import React from 'react'
import { ResponsiveGeoMap } from '@nivo/geo'
import countries from '../shared/worldCountries.json'
import { StoreContainer } from '../store'
import { Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'

interface IChooseCountry {
    scrollPage: Function
}
export const ChooseCountry: React.FC<IChooseCountry> = ({ scrollPage }) => {
    const store = StoreContainer.useContainer()

    return (
        <>
            <Box style={{ height: '500px' }}>
                <Box marginBottom={2} marginTop={2}>
                    <Typography
                        align='center'
                        style={{ fontWeight: 'bold' }}
                        variant='h3'
                    >
                        Select a country
                    </Typography>
                </Box>
                <Box style={{ height: '300px' }}>
                    <ResponsiveGeoMap
                        features={countries.features}
                        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                        projectionTranslation={[0.5, 0.5]}
                        projectionRotation={[0, 0, 0]}
                        fillColor='#eeeeee'
                        borderWidth={0.5}
                        borderColor='#333333'
                        onClick={event => {
                            store.changeCountry(event.id)
                            scrollPage()
                        }}
                    />
                </Box>
            </Box>
        </>
    )
}
