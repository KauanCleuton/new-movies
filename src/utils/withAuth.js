import { useRouter } from 'next/navigation';
import { useEffect, useCallback } from 'react';
import { jwtDecode } from 'jwt-decode';
import Auth from '@/service/auth.service';

const verifyJWTExpiration = (token) => {
  const decoded = jwtDecode(token);
  const timestamp = new Date().getTime();
  return decoded.exp * 1000 > timestamp;
};

const withAuth = (WrappedComponent) => {
  const auth = new Auth();

  const Wrapper = (props) => {
    const router = useRouter();

    const refreshAccessToken = useCallback(async (refreshToken) => {
      try {
        const response = await auth.refreshTokenService(refreshToken);
        const { accessToken } = response.data;
        console.log('Novo accesstoken', accessToken);
        sessionStorage.setItem('accessToken', accessToken);
      } catch (error) {
        console.error('Erro ao renovar o token de acesso:', error);
        router.push('/login');
      }
    }, [router]);

    useEffect(() => {
      const accessToken = sessionStorage.getItem('accessToken');
      const refreshToken = sessionStorage.getItem('refreshToken');

      if (!accessToken || !refreshToken) {
        router.push('/login');
        return;
      }

      const isAccessTokenExpired = !verifyJWTExpiration(accessToken);
      const isRefreshTokenExpired = !verifyJWTExpiration(refreshToken);

      if (isAccessTokenExpired && isRefreshTokenExpired) {
        router.push('/login');
      } else if (isAccessTokenExpired) {
        refreshAccessToken(refreshToken);
      }
    }, [refreshAccessToken, router]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
