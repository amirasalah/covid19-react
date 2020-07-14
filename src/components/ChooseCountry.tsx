import React from 'react'
import axios from 'axios'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { Typography } from '@material-ui/core'
import { StoreContainer } from '../store'

interface CountryType {
    Country: string
    Slug: string
    ISO2: string
}

export const ChooseCountry = () => {
    const [data, setData] = React.useState<CountryType[]>([])
    const country = StoreContainer.useContainer()

    React.useEffect(() => {
        ;(async () => {
            const res = await axios('https://api.covid19api.com/countries')
            setData(res.data)
        })()
    }, [])
    return (
        <>
            <Autocomplete
                id='combo-box-demo'
                options={data}
                blurOnSelect={true}
                getOptionLabel={option => option.Country}
                onInputChange={(event: object, value: string, reason: string) =>
                    country.changeCountry(value)
                }
                style={{ width: 300 }}
                renderInput={params => (
                    <TextField placeholder='Choose Country' {...params} />
                )}
            />
            <Typography>You selected : {country.selectedCountry}</Typography>
        </>
    )
}
