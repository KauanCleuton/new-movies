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
    addMovies(dataMovies, accessToken) {
        return customAxios.post("/add", {
            position: dataMovies.position,
            title: dataMovies.title,
            gender: dataMovies.gender,
            year: dataMovies.year,
            resolution: dataMovies.resolution,
            language: dataMovies.language,
            attended: dataMovies.attended
        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        });

    }
    deleteMovies(id, accessToken) {
        return customAxios.delete(`/delete/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    }



}

export default Movies