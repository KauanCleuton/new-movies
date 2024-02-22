import customAxios from './middleware';

class Auth {
    register(payload) {
        return customAxios.post("/register", {
            name: payload.name,
            email: payload.email,
            password: payload.password
        });
    }

    login(data) {
        return customAxios.post("/login", {
            email: data.email,
            password: data.password
        });
    }
    refreshTokenService = async (payload) => customAxios.post("refresh-token", {
        refreshToken: payload
    });
}


export default Auth;
