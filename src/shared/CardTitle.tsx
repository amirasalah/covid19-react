import React from 'react'
import { Typography } from '@material-ui/core'

export const CardTitle: React.FC<ICardTitle> = ({ variantType, children }) => {
    return (
        <Typography style={{ fontWeight: 'bold' }} variant={variantType}>
            {children}
        </Typography>
    )
}
