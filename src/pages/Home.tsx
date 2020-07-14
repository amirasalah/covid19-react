import React from 'react'
import { Typography } from '@material-ui/core'
import { SummaryInformationContainer } from '../components/SummaryInformationContainer'

export const Home = () => {
    const [searchScope, setSearchScope] = React.useState(0)
    const changeScope = (scopeIndex: number) => {
        setSearchScope(scopeIndex)
    }

    return (
        <>
            <Typography variant='h4'>Get Latest updates</Typography>
            <Typography variant='h6'>
                Please choose the preferred scope:
            </Typography>
            <button onClick={() => changeScope(1)}>World wide</button>
            <button onClick={() => changeScope(2)}>Choose country</button>
            {searchScope > 0 && (
                <SummaryInformationContainer selectedMethod={searchScope} />
            )}
        </>
    )
}
