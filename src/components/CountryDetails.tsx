import React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { instance } from '../apis/instance'
import { Calendar } from './Calendar'
import { Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import moment from 'moment'

export const CountryDetails: React.FC<ICountryDetails> = () => {
    let { country } = useParams()
    const [confirmedData, setConfirmedData] = React.useState([])
    const [deathsData, setDeathsData] = React.useState([])
    const [activeData, setActiveData] = React.useState([])
    const [recoveredData, setRecoveredData] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            const res = await instance.get(`dayone/country/${country}`)
            const confirmed = res.data.map((item: any) => {
                return {
                    day: moment(item.Date).format('YYYY-MM-DD'),
                    value: item.Confirmed,
                }
            })
            setConfirmedData(confirmed)
            const deaths = res.data.map((item: any) => {
                return {
                    day: moment(item.Date).format('YYYY-MM-DD'),
                    value: item.Deaths,
                }
            })
            setDeathsData(deaths)
            const active = res.data.map((item: any) => {
                return {
                    day: moment(item.Date).format('YYYY-MM-DD'),
                    value: item.Active,
                }
            })
            setActiveData(active)
            const recovered = res.data.map((item: any) => {
                return {
                    day: moment(item.Date).format('YYYY-MM-DD'),
                    value: item.Recovered,
                }
            })
            setRecoveredData(recovered)
        }
        fetchData()
        // eslint-disable-next-line
    }, [])
    return (
        <Container>
            <Box marginTop={5} marginBottom={5}>
                <Typography
                    style={{ fontWeight: 'bold' }}
                    align='center'
                    variant='h4'
                >
                    {country.toUpperCase()}
                </Typography>
            </Box>
            <Typography style={{ fontWeight: 'bold' }} variant='h5'>
                Confirmed Cases
            </Typography>
            <Calendar data={confirmedData} />
            <Typography style={{ fontWeight: 'bold' }} variant='h5'>
                Deaths Cases
            </Typography>
            <Calendar data={deathsData} />
            <Typography style={{ fontWeight: 'bold' }} variant='h5'>
                Active Cases
            </Typography>
            <Calendar data={activeData} />
            <Typography style={{ fontWeight: 'bold' }} variant='h5'>
                Recovered Cases
            </Typography>
            <Calendar data={recoveredData} />
        </Container>
    )
}
