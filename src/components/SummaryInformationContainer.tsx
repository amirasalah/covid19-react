import React from 'react'
import { StoreContainer } from '../store'
import { ChooseCountry } from './ChooseCountry'
import { SummaryInformation } from './SummaryInformation'
import { Typography, Box } from '@material-ui/core'
import Moment from 'react-moment'
import 'moment-timezone'
import { instance } from '../apis/instance'
interface ISummaryInformationContainer {
    selectedMethod: number
}
export const SummaryInformationContainer: React.FC<ISummaryInformationContainer> = ({
    selectedMethod,
}) => {
    const store = StoreContainer.useContainer()

    React.useEffect(() => {
        const fetchData = async () => {
            const res = await instance.get('summary')
            store.changeCountriesSummary(res.data.Countries)
            store.changeGlobalSummary(res.data.Global)
            store.changeUpdateDate(res.data.Date)
        }
        fetchData()
        // eslint-disable-next-line
    }, [])
    return (
        <>
            {store.updateDate && (
                <Box marginBottom={2} marginTop={2}>
                    <Typography
                        align='center'
                        style={{ fontWeight: 'bold' }}
                        variant='h5'
                    >
                        Last Update
                    </Typography>
                    <Typography align='center' variant='h6'>
                        <Moment fromNow ago>
                            {store.updateDate}
                        </Moment>{' '}
                        ago
                    </Typography>
                </Box>
            )}
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
                                <Box marginBottom={2}>
                                    <Typography
                                        align='center'
                                        style={{ fontWeight: 'bold' }}
                                        variant='h3'
                                    >
                                        {el.Country}
                                    </Typography>
                                </Box>
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
