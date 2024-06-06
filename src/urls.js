import { API_KEY } from "./constants/constants";

const genres = [
    {
        url: `discover/tv?api_key=${API_KEY}&with_networks=213`,
        title: 'Netflix Originals',
        isSmall: false
    },
    {
        url: `discover/tv?api_key=${API_KEY}&with_networks=213`,
        title: 'Netflix Originals',
        isSmall: false
    },

]

export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `discover/movie?api_key=${API_KEY}&with_genres=35`
export const thriller = `discover/movie?api_key=${API_KEY}&with_genres=36`