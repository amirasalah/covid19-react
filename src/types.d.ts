//Intersection Types
//Union Types
//Generic Types

interface IChooseCountry {
    scrollPage: Function
}
interface IChangeGlobalSummary {
    NewConfirmed: number
    NewDeaths: number
    NewRecovered: number
    TotalConfirmed: number
    TotalDeaths: number
    TotalRecovered: number
}
interface ISummaryInformation {
    summary: IChangeGlobalSummary
}
interface ICalendar {
    data: ICalendarContent
}
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
