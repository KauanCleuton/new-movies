import {Button} from '@mui/material'

export const ButtonComponent = ({children, padding}) => {
    return (
        <Button sx={{
            background: '#001928',
            padding: `${padding}`,
            color: '#fff',
            ":hover": {
                background: '#001919'
            }
        }}>
            {children}
        </Button>
    )
}