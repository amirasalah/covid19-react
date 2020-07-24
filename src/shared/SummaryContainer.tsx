import React from 'react'
import { Grid } from '@material-ui/core'
import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { Box } from '@material-ui/core'

export const SummaryContainer: React.FC<ISummaryContainer> = ({ children }) => {
    return (
        <Grid item xs={6}>
            <Card>
                <CardContent>
                    <Box
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        {children}
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}
