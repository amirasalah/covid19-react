import React from 'react'
import { StoreContainer } from '../store'
import { Typography } from '@material-ui/core'
import { ChooseCountry } from './ChooseCountry'
import { SummaryInformation } from './SummaryInformation'
import axios from 'axios'

interface ISummaryInformationContainer {
    selectedMethod: number
}
export const SummaryInformationContainer: React.FC<ISummaryInformationContainer> = ({
    selectedMethod,
}) => {
    const store = StoreContainer.useContainer()
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
                    {/* <Typography> {store.selectedCountry}</Typography> */}
                    {store.countriesSummary
                        .filter(
                            (country: { Country: string }) =>
                                country.Country === store.selectedCountry,
                        )
                        .map(el => (
                            <SummaryInformation summary={el} />
                        ))}
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
