import React from 'react'
import { StoreContainer } from '../store'
import { Typography } from '@material-ui/core'
import { ChooseCountry } from './ChooseCountry'
import axios from 'axios'
import { SummaryInformation } from './SummaryInformation'

interface ISummaryInformationContainer {
    selectedMethod: number
}
export const SummaryInformationContainer: React.FC<ISummaryInformationContainer> = ({
    selectedMethod,
}) => {
    const store = StoreContainer.useContainer()
    const country = StoreContainer.useContainer()
    React.useEffect(() => {
        ;(async () => {
            const res = await axios('https://api.covid19api.com/summary')
            store.changeCountriesSummary(res.data.Countries)
            store.changeGlobalSummary(res.data.Global)
        })()
    }, [store])
    return (
        <>
            {selectedMethod === 2 ? (
                <>
                    <Typography>Select country</Typography>
                    <ChooseCountry />
                    <Typography> {country.selectedCountry}</Typography>
                </>
            ) : (
                <>
                    <Typography>World Summary</Typography>
                    <div>
                        {store.globalSummary && (
                            <SummaryInformation summary={store.globalSummary} />
                        )}
                    </div>
                </>
            )}
        </>
    )
}
