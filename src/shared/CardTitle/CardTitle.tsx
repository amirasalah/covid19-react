import React from 'react'
import { Typography } from '@material-ui/core'

interface ICardTitle {
    children: string
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
export const CardTitle: React.FC<ICardTitle> = ({ variantType, children }) => {
    return (
        <Typography style={{ fontWeight: 'bold' }} variant={variantType}>
            {children}
        </Typography>
    )
}
