import { useState } from 'react'
import { createContainer } from 'unstated-next'

export const useStore = () => {
    const [selectedCountry, setSelectedCountry] = useState<string>('')
    const changeCountry = (value: string) => {
        setSelectedCountry(value)
    }
    const [globalSummary, setGlobalSummary] = useState<any>()
    const changeGlobalSummary = (value: any) => {
        setGlobalSummary(value)
    }
    const [countriesSummary, setCountriesSummary] = useState<[]>([])
    const changeCountriesSummary = (value: []) => {
        setCountriesSummary(value)
    }
    return {
        selectedCountry,
        changeCountry,
        globalSummary,
        changeGlobalSummary,
        countriesSummary,
        changeCountriesSummary,
    }
}

export const StoreContainer = createContainer(useStore)
