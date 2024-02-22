import {Button, Link} from '@mui/material'

export const ButtonComponent = ({text, handleBuscar}) => {
    return (
        <Button  
        onClick={handleBuscar}
        sx={{
            background: '#001928',
            padding: "15px 40px",
            color: '#fff',
            ":hover": {
                background: '#001919'
            }
        }}>
            {text}
        </Button>
    )
}