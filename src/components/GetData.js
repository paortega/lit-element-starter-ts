import { LitElement } from 'lit';
//const baseUrlCors = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com_'
const baseUrl = 'https://api.themoviedb.org'
const apiKey = 'api_key=58c61199f526cd7872da22c07cd2e9eb'

//import axios from './../../node_modules/@bundled-es-modules/axios';


class GetData extends LitElement {
    constructor(){
        super()
        console.log('hi')
        this.getSearchMovies()
    }
    async getSearchMovies() {
        try {
            const media = await fetch(`${baseUrl}/3/movie/550?${apiKey}`).then(data => data.json)
            return media
        } catch (err) {
            console.log(err)
        }
    }

}
customElements.define('get-data', GetData)
