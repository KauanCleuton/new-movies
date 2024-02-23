import customAxios from './middleware';

class Auth {
    register(payload) {
        return customAxios.post("/register", {
            email: payload.email,
            name: payload.name,
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
    logout(accessToken) {
        return customAxios.get("/logout", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    }
}


export default Auth;
