const axios = require('axios')
const URL = 'https://www.googleapis.com/books/v1/volumes?q='

module.exports = {
    async getBooks(req, res) {
        const { search } = req.body
        //console.log(search)
        const url = `${URL}${search}&maxResults=1&key=AIzaSyDIND63Uyj-oFt1p1efn1EpVjNVMaP2lz0`
        const response = await axios.get(url)
        
        console.log(response.data.items[0].volumeInfo.title)
    }
}
