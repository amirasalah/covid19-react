import React from 'react'
import { StoreContainer } from '../store'
import { ChooseCountry } from './ChooseCountry'
import { SummaryInformation } from './SummaryInformation'
import { Typography, Box } from '@material-ui/core'
import Moment from 'react-moment'
import 'moment-timezone'
import { instance } from '../apis/instance'
import { Element, scroller } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const scrollPage = () => {
    scroller.scrollTo('summaryContainer', {
        duration: 500,
        delay: 100,
        smooth: true,
        // containerId: 'ContainerElementID',
        // offset: 50,
    })
}
export const SummaryInformationContainer: React.FC<ISummaryInformationContainer> = ({
    selectedMethod,
}) => {
    const store = StoreContainer.useContainer()
    const { t } = useTranslation()
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
                        {t('Last Update')}
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
                    <ChooseCountry scrollPage={scrollPage} />
                    <Element name='summaryContainer'>
                        {store.countriesSummary
                            .filter(
                                (Country: any) =>
                                    Country.CountryCode ===
                                    store.selectedCountry,
                            )
                            .map((el: any) => {
                                console.log(el)
                                return (
                                    <>
                                        <Box marginBottom={2}>
                                            <Typography
                                                align='center'
                                                style={{ fontWeight: 'bold' }}
                                                variant='h3'
                                            >
                                                {el.Country}
                                            </Typography>
                                            <Typography
                                                align='center'
                                                variant='h6'
                                            >
                                                <NavLink
                                                    style={{
                                                        color: '#FF748F',
                                                        fontWeight: 'bold',
                                                    }}
                                                    to={`/${el.Slug}`}
                                                >
                                                    Check {el.Country}'s cases
                                                    history
                                                </NavLink>
                                            </Typography>
                                        </Box>

                                        <SummaryInformation summary={el} />
                                    </>
                                )
                            })}
                    </Element>
                </>
            ) : (
                <>
                    {store.globalSummary && (
                        <SummaryInformation summary={store.globalSummary} />
                    )}
                </>
            )}
        </>
    )
}
