import React from 'react'
import { useParams } from 'react-router-dom'

export const CountryDetails: React.FC<ICountryDetails> = () => {
    let { country } = useParams()
    return <div>{country}</div>
}
