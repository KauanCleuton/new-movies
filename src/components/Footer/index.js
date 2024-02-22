import Box from '@mui/material/Box'
import CustomContainer from '../CustomContainer'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Instagram, GitHub, LinkedIn } from '@mui/icons-material'
import Link from "next/link"
const fontBodyParams = {
    fontSize: { lg: '1.3rem', md: '1.2rem', sm: '1.1rem', xs: '.8rem' },
    lineHeight: { lg: '1.5rem', md: '1.4rem', sm: '1.3rem', xs: '1.5rem' },
};

const Footer = () => {
    return (
        <Box sx={{
            width: "100vw",
            height: { lg: 200 },
            py: { xs: 3, sm: 6 },
            backgroundColor: "#001928",
            display: "flex",
        }}>
            <CustomContainer >
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <Typography sx={{ ...fontBodyParams, textAlign: "center", color: "#fff" }}>
                            Desenvolvido por Kauan Cleuton <br />
                            Web Developer - FullStack
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Link href="https://www.instagram.com/kauan.cleuton/" target='_blank'>
                                        <Instagram sx={{ color: "#fff" }} />
                                    </Link>
                                </Grid>
                                <Grid item >
                                    <Link href={"https://github.com/KauanCleuton"} target='_blank'>
                                        <GitHub sx={{ color: "#fff" }} />
                                    </Link>
                                </Grid>
                                
                                <Grid item >
                                    <Link href="https://www.linkedin.com/in/kauancleuton/" target='_blank'>
                                        <LinkedIn sx={{ color: "#fff" }} />
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </CustomContainer>
        </Box>
    )
}
export default Footer