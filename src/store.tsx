import { useState } from 'react'
import { createContainer } from 'unstated-next'

export const useStore = () => {
    const [selectedCountry, setSelectedCountry] = useState('')
    const changeCountry = (country: string) => {
        setSelectedCountry(country)
    }
    const [globalSummary, setGlobalSummary] = useState<IChangeGlobalSummary>({
        NewConfirmed: 0,
        NewDeaths: 0,
        NewRecovered: 0,
        TotalConfirmed: 0,
        TotalDeaths: 0,
        TotalRecovered: 0,
    })
    const changeGlobalSummary = (value: IChangeGlobalSummary) => {
        setGlobalSummary(value)
    }
    const [countriesSummary, setCountriesSummary] = useState<[]>([])
    const changeCountriesSummary = (value: []) => {
        setCountriesSummary(value)
    }
    const [updateDate, setUpdateDate] = useState('')
    const changeUpdateDate = (value: string) => {
        setUpdateDate(value)
    }
    return {
        selectedCountry,
        changeCountry,
        globalSummary,
        changeGlobalSummary,
        countriesSummary,
        changeCountriesSummary,
        updateDate,
        changeUpdateDate,
    }
}

export const StoreContainer = createContainer(useStore)
