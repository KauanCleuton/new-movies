import customAxios from './middleware';

class Auth {
    register(name, email, password) {
        return customAxios.post("/register", {
            name: name,
            email: email,
            password: password
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
