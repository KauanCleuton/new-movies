import customAxios from "./middleware"

class Movies {
    getList(accessToken) {
        return customAxios.get("/list", {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        })
    }
}

export default Movies