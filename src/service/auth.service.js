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
    getUser(accessToken) {
        return customAxios.get("/users", {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        })
    }
    editUser(data, accessToken) {
        return customAxios.put("/edit-user", {
            name: data.name,
            email: data.email,
            foto_url: data.url,
            old_password: data.oldPassword,
            password: data.password
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    }
}


export default Auth;
