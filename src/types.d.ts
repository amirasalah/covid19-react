interface IChooseCountry {
    scrollPage: Function
}
interface ISummaryInformation {
    summary: {
        NewConfirmed: string
        NewDeaths: string
        NewRecovered: string
        TotalConfirmed: string
        TotalDeaths: string
        TotalRecovered: string
    }
}
interface ICountryDetails {}
interface ISummaryInformationContainer {
    selectedMethod: number
}
interface ICardTitle {
    children: string | JSX.Element
    variantType:
        | 'button'
        | 'caption'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'inherit'
        | 'subtitle1'
        | 'subtitle2'
        | 'body1'
        | 'body2'
        | 'overline'
        | 'srOnly'
        | undefined
}
interface ISummaryContainer {
    children: JSX.Element[]
}
