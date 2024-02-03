import { HighlightOffOutlined, RefreshOutlined } from '@mui/icons-material';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    styled,
    tableCellClasses,
    Box
} from '@mui/material'
import Link from 'next/link'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#001928',
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 15,
        color: '#fff'
    },
    padding: '20px 22px'
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: "rgba(0, 23,55 , 0.66)",

    },

    '&:last-child td, &:last-child th': {
        border: 0,

    },
    background: '#001928'
}));

const TableComponente = ({ data, onClick }) => {





    return (
        <TableContainer component={Paper} sx={{
            maxHeight: 520,
            overflowY: 'auto',
        }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{
                    position: 'sticky',
                    top: 0,
                    backgroundColor: 'white',
                }}>
                    <TableRow>
                        <StyledTableCell align='center'>Posição</StyledTableCell>
                        <StyledTableCell align="center">Título</StyledTableCell>
                        <StyledTableCell align="center">Gênero</StyledTableCell>
                        <StyledTableCell align="center">Ano</StyledTableCell>
                        <StyledTableCell align="center">Resolução</StyledTableCell>
                        <StyledTableCell align="center">Áudio</StyledTableCell>
                        <StyledTableCell align="center">Assistido</StyledTableCell>
                        <StyledTableCell align="left">Opções</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <StyledTableRow
                            key={row.posicao}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <StyledTableCell component="th" align='center' scope="row">
                                {row.posicao}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.titulo}</StyledTableCell>
                            <StyledTableCell align="center">{row.genero}</StyledTableCell>
                            <StyledTableCell align="center">{row.ano}</StyledTableCell>
                            <StyledTableCell align="center">{row.resolucao}</StyledTableCell>
                            <StyledTableCell align="center">{row.audio}</StyledTableCell>
                            <StyledTableCell align="center">{row.assistido}</StyledTableCell>
                            <StyledTableCell align="center" >
                                <Box style={{ display: 'flex', gap: 2 }}>
                                    <button
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                        onClick={() => onClick(row.posicao)}
                                    >
                                        <HighlightOffOutlined sx={{ fill: '#fff' }} />
                                    </button>
                                    <Link href="/edit-movie">
                                        <button
                                            style={{
                                                background: 'transparent',
                                                border: 'none',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <RefreshOutlined sx={{ fill: '#fff' }} />
                                        </button>
                                    </Link>
                                </Box>
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}
export default TableComponente