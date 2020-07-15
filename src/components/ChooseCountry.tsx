import React from 'react'
import { ResponsiveGeoMap } from '@nivo/geo'
import countries from '../shared/worldCountries.json'
import { StoreContainer } from '../store'
import { Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'

export const ChooseCountry = () => {
    const store = StoreContainer.useContainer()

    return (
        <>
            <div style={{ height: '500px' }}>
                <Box marginBottom={2} marginTop={2}>
                    <Typography align='center'>Select country</Typography>
                </Box>
                <div style={{ height: '300px' }}>
                    <ResponsiveGeoMap
                        features={countries.features}
                        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                        projectionTranslation={[0.5, 0.5]}
                        projectionRotation={[0, 0, 0]}
                        fillColor='#eeeeee'
                        borderWidth={0.5}
                        borderColor='#333333'
                        // enableGraticule={true}
                        graticuleLineColor='#666666'
                        onClick={event => store.changeCountry(event.id)}
                    />
                </div>
            </div>
        </>
    )
}
