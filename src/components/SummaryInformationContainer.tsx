import React from 'react'
import { StoreContainer } from '../store'
import { ChooseCountry } from './ChooseCountry'
import { SummaryInformation } from './SummaryInformation'
import axios from 'axios'
import { Typography } from '@material-ui/core'

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
                    <ChooseCountry />
                    {store.countriesSummary
                        .filter(
                            (Country: any) =>
                                Country.CountryCode === store.selectedCountry,
                        )
                        .map((el: any) => (
                            <>
                                <Typography>{el.Country}</Typography>
                                <SummaryInformation summary={el} />
                            </>
                        ))}
                </>
            ) : (
                <>
                    <div>
                        {store.globalSummary && (
                            <>
                                <SummaryInformation
                                    summary={store.globalSummary}
                                />
                            </>
                        )}
                    </div>
                </>
            )}
        </>
    )
}
