import { Container } from '@mui/system';

const CustomContainer = (props) => {
    const { children, sx, fullHeight, ...rest } = props;

    return (
        <Container
            maxWidth="lg"
            sx={{px: { xs: 0, sm: 3 }, py: 1, minHeight: fullHeight && { xs: 'calc(100vh - 242px)', sm: 'calc(100vh - 156px)' }, ...sx }}
            {...rest}
        >
            {children}
        </Container>
    );
};

export default CustomContainer;
