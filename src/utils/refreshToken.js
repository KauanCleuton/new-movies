import jwtDecode from 'jwt-decode';
import { refreshToken } from 'services/auth.service';

const verifyJWTExpiration = (decoded) => {
    const timestamp = new Date().getTime();
    if (decoded?.exp * 1000 > timestamp) {
        process.env.NODE_ENV !== 'production' && console.log('token N expirado, ts = ', timestamp, 'jwt ts exp = ', decoded.exp);
        return true;
    } else {
        process.env.NODE_ENV !== 'production' && console.log('token expirado, ts = ', timestamp, 'jwt ts exp = ', decoded.exp);
        return false;
    }
};
export const isLoggedIn = (tokenType = 'refreshToken') => {
    const accessToken = sessionStorage.getItem('accessToken');
    const refreshToken = sessionStorage.getItem('refreshToken');
    if (!refreshToken && refreshToken !== 'undefined') {
        process.env.NODE_ENV !== 'production' && console.log('kkk23');
        return false;
    }
    if (accessToken && accessToken !== 'undefined') {
        process.env.NODE_ENV !== 'production' && console.log('kkk18');
        const decoded = tokenType === 'accessToken' ? jwtDecode(accessToken) : jwtDecode(refreshToken);
        return verifyJWTExpiration(decoded);
    }
    process.env.NODE_ENV !== 'production' && console.log('kkk20');
    return false;
};

export const isclientCredentialsExpired = () => {
    const clientCredentials = sessionStorage.getItem('clientCredentials');
    if (clientCredentials) {
        const decoded = jwtDecode(clientCredentials);
        if (decoded?.exp * 1000 > new Date().getTime()) {
            return false;
        }
        return true;
    }
    return false;
};

export const extractDataFromSession = () => {
    try {
        const accessToken = sessionStorage.getItem('accessToken');
        if (!accessToken) throw new Error('Nao possui accessToken');
        const { data } = jwtDecode(accessToken);
        return data;
    } catch (error) {
        process.env.NODE_ENV !== 'production' && console.error('Error while extracting data from JWT token:', error);
        return null;
    }
};
